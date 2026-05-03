"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Trail, Sparkles } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

const globalState = {
  mousePos: { x: 0, y: 0 },
  scroll: 0,
  themeColor: new THREE.Color(),
  themeColorAlt: new THREE.Color()
};

// Individual floating shape component
function FloatingShape({ position, type, colorOffset }: {
  position: [number, number, number],
  type: 'sphere' | 'box',
  colorOffset: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const initialPos = useMemo(() => position, [position]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();

      // Smoother parallax based on scroll
      const parallaxOffset = globalState.scroll * 8;
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        initialPos[1] - parallaxOffset + Math.sin(time + initialPos[0]) * 0.3,
        0.05
      );

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        initialPos[0] + globalState.mousePos.x * 0.8,
        0.05
      );
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        initialPos[2] + globalState.mousePos.y * 0.8,
        0.05
      );

      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }

    if (materialRef.current) {
      if (colorOffset) {
        materialRef.current.color.copy(globalState.themeColorAlt);
        materialRef.current.emissive.copy(globalState.themeColor);
      } else {
        materialRef.current.color.copy(globalState.themeColor);
        materialRef.current.emissive.copy(globalState.themeColorAlt);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === 'sphere' ? <sphereGeometry args={[0.2, 32, 32]} /> : <boxGeometry args={[0.3, 0.3, 0.3]} />}
      <meshPhysicalMaterial
        ref={materialRef}
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

function ShapeField() {
  const { viewport } = useThree();

  const shapes = useMemo(() => {
    const list = [];
    const count = 70; // Increased count
    for (let i = 0; i < count; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      // Strict edge placement: pushing further out to keep center clear
      const edgeThreshold = viewport.width * 0.45;
      const x = side * (edgeThreshold + Math.random() * (viewport.width * 0.25));
      const y = (Math.random() - 0.5) * viewport.height * 2; // Reduced field height
      const z = (Math.random() - 0.5) * 6;

      list.push({
        position: [x, y, z] as [number, number, number],
        type: (Math.random() > 0.5 ? 'sphere' : 'box') as 'sphere' | 'box',
        colorOffset: Math.random() > 0.5
      });
    }
    return list;
  }, [viewport.width, viewport.height]);

  return (
    <>
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </>
  );
}

function ThemeManager() {
  const { scene } = useThree();
  const lightRef = useRef<THREE.PointLight>(null);

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
    const c = getThemeColor(globalState.scroll);
    globalState.themeColor.copy(c);
    globalState.themeColorAlt.copy(c).offsetHSL(0.1, 0.2, 0.1);

    scene.background = getInterpolatedColor(globalState.scroll);

    if (lightRef.current) {
      lightRef.current.color.copy(globalState.themeColor);
    }
  });

  return (
    <>
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
    </>
  );
}

export default function Experience3D() {

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      globalState.scroll = window.scrollY / (totalScroll || 1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      globalState.mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalState.mousePos.y = -(e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <ThemeManager />
        <ambientLight intensity={0.6} />
        <ShapeField />
        <Asteroids />
        <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}

const themeColors = [
  "#9D4EDD", // Vibrant Purple
  "#00D1FF", // Vibrant Blue
  "#00F5FF", // Cyan/Green
  "#FFB800", // Vibrant Yellow
  "#FF0080"  // Vibrant Red/Pink
];

function getThemeColor(p: number) {
  const section = p * (themeColors.length - 1);
  const index = Math.floor(section);
  const fraction = section - index;
  if (index >= themeColors.length - 1) return new THREE.Color(themeColors[themeColors.length - 1]);
  return new THREE.Color(themeColors[index]).lerp(new THREE.Color(themeColors[index + 1]), fraction);
}


function Asteroid({ radius = 8, speed = 0.4, direction = 1, size = 0.8, color = '#8b8b8b', yOffset = 0 }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null!);
  const angle = useRef(Math.random() * Math.PI * 2);

  const spin = useMemo(() => ({
    x: (Math.random() - 0.5) * 1.5,
    y: (Math.random() - 0.5) * 1.5,
    z: (Math.random() - 0.5) * 1.5,
  }), []);

  const scale = useMemo(() => 0.8 + Math.random() * 0.8, []);

  useEffect(() => {
    const geo = geometryRef.current;
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      v.multiplyScalar(1 + (Math.random() - 0.5) * 0.35);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }, []);

  useFrame((state, delta) => {
    angle.current += delta * speed * direction;

    const x = Math.cos(angle.current) * radius;
    const z = Math.sin(angle.current) * radius;
    const y = Math.sin(angle.current * 2) * 1.8 + yOffset;

    meshRef.current.position.set(x, y, z);
    meshRef.current.rotation.x += spin.x * delta;
    meshRef.current.rotation.y += spin.y * delta;
    meshRef.current.rotation.z += spin.z * delta;
  });

  return (
    <Trail width={1.2} length={5} color={new THREE.Color(color)} attenuation={(t) => t * t}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry ref={geometryRef} args={[size, 2]} />
        <meshStandardMaterial color={color} roughness={1} metalness={0.05} flatShading />
      </mesh>
    </Trail>
  );
}

function Asteroids() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 4, 8]} intensity={1.4} />
      <pointLight position={[-8, -2, -8]} intensity={0.7} />

      <Sparkles count={40} scale={20} size={2} speed={0.3} />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <Asteroid radius={9} speed={0.35} direction={1} size={0.9} color="#8d8d8d" yOffset={1} />
        <Asteroid radius={6} speed={0.6} direction={-1} size={0.55} color="#6f6f6f" yOffset={-2} />
        <Asteroid radius={12} speed={0.22} direction={1} size={1.3} color="#9a8772" yOffset={0} />
        <Asteroid radius={7.5} speed={0.48} direction={-1} size={0.7} color="#7f7466" yOffset={2.5} />
      </Float>
    </group>
  );
}
