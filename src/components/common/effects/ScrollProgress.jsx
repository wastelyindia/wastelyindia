import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const current =
        window.scrollY;

      const height =
        document.body.scrollHeight -
        window.innerHeight;

      setScroll((current / height) * 100);
    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0
        z-[9999]
        h-[3px]
        w-full
      "
    >
      <div
        className="
          h-full
          bg-gradient-to-r
          from-cyan-400
          via-cyan-300
          to-emerald-400
          shadow-[0_0_20px_rgba(34,211,238,0.6)]
          transition-all duration-150
        "
        style={{
          width: `${scroll}%`,
        }}
      />
    </div>
  );
};

export default ScrollProgress;