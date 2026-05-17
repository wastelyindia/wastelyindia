const NoiseOverlay = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-[2]
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
};

export default NoiseOverlay;