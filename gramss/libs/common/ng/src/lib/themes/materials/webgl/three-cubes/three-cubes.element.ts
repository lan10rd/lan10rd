import { Component, ViewChild } from '@angular/core'

import * as THREE from 'three'

@Component
({
    selector: 'common-themes-materials-webgl-three-cubes-element',
    templateUrl: './three-cubes.element.html',
    styleUrls: ['./three-cubes.element.scss']
})
export class CommonThemesMaterialsWebglThreeCubesElement
{

    THREE = THREE
    @ViewChild('three', {static: true}) threeCanvas

    camera
    scene
    renderer
    geometry
    material
    mesh

    ngOnInit
    (
    )
    {
        this.main()
    }

    init
    (
    )
    {
        let camera, scene, renderer;
        let geometry, material, mesh;

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true, canvas: this.threeCanvas.nativeElement } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setAnimationLoop( time => {

            mesh.rotation.x = time / 2000;
            mesh.rotation.y = time / 1000;

            renderer.render( scene, camera );
        } );
        // this.threeChild.nativeElement.appendChild( renderer.domElement );

    }

    main
    (
    )
    {
      const canvas = this.threeCanvas.nativeElement;
      const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas});

      const fov = 75;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      const scene = new THREE.Scene();

      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
      }

      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

      let makeInstance = function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
      }

      const cubes = [
        makeInstance(geometry, 0x44aa88,  0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844,  2),
      ];

      let resizeRendererToDisplaySize = function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

      let render = function render(time) {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
          const speed = 1 + ndx * .1;
          const rot = time * speed;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    }

}