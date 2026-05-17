// import { useEffect } from 'react';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import styles from '../../styles/HeroCard.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import heroCardImg1 from '../../assets/images/Wastely_hero_1.jpeg';
// import heroCardImg2 from '../../assets/images/Wastely_hero_2.jpeg';
// import heroCardImg3 from '../../assets/images/Wastely_hero_3.jpeg';
// import heroCardImg4 from '../../assets/images/Wastely_hero_7.jpeg';
// import heroCardImg5 from '../../assets/images/Wastely_hero_9.jpeg';
// import heroCardImg6 from '../../assets/images/Wastely_hero_5.jpeg';
// import heroCardImg7 from '../../assets/images/Wastely_hero_6.jpeg';

// const HeroCard = () => {


//     useEffect(() => {
//         const handleNext = () => {
//             const slide = document.getElementById('slide');
//             const items = document.querySelectorAll('.sliderItem');
//             if (slide && items.length > 0) {
//                 slide.appendChild(items[0]);
//             }
//         };

//         const handlePrev = () => {
//             const slide = document.getElementById('slide');
//             const items = document.querySelectorAll('.sliderItem');
//             if (slide && items.length > 0) {
//                 slide.prepend(items[items.length - 1]);
//             }
//         };

//         const nextButton = document.getElementById('next');
//         const prevButton = document.getElementById('prev');

//         nextButton && nextButton.addEventListener('click', handleNext);
//         prevButton && prevButton.addEventListener('click', handlePrev);


//         return () => {
//             // Cleanup event listeners on component unmount
//             nextButton && nextButton.removeEventListener('click', handleNext);
//             prevButton && prevButton.removeEventListener('click', handlePrev);
//         };
//     }, []);


//     return (
//         <div className=" w-full bg-slate-300 flex items-center justify-center py-10 pt-0 overflow-x-hidden">
//             <div className={styles.container}>
//                 <div id="slide" className={`${styles.slide} mx-auto`}>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg1})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Innovation</div>
//                             <div className={styles.des}>Pioneering wastewater treatment solutions for a healthier planet.</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg2})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Commitment</div>
//                             <div className={styles.des}>Turning wastewater into clean water is not just a job, it's a commitment to the health of our planet</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg3})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Promise</div>
//                             <div className={styles.des}>Cleaning water is n't just about treatment; it's about a promise for a sustainable future.</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg4})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Confluence</div>
//                             <div className={styles.des}>Wastewater treatment: where science meets sustainability to create a better world.</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg5})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Renewal</div>
//                             <div className={styles.des}>In the realm of water purification, every drop tells a story of renewal and responsibility.</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg6})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Responsibility</div>
//                             <div className={styles.des}>Preserving our waterways is not a choice; it's a responsibility we owe to future generations.</div>
//                         </div>
//                     </div>
//                     <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg7})` }}>
//                         <div className={styles.content}>
//                             <div className="name font-semibold text-center">Harmony</div>
//                             <div className={styles.des}>In the cycle of life, wastewater treatment is the unsung guardian ensuring a harmonious balance.</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.buttons}>
//                     <button id="prev">
//                         <i className="fa-solid fa-angle-left"><FontAwesomeIcon icon={faAngleLeft} /></i>
//                     </button>
//                     <button id="next">
//                         <i className="fa-solid fa-angle-right"><FontAwesomeIcon icon={faAngleRight} /></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCard;




import { Link } from "react-router-dom";
import {
  ArrowRight,
  Waves,
  Factory,
  Recycle,
  Globe,  
} from "lucide-react";

import HeroImg from "../../assets/images/Wastely_hero_1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081219]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Wastewater Treatment"
          className="
            w-full h-full object-cover
            scale-105
            opacity-40
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#081219]
            via-[#081219]/90
            to-[#081219]/50
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute top-0 left-0
            w-[600px] h-[600px]
            bg-cyan-500/10
            blur-[140px]
            rounded-full
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          min-h-screen
          flex items-center
        "
      >
        <div className="max-w-3xl">

          {/* SMALL LABEL */}
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
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

            <span
              className="
                text-cyan-200
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Environmental Engineering
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-semibold
              leading-[1.05]
              text-white
            "
          >
            Water Infrastructure
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
              For A Sustainable Future
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              max-w-2xl
            "
          >
            Advanced wastewater treatment, recycling,
            oxygenation and environmental infrastructure
            systems engineered for industries,
            municipalities and sustainable ecosystems.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/technologies"
              className="
                group
                inline-flex items-center gap-3
                px-8 py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-emerald-500
                text-white
                font-medium
                hover:scale-105
                transition-all duration-300
                shadow-2xl shadow-cyan-500/20
              "
            >
              Explore Solutions

              <ArrowRight
                size={20}
                className="
                  group-hover:translate-x-1
                  transition-all
                "
              />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex items-center
                px-8 py-4
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white
                hover:bg-white/10
                transition-all duration-300
              "
            >
              Contact Us
            </Link>
          </div>

          {/* STATS */}
          <div
            className="
              grid grid-cols-1 md:grid-cols-3
              gap-5
              mt-16
            "
          >

            <div
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
              "
            >
              <Waves className="text-cyan-300 mb-4" size={32} />

              <h3 className="text-3xl font-semibold text-white">
                500M+
              </h3>

              <p className="text-slate-400 mt-2">
                Liters Treated
              </p>
            </div>

            <div
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
              "
            >
              <Factory className="text-emerald-300 mb-4" size={32} />

              <h3 className="text-3xl font-semibold text-white">
                120+
              </h3>

              <p className="text-slate-400 mt-2">
                Industrial Projects
              </p>
            </div>

            <div
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
              "
            >
              <Recycle className="text-cyan-300 mb-4" size={32} />

              <h3 className="text-3xl font-semibold text-white">
                98%
              </h3>

              <p className="text-slate-400 mt-2">
                Water Recovery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute bottom-0 left-0
          w-full h-40
          bg-gradient-to-t
          from-[#081219]
          to-transparent
        "
      />
    </section>
  );
};

export default HeroSection;