import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import earthColorTexture from '../images/earth-color.jpg';
import earthNormalTexture from '../images/earth-normal.jpg';
import earthSpecularTexture from '../images/earth-specular.gif';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const RotatingGlobe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 10000 / 800, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const colorTexture = loader.load(earthColorTexture);
    const normalTexture = loader.load(earthNormalTexture);
    const specularTexture = loader.load(earthNormalTexture);

    const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: colorTexture,
      normalMap: normalTexture,
      specularMap: specularTexture,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    camera.position.z = 15;

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005; // Rotate the Earth
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        if (renderer.domElement.parentElement === containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
          }
      
          window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default RotatingGlobe;

