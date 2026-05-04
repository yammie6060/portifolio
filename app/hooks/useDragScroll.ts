"use client";

import { useRef, useCallback } from "react";

/**
 * Provides mouse-drag scrolling for a horizontally scrollable container.
 * Returns a ref to attach to the container and event handlers.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref       = useRef<T>(null);
  const isDown    = useRef(false);
  const startX    = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown.current    = true;
    startX.current    = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.classList.add("cursor-grabbing", "select-none");
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    isDown.current = false;
    ref.current.classList.remove("cursor-grabbing", "select-none");
  }, []);

  const onMouseUp = useCallback(() => {
    if (!ref.current) return;
    isDown.current = false;
    ref.current.classList.remove("cursor-grabbing", "select-none");
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x    = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const scrollBy = useCallback((amount: number) => {
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, scrollBy };
}