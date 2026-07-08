"use client";

import { useSyncExternalStore } from "react";

let cachedSupport: boolean | null = null;

function computeSupport(): boolean {
  if (cachedSupport === null) {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      cachedSupport = Boolean(gl);
    } catch {
      cachedSupport = false;
    }
  }
  return cachedSupport;
}

function subscribe() {
  return () => {};
}

function getServerSnapshot(): boolean | null {
  return null;
}

/** Deteta, apenas no cliente, se o browser suporta WebGL de forma fiável. */
export function useWebglSupport(): boolean | null {
  return useSyncExternalStore(subscribe, computeSupport, getServerSnapshot);
}
