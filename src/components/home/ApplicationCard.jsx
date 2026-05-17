
// import style from '../../styles/ApplicationCard.module.css'
// import Tilt from 'react-parallax-tilt';

// const ApplicationCard = () => {

//     return (
//         // <div className=" my-10 min-h-screen bg-[#18181B]">
//         <div className=" container">
//             <div className=" my-10 min-h-screen  bg-gradient-to-r from-indigo-500 to-[#a3a3a3]">
//                 <h2 className='  text-red-500 font-bold text-6xl text-center py-10'>Features</h2>
//                 <div className=" my-10 grid grid-cols-[240px] sm:grid-cols-[240px,240px] md:grid-cols-[minmax(200px,240px)_minmax(200px,240px)_minmax(200px,240px)] gap-7 lg:gap-12 place-content-center">
//                     <Tilt>
//                         <div className={style.card}>
//                             <span className={style.icon}>
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"></path>
//                                 </svg>
//                             </span>
//                             <h4>Products</h4>
//                             <p>
//                                 Standard chunk of Lorem Ipsum used since the 1500s is showed below
//                                 for those interested.
//                             </p>

//                         </div>
//                     </Tilt>
//                     <Tilt>
//                         <div className={style.card}>
//                             <span className={style.icon}>
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M15 12V4H9V12H5M5 19V21H19V19H5Z" />
//                                     <path d="M12 4V3H4V15H12V4Z" />
//                                     <path d="M12 21V19H4V21H12Z" />
//                                 </svg>
//                             </span>
//                             <h4>SOLUTIONS</h4>
//                             <p>
//                                 Standard chunk of Lorem Ipsum used since the 1500s is showed below
//                                 for those interested.
//                             </p>
//                         </div>
//                     </Tilt>
//                     <Tilt>
//                         <div className={style.card}>
//                             <span className={style.icon}>
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"></path>
//                                     <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"></path>
//                                     <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z"></path>
//                                     <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"></path>
//                                 </svg>
//                             </span>
//                             <h4>SERVICES</h4>
//                             <p>
//                                 Standard chunk of Lorem Ipsum used since the 1500s is showed below
//                                 for those interested.
//                             </p>
//                         </div>
//                     </Tilt>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ApplicationCard;



import {
  Waves,
  Settings2,
  Recycle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Advanced Treatment Systems",
    description:
      "High-efficiency wastewater and water treatment technologies engineered for industrial and municipal infrastructure.",
    icon: Waves,
    number: "01",
  },

  {
    title: "Environmental Engineering",
    description:
      "Integrated process engineering, automation and smart monitoring systems for sustainable operations.",
    icon: Settings2,
    number: "02",
  },

  {
    title: "Water Recovery & Reuse",
    description:
      "Sustainable recycling and ecosystem restoration solutions designed for future-ready environmental systems.",
    icon: Recycle,
    number: "03",
  },
];

const ApplicationCard = () => {
  return (
    <section className="relative py-32 bg-[#081219] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute left-0 top-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* TOP CONTENT */}
        <div className="max-w-3xl">

          {/* LABEL */}
          <div
            className="
              inline-flex items-center gap-2
              bg-white/5
              border border-cyan-400/20
              backdrop-blur-xl
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
              Core Capabilities
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-4xl
              md:text-6xl
              font-semibold
              leading-[1.05]
              text-white
            "
          >
            Integrated
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
              Environmental Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-lg
              text-slate-300
              leading-relaxed
              max-w-2xl
            "
          >
            Delivering sustainable water infrastructure,
            wastewater treatment and environmental
            engineering systems through advanced technology,
            smart automation and ecosystem-focused design.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-[32px]
                  p-8
                  hover:border-cyan-400/20
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >

                {/* CARD GLOW */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-emerald-500/5
                  "
                />

                {/* NUMBER */}
                <div
                  className="
                    absolute top-6 right-6
                    text-6xl
                    font-semibold
                    text-white/5
                  "
                >
                  {item.number}
                </div>

                {/* ICON */}
                <div
                  className="
                    relative z-10
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

                {/* TITLE */}
                <h3
                  className="
                    relative z-10
                    text-2xl
                    font-semibold
                    text-white
                    leading-snug
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    relative z-10
                    mt-5
                    text-slate-400
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

                {/* LINK */}
                <Link
                  to="/technologies"
                  className="
                    relative z-10
                    inline-flex items-center gap-2
                    mt-8
                    text-cyan-300
                    font-medium
                    group/link
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                      group-hover/link:translate-x-1
                      transition-all
                    "
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationCard;