import { Injectable, Inject, Optional} from '@nestjs/common'

import { CommonNsLoggerService } from '../../../logger/logger.service'

import { MongoClient, ObjectId } from 'mongodb'

@Injectable()
export class CommonNsDataBasesMongoService
{

    mongodb = MongoClient

    clients: any = {}

    constructor
    (
        @Inject('COMMON_DATA_BASES_MONGO_CONNECTIONS') @Optional() public startup_connections: any, // ie, in global app module { provide: 'COMMON_DATA_BASES_MONGO_CONNECTIONS', useValue: JSON.parse(process.env.COMMON_DATA_BASES_MONGO_CONNECTIONS) || [] },
        public logger: CommonNsLoggerService
    )
    {

    }

    async onModuleInit
    (
    )
    {
        try
        {
            if (this.startup_connections)
            {
                let connects: any = []
                for (let client of this.startup_connections)
                    connects.push(this.connectClient(client.connection, client.name))
                await Promise.all(connects)
            }
        }
        catch(e)
        {
            this.logger.error(e)
        }
    }

    async onModuleDestroy
    (
    )
    {
        for (let client of Object.keys(this.clients))
        {
            try
            {
                await this.dropClient(client)
            }
            catch(e)
            {
                console.log('CommonMongoService.onModuleDestroy e', e, client)
            }
        }
    }

    /* mongodb://user:pass@localhost/db_name.collection */
    async connect ( url, options: any = { useUnifiedTopology: true }) {
        // let mongoClient = new MongoClient(url, options)
        let mongoClient = new MongoClient(url)
        await mongoClient.connect()
        return mongoClient
    }

    /* clients */
    async connectClient
    (
        connection: string,
        client_name?: string
    )
    {
        // const url = 'mongodb://root:example@realms_glass_mongo_new_data:27017'
        // const client = new MongoClient(url, { useUnifiedTopology: true })
        // await client.connect()
        // console.log('Connected successfully to server')
        // const db = client.db('spirits')
        // const collection = db.collection('accounts')

        if (!client_name) client_name = connection
        if (!(client_name in this.clients)) this.clients[client_name] = { connection, client: await this.connect(connection) }
        return this.clients[client_name].client
    }
    async dropClient
    (
        client_name: string
    )
    {
        await this.clients[client_name].client.close()
        delete this.clients[client_name]
    }
    getClient( client_name: string) { return this.clients[client_name].client }

    /* db */
    getDatabase( client, databaseName ) { return client.db(databaseName) }
    getDatabaseByClient(client_name, database_name) { return this.getDatabase(this.getClient(client_name), database_name) }
    async listDatabases ( db ) { return db.admin().listDatabases() }
    async dropDatabase ( db ) { return await db.dropDatabase() }
    async serverStatus ( db ) { return db.admin().serverStatus() }

    /* sessions */
    startSession( client_name: string) { return this.getClient(client_name).startSession() }
    async endSession(session: any){ await session.endSession() }
 
    /* transactions */
    async transaction
    (
        client_name: string,
        fun: Function,
        transaction_options: any = {
            readPreference: 'primary',
            readConcern: { level: 'local' },
            writeConcern: { w: 'majority' }
        }
    )
    {
        let session = this.startSession(client_name)
        let err: Error
        let transactionResults: any
        try
        { 
            transactionResults = await session.withTransaction(async () => { await fun(session) }, transaction_options)
        }
        catch(e)
        {
            err = e
        }
        finally
        {
            this.endSession(session)
        }
        if (err) throw err
        return transactionResults
    }
    
    /* collections */
    getCollection ( db, collectionName ) { return db.collection(collectionName) }
    async dropCollection(db, collectionName ) { return this.getCollection(db, collectionName).remove() }
    async insert ( collection, documents, options? ) { return collection.insert(documents, options) }
    async insertOne ( collection, document, options? ) { return collection.insertOne(document, options) }
    async insertMany ( collection, documents, options? ) { return collection.insertMany(documents, options) }
    async update ( collection, documents, options? ) { return collection.update(documents, options) }
    async updateOne ( collection, update, set, options? ) { return collection.updateOne(update, set, options) }
    async updateMany ( collection, update, set, options? ) { return collection.updateMany(update, set, options) }
    async find ( collection, query: any = {}, options?, limit? ) {
        if (!options)
            return limit ? collection.find(query).limit(limit) : collection.find(query)
        return limit ? collection.find(query, options).limit(limit) : collection.find(query, options) }
    async findOne(collection, query: any = {}, options?) { return collection.findOne(query) }
    async sort ( documents, sort ) { return documents.sort(sort) }
    async findAndSort ( collection, query, sort, options? ) { return this.sort(await this.find(collection, query, options), sort) }
    async deleteOne ( collection, query, options? ) { return collection.deleteOne(query, options) }
    async deleteMany ( collection, query, options? ) { return collection.deleteMany(query, options) }
    async createIndex ( collection, index ) { return collection.createIndex(index) }
    async aggregate ( collection, query ) { return collection.aggregate(query) }

    async findWrapper(collection, query: any = {}, options?)
    {
        return new Promise((resolve, reject) => {
            collection.find(query, options, (err, result) => { err ? reject(err) : resolve(result)
                // if (err) reject(err)
                // resolve(result)
            })
        }) as any
    }

    async findOneWrapper(collection, query: any = {}, options?)
    {
        return new Promise((resolve, reject) => {
            collection.findOne(query, options, (err, result) => { err ? reject(err) : resolve(result)
                // if (err) reject(err)
                // resolve(result)
            })
        }) as any
    }

    _id(id?: string) { return id ? new ObjectId(id) : new ObjectId() }

}
