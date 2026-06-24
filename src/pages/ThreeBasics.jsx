import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ThreeBasics() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Force stable dimensions (uses container size or defaults to 400)
    const width = mountRef.current.clientWidth || 400;
    const height = mountRef.current.clientHeight || 400;

    // 2. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Slate-900 matching your layout

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(6, 6, 6); 

    // 4. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 5. Orbit Controls (Safe Initialization)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;

    // 6. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 12, 8);
    scene.add(directionalLight);

    // 7. Ground Plane & Grid
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x334155 }); // Slate-700
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; 
    scene.add(ground);

    const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0x475569);
    gridHelper.position.y = 0.01; 
    scene.add(gridHelper);

    // 8. Town Hall (Blue Box)
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const townHallMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
    const townHall = new THREE.Mesh(boxGeometry, townHallMaterial);
    townHall.position.set(0, 1, 0); 
    scene.add(townHall);

    // 9. Tech Factory (Orange Box)
    const factoryMaterial = new THREE.MeshStandardMaterial({ color: 0xf97316 });
    const factory = new THREE.Mesh(boxGeometry, factoryMaterial);
    factory.position.set(5, 1, 0); 
    scene.add(factory);

    // Lock camera target right between the two buildings
    controls.target.set(2.5, 1, 0);

    // 10. Clean Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update(); 
      console.log(camera.position);
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("pointerdown", () => {
  console.log("Pointer detected");
});

    // 11. Complete Component Teardown
    return () => {
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      boxGeometry.dispose();
      townHallMaterial.dispose();
      factoryMaterial.dispose();
      groundGeometry.dispose();
      groundMaterial.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]"></div>;
}

export default ThreeBasics;