import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { useEffect, useRef } from 'react';

const ThreeJSAnimation = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const scene = new THREE.Scene();

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('static/textures/star.png');
    const planetTexture = textureLoader.load('static/textures/planet.jpg');

    // Axes helper
    // const axexHelper = new THREE.AxesHelper();
    // scene.add(axexHelper);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Particles
     */
    // Geometry

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Sphere
    const geometrySphere = new THREE.SphereGeometry(1, 32, 16);
    const materialSphere = new THREE.MeshPhongMaterial({
      map: planetTexture,
      color: '#60372e',
    });

    // Light
    const ambientLightRed = new THREE.AmbientLight('#231311');
    const ambientLightBlue = new THREE.AmbientLight('#121e23');
    const light = new THREE.PointLight('white', 1.5);
    light.position.set(48, 24, 24);
    scene.add(ambientLightRed, ambientLightBlue, light);

    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    scene.add(sphere);

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      sizeAttenuation: true,
    });
    particlesMaterial.map = particleTexture;
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;

    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);

    camera.position.z = 3;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Zoom on load
      // let counter = elapsedTime * 25;
      // const revolutions = 50;
      // if (counter >= 0 && counter <= revolutions) {
      //   camera.position.x = revolutions - counter;
      //   sphere.rotation.y = counter / 5;
      // }

      // Update controls
      controls.update();
      sphere.rotation.y += -0.002;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);
  return <div ref={refContainer}></div>;
};

export default ThreeJSAnimation;
