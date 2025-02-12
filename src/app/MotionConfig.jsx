'use client';
import React from 'react';
import { MotionConfig } from 'framer-motion';

export default function MotionConfigRoot({ children }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}
