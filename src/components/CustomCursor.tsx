import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default');
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check what element is hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewElement = target.closest('[data-cursor="view"]');
      if (viewElement) {
        setCursorType('view');
        return;
      }

      const interactiveElement = target.closest('a, button, input, textarea, select, [role="button"]');
      if (interactiveElement) {
        setCursorType('hover');
        return;
      }

      setCursorType('default');
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <>
      {/* Primary center dot */}
      <div
        id="custom-cursor-dot"
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out rounded-full ${
          cursorType === 'view' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'hover' ? '10px' : '6px',
          height: cursorType === 'hover' ? '10px' : '6px',
          backgroundColor: '#2F80ED',
        }}
      />

      {/* Trailing follower circle */}
      <div
        id="custom-cursor-ring"
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center transition-all duration-300 ease-out rounded-full ${
          cursorType === 'view'
            ? 'w-24 h-24 bg-[#2F80ED] text-white font-bold text-xs tracking-wider shadow-lg shadow-[#2F80ED]/30 scale-100'
            : cursorType === 'hover'
            ? 'w-14 h-14 border border-[#2F80ED]/70 bg-[#2F80ED]/10 scale-100'
            : 'w-9 h-9 border border-white/20 scale-100'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorType === 'view' && (
          <span className="text-[11px] font-mono uppercase tracking-widest pointer-events-none">
            VIEW
          </span>
        )}
      </div>
    </>
  );
}

