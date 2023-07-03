"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.CommonNsFilesService = void 0;
var common_1 = require("@nestjs/common");
// import { Injectable, StreamableFile } from '@nestjs/common'
var fs_1 = require("fs"); // could do fs.promises instead!
var fse = require("fs-extra");
var path = require("path");
var multer = require("multer");
var busboy = require("busboy");
var CommonNsFilesService = /** @class */ (function () {
    function CommonNsFilesService() {
        this.fs = fs_1.promises;
        this.fse = fse;
        this.path = path;
        this.multer = multer;
        this.busboy = busboy;
        /* streamables, can return this from a controller method */
        // getStreamableFile
        // (
        //     path: string
        // )
        // // : StreamableFile
        // {
        //     // const file = fse.createReadStream(join(process.cwd(), 'package.json'))
        //     const file = fse.createReadStream(path)
        //     return new StreamableFile(file) // or file.pipe(res); // note return not needed, as per example
        // }
    }
    CommonNsFilesService.prototype.exists = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs_1.promises.access(path)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommonNsFilesService.prototype.stat = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var sta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.stat(path)];
                    case 1:
                        sta = _a.sent();
                        return [2 /*return*/, { stat: sta, isFile: sta.isFile(), isDirectory: sta.isDirectory() }];
                }
            });
        });
    };
    /*
    function copy() {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
    */
    CommonNsFilesService.prototype.copy = function (from, to) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(to)];
                    case 1:
                        if (_a.sent())
                            throw new Error('new path already exists!');
                        return [4 /*yield*/, this.exists(from)];
                    case 2:
                        if (!(_a.sent()))
                            throw new Error('current path doest not exist!');
                        return [4 /*yield*/, this.fse.copy(from, to)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonNsFilesService.prototype.move = function (source, destination) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(destination)];
                    case 1:
                        if (_a.sent())
                            throw new Error('destination already exists!');
                        return [4 /*yield*/, this.exists(source)];
                    case 2:
                        if (!(_a.sent()))
                            throw new Error('source doest not exist!');
                        return [4 /*yield*/, this.fse.move(source, destination)
                            // return await fs.rename(current_path, new_path)
                        ];
                    case 3: return [2 /*return*/, _a.sent()
                        // return await fs.rename(current_path, new_path)
                    ];
                }
            });
        });
    };
    CommonNsFilesService.prototype.read = function (path, parse) {
        if (parse === void 0) { parse = false; }
        return __awaiter(this, void 0, void 0, function () {
            var stat, read;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(path)];
                    case 1:
                        if (!(_a.sent()))
                            throw new Error('path: ' + path + ' does not exist!');
                        return [4 /*yield*/, fs_1.promises.stat(path)];
                    case 2:
                        stat = _a.sent();
                        if (!stat.isFile()) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.promises.readFile(path, 'utf8')];
                    case 3:
                        read = _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!stat.isDirectory()) return [3 /*break*/, 6];
                        return [4 /*yield*/, fs_1.promises.readdir(path)];
                    case 5:
                        read = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, parse ? JSON.parse(read) : read];
                }
            });
        });
    };
    CommonNsFilesService.prototype.write = function (path, content) {
        return __awaiter(this, void 0, void 0, function () {
            var dir, splits, s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = typeof content === 'object' ? JSON.stringify(content) : content;
                        return [4 /*yield*/, this.exists(path)];
                    case 1:
                        if (!!(_a.sent())) return [3 /*break*/, 10];
                        if (!(content === undefined || content === null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.promises.mkdir(path, { recursive: true })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.read(path)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        dir = '';
                        splits = path.split('/');
                        for (s = 0; s < splits.length; s++) {
                            if (s < splits.length - 1)
                                dir += splits[s] + '/';
                        }
                        return [4 /*yield*/, this.exists(dir)];
                    case 5:
                        if (!!(_a.sent())) return [3 /*break*/, 7];
                        return [4 /*yield*/, fs_1.promises.mkdir(dir, { recursive: true })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, fs_1.promises.writeFile(path, content, 'utf8')];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, fs_1.promises.writeFile(path, content, 'utf8')];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.exists(path)];
                    case 13:
                        if (!_a.sent()) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.read(path)];
                    case 14: return [2 /*return*/, _a.sent()];
                    case 15: throw new Error('unable to write for path: ' + path);
                }
            });
        });
    };
    CommonNsFilesService.prototype.erase = function (path, file) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(path)];
                    case 1:
                        if (!(_a.sent()))
                            throw new Error('path: ' + path + ' does not exist!');
                        return [4 /*yield*/, fs_1.promises.stat(path)];
                    case 2:
                        stat = _a.sent();
                        if (!stat.isDirectory()) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.promises.rmdir(path, { recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!stat.isFile()) return [3 /*break*/, 6];
                        return [4 /*yield*/, fs_1.promises.unlink(path)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.exists(path)];
                    case 7:
                        if (!(_a.sent()))
                            return [2 /*return*/, { code: 'success', msg: 'erased: ' + path }];
                        else
                            throw new Error('failed to erase ' + path);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonNsFilesService.prototype.walk = function (dir) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var paths, _b, _c, d, entry, walks, _i, walks_1, walk, e_2_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paths = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 9, 10, 15]);
                        return [4 /*yield*/, fs_1.promises.opendir(dir)];
                    case 2:
                        _b = __asyncValues.apply(void 0, [_d.sent()]);
                        _d.label = 3;
                    case 3: return [4 /*yield*/, _b.next()];
                    case 4:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 8];
                        d = _c.value;
                        entry = path.join(dir, d.name);
                        if (!d.isDirectory()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.walk(entry)];
                    case 5:
                        walks = _d.sent();
                        for (_i = 0, walks_1 = walks; _i < walks_1.length; _i++) {
                            walk = walks_1[_i];
                            paths.push(walk);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        if (d.isFile())
                            paths.push(entry);
                        _d.label = 7;
                    case 7: return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _d.trys.push([10, , 13, 14]);
                        if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _a.call(_b)];
                    case 11:
                        _d.sent();
                        _d.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, paths];
                }
            });
        });
    };
    /* dont recommend using these lol rips through all the memory as it buffers, just use mueller or some other plugin */
    CommonNsFilesService.prototype.upload = function (path, buffer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.writeFile(path, buffer, 'binary')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.download(path)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonNsFilesService.prototype.download = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.readFile(path, 'binary')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonNsFilesService = __decorate([
        common_1.Injectable()
    ], CommonNsFilesService);
    return CommonNsFilesService;
}());
exports.CommonNsFilesService = CommonNsFilesService;
