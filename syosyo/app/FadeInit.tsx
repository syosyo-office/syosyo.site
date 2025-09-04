"use client";

import { useEffect } from "react";
import { initFade } from "./fade";

export default function FadeInit() {
  useEffect(() => {
    initFade();
  }, []);
  return null;
}