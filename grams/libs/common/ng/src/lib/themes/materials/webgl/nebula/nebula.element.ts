import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core'

import * as THREE from 'three'
import * as POSTPROCESSING from 'postprocessing'

@Component
({
    selector: 'common-themes-materials-webgl-nebula-element',
    template:` <canvas #three style="width: 100%; height: 100%; display: block; position: fixed; z-index: -1; top: 0; left: 0;"></canvas>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonThemesMaterialsWebglNebulaElement
{

    @ViewChild('three', {static: true}) threeCanvas

    ngOnInit
    (
    )
    {

      // **************
        // Created using a tutorial from Redstapler
        // **************

        // Three JS needs mainly below three things

        /* //////////////////////////////////////// */

        // SCENE
        let scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x03544e, 0.001);

        /* //////////////////////////////////////// */

        // CAMERA
        let camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
        camera.position.z = 1;
        camera.rotation.x = 1.16;
        camera.rotation.y = -0.12;
        camera.rotation.z = 0.27;

        /* //////////////////////////////////////// */

        // RENDERER
        let renderer = new THREE.WebGLRenderer({canvas: this.threeCanvas.nativeElement});
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.setClearColor(scene.fog.color);

        /* //////////////////////////////////////// */

        // Composer
        let composer = new POSTPROCESSING.EffectComposer(renderer);
        composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

        /* //////////////////////////////////////// */

        // Ambient Ligth to Scene
        let ambient = new THREE.AmbientLight(0x555555);
        scene.add(ambient);

        /* //////////////////////////////////////// */

        // DirectionalLight to Scene
        let directionalLight = new THREE.DirectionalLight(0xff8c19);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);

        /* //////////////////////////////////////// */

        //  PointLight to Scene
        let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
        orangeLight.position.set(200,300,100);
        scene.add(orangeLight);
        let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
        redLight.position.set(100,300,100);
        scene.add(redLight);
        let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
        blueLight.position.set(300,300,200);
        scene.add(blueLight);

        /* //////////////////////////////////////// */

        let cloudParticles = []

        // Smoke Loaders
        let loader = new THREE.TextureLoader();
        loader.load("https://assets.glass.earth/three/nebula/smoke.png", function(texture){
          let cloudGeo: any = new THREE.PlaneBufferGeometry(500,500);
          let cloudMaterial: any = new THREE.MeshLambertMaterial({
            map:texture,
            transparent: true
          });

          for(let p=0; p<50; p++) {
            let cloud: any = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
              Math.random()*800 -400,
              500,
              Math.random()*500-500
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random()*2*Math.PI;
            cloud.material.opacity = 0.55;
            cloudParticles.push(cloud);
            scene.add(cloud);
          }
        });

        // Stars background Loaders
        loader.load("https://assets.glass.earth/three/nebula/stars.jpg", function(texture){
          const textureEffect = new POSTPROCESSING.TextureEffect({
            blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
            texture: texture
          });
          textureEffect.blendMode.opacity.value = 0.2;

          const bloomEffect = new POSTPROCESSING.BloomEffect({
                blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
                kernelSize: POSTPROCESSING.KernelSize.SMALL,
                useLuminanceFilter: true,
                luminanceThreshold: 0.3,
                luminanceSmoothing: 0.75
              });
          bloomEffect.blendMode.opacity.value = 1.5;

          let effectPass = new POSTPROCESSING.EffectPass(
            camera,
            bloomEffect,
            textureEffect
          );
          effectPass.renderToScreen = true;
          composer.addPass(effectPass);
        });

        /* //////////////////////////////////////// */

        // Render animation on every rendering phase
        let render = function render() {
          requestAnimationFrame(render);
          // Post Processing Render
          composer.render(0.1);
          
          // Cloud rotation
          cloudParticles.forEach(p => {
            p.rotation.z -=0.001;
          });
        }

        render();

        /* //////////////////////////////////////// */

        // Update Camera Aspect Ratio and Renderer ScreenSize on Window resize
        window.addEventListener( 'resize', function () {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
        }, false );

        /*////////////////////////////////////////*/

    }
}