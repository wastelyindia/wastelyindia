import {
  Waves,
  Factory,
  Recycle,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: Waves,
    value: "500M+",
    label: "Liters Treated",
  },

  {
    icon: Factory,
    value: "120+",
    label: "Industrial Projects",
  },

  {
    icon: Recycle,
    value: "98%",
    label: "Water Recovery",
  },

  {
    icon: Globe,
    value: "25+",
    label: "Cities Impacted",
  },
];

const ImpactSection = () => {
  return (
    <section className="relative py-32 bg-[#081219]">

      <div
        className="
          absolute top-0 right-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="max-w-3xl">

          <div
            className="
              inline-flex items-center gap-2
              bg-white/5
              border border-cyan-400/20
              rounded-full
              px-5 py-2
              mb-8
            "
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />

            <span
              className="
                text-cyan-200
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Environmental Impact
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-semibold
              leading-[1.05]
              text-white
            "
          >
            Engineering Water
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                to-emerald-400
                bg-clip-text
                text-transparent
              "
            >
              Sustainability At Scale
            </span>
          </h2>
        </div>

        {/* STATS */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            mt-20
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-[32px]
                  p-8
                  hover:border-cyan-400/20
                  transition-all duration-500
                "
              >
                <div
                  className="
                    w-16 h-16
                    flex items-center justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    mb-8
                  "
                >
                  <Icon
                    size={32}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="text-5xl font-semibold text-white">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-4">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;