"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Individual floating shape component
function FloatingShape({ position, type, colors, mousePos }: { 
  position: [number, number, number], 
  type: 'sphere' | 'box',
  colors: THREE.Color[],
  mousePos: { x: number, y: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useMemo(() => position, [position]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      meshRef.current.position.y = initialPos[1] + Math.sin(time + initialPos[0]) * 0.2;
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        initialPos[0] + mousePos.x * 0.5,
        0.1
      );
      meshRef.current.position.z = initialPos[2] + mousePos.y * 0.5,

      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === 'sphere' ? <sphereGeometry args={[0.2, 32, 32]} /> : <boxGeometry args={[0.3, 0.3, 0.3]} />}
      <meshPhysicalMaterial 
        color={colors[0]}
        emissive={colors[1]}
        emissiveIntensity={1}
        roughness={0.1}
        metalness={1}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

function ShapeField({ color, mousePos }: { color: THREE.Color, mousePos: { x: number, y: number } }) {
  const { viewport } = useThree();
  
  const shapes = useMemo(() => {
    const list = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      // Strict edge placement: 10% on each side
      const edgeThreshold = viewport.width * 0.45;
      const x = side * (edgeThreshold + Math.random() * (viewport.width * 0.05));
      const y = (Math.random() - 0.5) * viewport.height * 2;
      const z = (Math.random() - 0.5) * 4;
      
      // Create multi-color degrees based on the theme color
      const color1 = color.clone();
      const color2 = color.clone().offsetHSL(0.1, 0.2, 0.1);

      list.push({
        position: [x, y, z] as [number, number, number],
        type: (Math.random() > 0.5 ? 'sphere' : 'box') as 'sphere' | 'box',
        colors: [color1, color2]
      });
    }
    return list;
  }, [viewport.width, viewport.height, color]);

  return (
    <>
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} mousePos={mousePos} />
      ))}
    </>
  );
}

function SkyBackground() {
  const { scene } = useThree();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScroll(currentScroll / (totalScroll || 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColors = [
    "#030014", // Hero
    "#0a001a", // Purple
    "#000a1a", // Blue
    "#001a0a", // Green
    "#1a1500", // Yellow
    "#1a0000"  // Red
  ];

  const getInterpolatedColor = (p: number) => {
    const section = p * (bgColors.length - 1);
    const index = Math.floor(section);
    const fraction = section - index;
    if (index >= bgColors.length - 1) return new THREE.Color(bgColors[bgColors.length - 1]);
    return new THREE.Color(bgColors[index]).lerp(new THREE.Color(bgColors[index + 1]), fraction);
  };

  useFrame(() => {
    scene.background = getInterpolatedColor(scroll);
  });

  return null;
}

export default function Experience3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(window.scrollY / (totalScroll || 1));
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const colors = [
    "#9D4EDD", // Vibrant Purple
    "#00D1FF", // Vibrant Blue
    "#00F5FF", // Cyan/Green
    "#FFB800", // Vibrant Yellow
    "#FF0080"  // Vibrant Red/Pink
  ];

  const getInterpolatedColor = (p: number) => {
    const section = p * (colors.length - 1);
    const index = Math.floor(section);
    const fraction = section - index;
    if (index >= colors.length - 1) return new THREE.Color(colors[colors.length - 1]);
    return new THREE.Color(colors[index]).lerp(new THREE.Color(colors[index + 1]), fraction);
  };

  const currentColor = useMemo(() => getInterpolatedColor(scroll), [scroll]);

  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: -1,
      pointerEvents: "none" 
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <SkyBackground />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color={currentColor} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ShapeField color={currentColor} mousePos={mousePos} />
        <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
