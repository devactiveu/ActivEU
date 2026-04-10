import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import type { Group, Mesh } from "three";

const CITIES: [number, number][] = [
  [38.72, -9.14],   // Lisboa
  [40.42, -3.7],    // Madrid
  [48.86, 2.35],    // Paris
  [52.52, 13.4],    // Berlim
  [41.9, 12.5],     // Roma
  [51.51, -0.13],   // Londres
  [48.21, 16.37],   // Viena
  [50.08, 14.44],   // Praga
  [59.33, 18.07],   // Estocolmo
  [55.68, 12.57],   // Copenhaga
  [52.37, 4.9],     // Amesterdao
  [46.95, 7.45],    // Berna
  [47.5, 19.04],    // Budapeste
  [44.43, 26.1],    // Bucareste
  [37.98, 23.73],   // Atenas
  [41.01, 28.98],   // Istambul
  [60.17, 24.94],   // Helsínquia
  [53.35, -6.26],   // Dublin
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [1, 4], [2, 3], [2, 5], [3, 6],
  [3, 7], [4, 6], [5, 9], [6, 7], [8, 9], [9, 10],
  [10, 2], [7, 12], [12, 13], [13, 14], [14, 4],
  [8, 16], [5, 17], [0, 17],
];

function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function GlobeDots({ radius }: { radius: number }) {
  const geo = useMemo(() => {
    const positions: number[] = [];
    const count = 2400;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      );
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, [radius]);

  return (
    <points geometry={geo}>
      <pointsMaterial
        color="#4a7cc9"
        size={0.012}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CityNodes({ radius }: { radius: number }) {
  const meshes = useMemo(() => {
    return CITIES.map((c) => latLonToVec3(c[0], c[1], radius));
  }, [radius]);

  const refs = useRef<(Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((mesh, i) => {
      if (mesh) {
        const pulse = 1 + 0.15 * Math.sin(t * 2 + i * 0.7);
        mesh.scale.setScalar(pulse);
      }
    });
  });

  return (
    <>
      {meshes.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          position={pos}
        >
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshStandardMaterial
            color={i === 0 ? "#ffb007" : "#60a5fa"}
            emissive={i === 0 ? "#ffb007" : "#3b82f6"}
            emissiveIntensity={i === 0 ? 1.2 : 0.6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

function ConnectionArcs({ radius }: { radius: number }) {
  const arcs = useMemo(() => {
    return CONNECTIONS.map(([a, b]) => {
      const start = latLonToVec3(CITIES[a][0], CITIES[a][1], radius);
      const end = latLonToVec3(CITIES[b][0], CITIES[b][1], radius);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + dist * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(32);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      return geo;
    });
  }, [radius]);

  return (
    <>
      {arcs.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color="#60a5fa"
            transparent
            opacity={0.18}
            linewidth={1}
          />
        </line>
      ))}
    </>
  );
}

function FlowingParticles({ radius }: { radius: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, velocities, arcData } = useMemo(() => {
    const count = 60;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const arcs: { curve: THREE.QuadraticBezierCurve3; progress: number }[] = [];

    for (let i = 0; i < count; i++) {
      const ci = Math.floor(Math.random() * CONNECTIONS.length);
      const [a, b] = CONNECTIONS[ci];
      const start = latLonToVec3(CITIES[a][0], CITIES[a][1], radius);
      const end = latLonToVec3(CITIES[b][0], CITIES[b][1], radius);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + dist * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const progress = Math.random();
      const pt = curve.getPoint(progress);
      pos[i * 3] = pt.x;
      pos[i * 3 + 1] = pt.y;
      pos[i * 3 + 2] = pt.z;
      vel[i] = 0.15 + Math.random() * 0.25;
      arcs.push({ curve, progress });
    }

    return { positions: pos, velocities: vel, arcData: arcs };
  }, [radius]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < arcData.length; i++) {
      arcData[i].progress += delta * velocities[i];
      if (arcData[i].progress > 1) {
        arcData[i].progress = 0;
        const ci = Math.floor(Math.random() * CONNECTIONS.length);
        const [a, b] = CONNECTIONS[ci];
        const start = latLonToVec3(CITIES[a][0], CITIES[a][1], radius);
        const end = latLonToVec3(CITIES[b][0], CITIES[b][1], radius);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        mid.normalize().multiplyScalar(radius + dist * 0.28);
        arcData[i].curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      }
      const pt = arcData[i].curve.getPoint(arcData[i].progress);
      arr[i * 3] = pt.x;
      arr[i * 3 + 1] = pt.y;
      arr[i * 3 + 2] = pt.z;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffb007"
        size={0.035}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

export function Hero3DScene() {
  const group = useRef<Group>(null);
  const R = 1.35;

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 8]} intensity={0.7} color="#9ec5ff" />
      <pointLight position={[-4, 2, 5]} intensity={0.5} color="#ffb007" />
      <pointLight position={[3, -3, 4]} intensity={0.3} color="#60a5fa" />

      <Sparkles count={50} scale={[4, 4, 2]} size={1.8} speed={0.3} opacity={0.35} color="#ffb007" />

      <GlobeDots radius={R} />
      <CityNodes radius={R * 1.005} />
      <ConnectionArcs radius={R} />
      <FlowingParticles radius={R} />

      {/* Orbital spheres: Youth (amber), Companies (blue), Causes (white) */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[-1.8, 0.9, 0.5]} scale={0.1}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#ffb007"
            emissive="#ffb007"
            emissiveIntensity={0.7}
            roughness={0.3}
            metalness={0.2}
            toneMapped={false}
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[1.7, 0.6, -0.3]} scale={0.09}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.35}
            toneMapped={false}
          />
        </mesh>
      </Float>
      <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0.2, -1.4, 0.6]} scale={0.075}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshStandardMaterial
            color="#fef3c7"
            emissive="#ffffff"
            emissiveIntensity={0.25}
            roughness={0.4}
            metalness={0.15}
          />
        </mesh>
      </Float>

      {/* Subtle wireframe sphere */}
      <mesh scale={R}>
        <sphereGeometry args={[1, 36, 24]} />
        <meshBasicMaterial
          color="#1e3a8a"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
    </group>
  );
}
