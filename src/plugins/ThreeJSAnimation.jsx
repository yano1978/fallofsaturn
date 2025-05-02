import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

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

    /**
     * Create Saturn ring texture
     */
    const createRingTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 64;
      const context = canvas.getContext('2d');

      // Fill with transparent background
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient from inner to outer edge
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);

      // Create more detailed ring color bands
      gradient.addColorStop(0.0, 'rgba(205, 195, 170, 0.0)');
      gradient.addColorStop(0.02, 'rgba(215, 200, 180, 0.6)');
      gradient.addColorStop(0.1, 'rgba(220, 210, 190, 0.9)');
      gradient.addColorStop(0.25, 'rgba(225, 215, 195, 0.9)');
      gradient.addColorStop(0.3, 'rgba(200, 190, 170, 0.7)');
      gradient.addColorStop(0.32, 'rgba(190, 180, 160, 0.6)');
      gradient.addColorStop(0.35, 'rgba(220, 210, 185, 0.9)');
      gradient.addColorStop(0.4, 'rgba(225, 215, 190, 0.9)');
      gradient.addColorStop(0.5, 'rgba(200, 190, 165, 0.8)');
      gradient.addColorStop(0.55, 'rgba(230, 220, 190, 0.9)');
      gradient.addColorStop(0.6, 'rgba(210, 200, 175, 0.8)');
      gradient.addColorStop(0.7, 'rgba(220, 210, 180, 0.9)');
      gradient.addColorStop(0.8, 'rgba(200, 190, 165, 0.8)');
      gradient.addColorStop(0.9, 'rgba(190, 180, 160, 0.7)');
      gradient.addColorStop(0.95, 'rgba(180, 170, 150, 0.5)');
      gradient.addColorStop(1.0, 'rgba(180, 170, 150, 0.0)');

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Add more detailed ring structure bands
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const bandWidth = 0.5 + Math.random() * 1.5; // Thinner bands
        const opacity = 0.03 + Math.random() * 0.1; // Subtle

        context.fillStyle =
          Math.random() > 0.3 ? `rgba(80, 70, 60, ${opacity})` : `rgba(200, 190, 170, ${opacity})`;

        context.fillRect(x, 0, bandWidth, canvas.height);
      }

      // Add radial streaks for more realistic ring texture
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const width = 0.5 + Math.random() * 2;
        const height = 2 + Math.random() * (canvas.height - 4);
        const y = (canvas.height - height) / 2;
        const opacity = 0.02 + Math.random() * 0.08;

        context.fillStyle = `rgba(100, 90, 80, ${opacity})`;
        context.fillRect(x, y, width, height);
      }

      // Add some fine grain noise
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 10 - 5;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }

      context.putImageData(imageData, 0, 0);

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;
      texture.needsUpdate = true;

      return texture;
    };

    // Create the ring texture
    const saturnRingTexture = createRingTexture();

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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x202020, 0.4); // Dimmer ambient for more contrast

    // Main directional sunlight with shadows enabled
    const sunLight = new THREE.DirectionalLight(0xfffaf0, 1.5);
    sunLight.position.set(8, 3, 12);
    sunLight.castShadow = true;

    // Increase shadow map size for better quality
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;

    // Rim light
    const rimLight = new THREE.PointLight(0xffffee, 0.6);
    rimLight.position.set(-12, 0, -10);

    // Fill light
    const fillLight = new THREE.PointLight(0xffffdd, 0.3);
    fillLight.position.set(0, -5, -3);

    scene.add(ambientLight, sunLight, rimLight, fillLight);

    // Sphere geometry
    const geometrySphere = new THREE.SphereGeometry(1, 64, 48);

    // Planet material
    const materialSphere = new THREE.MeshStandardMaterial({
      map: planetTexture,
      color: '#e6d9b8',
      roughness: 0.8,
      metalness: 0.1,
      bumpScale: 0.05,
    });

    // Glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.02, 64, 48);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xf3e9c0,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });

    // Planet
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);

    // Add subtle atmosphere glow around Saturn
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    sphere.add(atmosphere);

    // Rings
    const createBands = () => {
      const bandCount = 50; // Bands on the rings
      for (let i = 0; i < bandCount; i++) {
        const yPos = 0.9 * (i / bandCount - 0.4); // Position bands primarily at equator

        // Vary the size based on position (thinner near poles, wider at equator)
        const bandRadius = 0.9 - Math.abs(yPos) * 0.3;
        const thickness = 0.02 + (Math.abs(i - bandCount / 2) < 2 ? 0.015 : 0); // Thicker in the middle

        const bandGeometry = new THREE.TorusGeometry(bandRadius, thickness, 16, 100);

        // Alternate colors with slight variations
        const hue = i % 2 === 0 ? 42 : 38; // Beige/sand colors
        const sat = 30 + Math.random() * 20;
        const light = 70 + Math.random() * 15;

        const bandColor = new THREE.Color().setHSL(hue / 360, sat / 100, light / 100);

        const bandMaterial = new THREE.MeshStandardMaterial({
          color: bandColor,
          transparent: true,
          opacity: 0.4 + (Math.abs(i - bandCount / 2) < 2 ? 0.15 : 0),
          roughness: 0.7,
          metalness: 0.1,
        });

        const band = new THREE.Mesh(bandGeometry, bandMaterial);
        band.rotation.x = Math.PI / 2;
        band.position.y = yPos;
        sphere.add(band);
      }
    };

    createBands();
    scene.add(sphere);

    // Particles
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

    // Camera position
    camera.position.z = 3.2;
    camera.position.y = 1.5;
    camera.position.x = 0.5;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minDistance = 2.5;
    controls.maxDistance = 5;
    controls.maxPolarAngle = Math.PI * 0.65;
    controls.target.set(0, 0.2, 0);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Black background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
    renderer.physicallyCorrectLights = true; // More realistic lighting
    renderer.outputEncoding = THREE.sRGBEncoding; // Better color rendering

    /**
     * Saturn Ring Controls
     */
    // Ring settings with default values
    const ringSettings = {
      innerRadius: 1.2,
      outerRadius: 2.2,
      tilt: 0,
      opacity: 0.9,
      color: '#f5e9c0',
      verticalPosition: 0.1,
      subtleAnimation: false,
    };

    // Reference to the ring mesh
    let ring;

    // Function to create/update rings
    const updateRings = () => {
      // Remove existing ring if any
      if (ring) {
        scene.remove(ring);
      }

      // Create a ring parent group
      const ringsGroup = new THREE.Group();

      // Multiple ring segments with slight gaps and color variations
      const ringSegments = [
        {
          inner: ringSettings.innerRadius,
          outer: ringSettings.innerRadius + 0.2,
          opacity: 0.7,
          color: ringSettings.color,
        },
        {
          inner: ringSettings.innerRadius + 0.22,
          outer: ringSettings.innerRadius + 0.6,
          opacity: 0.85,
          color: '#e0d5b0',
        },
        {
          inner: ringSettings.innerRadius + 0.63,
          outer: ringSettings.innerRadius + 0.7,
          opacity: 0.5,
          color: '#d0c5a0',
        }, // Cassini Division
        {
          inner: ringSettings.innerRadius + 0.72,
          outer: ringSettings.outerRadius - 0.3,
          opacity: 0.8,
          color: '#e5d9b5',
        },
        {
          inner: ringSettings.outerRadius - 0.28,
          outer: ringSettings.outerRadius,
          opacity: 0.6,
          color: '#d5caaa',
        },
      ];

      // Create each ring segment
      ringSegments.forEach((segment) => {
        const segmentGeometry = new THREE.RingGeometry(segment.inner, segment.outer, 128);

        // Apply UV mapping to each segment
        const posAttribute = segmentGeometry.attributes.position;
        const uvAttribute = segmentGeometry.attributes.uv;
        const vertexCount = posAttribute.count;

        for (let i = 0; i < vertexCount; i++) {
          const vertex = new THREE.Vector3().fromBufferAttribute(posAttribute, i);
          const distance = vertex.length();

          // Calculate normalized distance
          const normalized = (distance - segment.inner) / (segment.outer - segment.inner);

          // Set UV coordinates
          uvAttribute.setXY(i, normalized, i % 2);
        }

        // Make ring flat
        segmentGeometry.rotateX(Math.PI / 2);

        // Create material for this segment
        const segmentMaterial = new THREE.MeshStandardMaterial({
          map: saturnRingTexture,
          color: new THREE.Color(segment.color),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: segment.opacity * ringSettings.opacity,
          roughness: 0.6,
          metalness: 0.1,
          depthWrite: false,
          alphaTest: 0.1,
        });

        segmentMaterial.polygonOffset = true;
        segmentMaterial.polygonOffsetFactor = -1;

        // Create segment mesh
        const segmentMesh = new THREE.Mesh(segmentGeometry, segmentMaterial);

        // Add to the rings group
        ringsGroup.add(segmentMesh);
      });

      // Position and orient the whole group
      ringsGroup.position.copy(sphere.position);
      ringsGroup.position.y += ringSettings.verticalPosition;
      ringsGroup.rotation.x = ringSettings.tilt;

      // Add to scene
      scene.add(ringsGroup);

      // Update the ring reference
      ring = ringsGroup;
    };

    // Create initial rings
    updateRings();

    // Set up GUI only in development mode
    let gui;
    if (process.env.NODE_ENV === 'development') {
      gui = new GUI({ width: 300 });
      const ringsFolder = gui.addFolder('Saturn Rings');

      ringsFolder.add(ringSettings, 'innerRadius', 1.0, 2.0).step(0.05).onChange(updateRings);
      ringsFolder.add(ringSettings, 'outerRadius', 2.0, 4.0).step(0.05).onChange(updateRings);
      ringsFolder
        .add(ringSettings, 'tilt', 0, Math.PI / 2)
        .step(0.01)
        .name('tilt angle')
        .onChange(updateRings);
      ringsFolder.add(ringSettings, 'opacity', 0, 1).step(0.05).onChange(updateRings);
      ringsFolder.addColor(ringSettings, 'color').onChange(updateRings);
      ringsFolder
        .add(ringSettings, 'verticalPosition', -0.5, 0.5)
        .step(0.01)
        .name('vertical position')
        .onChange(updateRings);
      ringsFolder.add(ringSettings, 'subtleAnimation').name('subtle animation');

      ringsFolder.open();
    }

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      // Update controls
      controls.update();

      // Rotate Saturn slowly
      sphere.rotation.y += 0.001;

      // Rotate rings to match Saturn (but slightly slower for visual interest)
      if (ring) {
        ring.rotation.y += 0.0008; // Slightly slower rotation than Saturn itself
      }

      // Apply subtle animation to rings if enabled
      if (ring && ringSettings.subtleAnimation) {
        ring.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.01;
      }

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    // Cleanup function
    return () => {
      // Dispose of resources when component unmounts
      if (gui) gui.destroy();
      if (ring) {
        // For each child in the group
        ring.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
      if (sphere) {
        sphere.geometry.dispose();
        sphere.material.dispose();
      }
    };
  }, []);

  return <div ref={refContainer}></div>;
};

export default ThreeJSAnimation;
