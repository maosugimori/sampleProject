"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export default function AnimationTest() {
  const gsapBox = useRef(null);

  useEffect(() => {
    // GSAP: 命令して動かす
    gsap.to(gsapBox.current, { x: 100, duration: 2, repeat: -1, yoyo: true });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '50px' }}>
      {/* GSAPの箱 */}
      <div>
        <p>GSAP</p>
        <div ref={gsapBox} style={{ width: 100, height: 100, background: 'royalblue' }} />
      </div>

      {/* Framer Motionの箱 */}
      <div>
        <p>Framer Motion</p>
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 100, height: 100, background: 'tomato' }}
        />
      </div>
    </div>
  );
}