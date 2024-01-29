import { useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/HeroCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import heroCardImg1 from '../../assets/images/Wastely_hero_1.jpeg';
import heroCardImg2 from '../../assets/images/Wastely_hero_2.jpeg';
import heroCardImg3 from '../../assets/images/Wastely_hero_3.jpeg';
import heroCardImg4 from '../../assets/images/Wastely_hero_7.jpeg';
import heroCardImg5 from '../../assets/images/Wastely_hero_9.jpeg';
import heroCardImg6 from '../../assets/images/Wastely_hero_5.jpeg';
import heroCardImg7 from '../../assets/images/Wastely_hero_6.jpeg';

const HeroCard = () => {


    useEffect(() => {
        const handleNext = () => {
            const slide = document.getElementById('slide');
            const items = document.querySelectorAll('.sliderItem');
            if (slide && items.length > 0) {
                slide.appendChild(items[0]);
            }
        };

        const handlePrev = () => {
            const slide = document.getElementById('slide');
            const items = document.querySelectorAll('.sliderItem');
            if (slide && items.length > 0) {
                slide.prepend(items[items.length - 1]);
            }
        };

        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');

        nextButton && nextButton.addEventListener('click', handleNext);
        prevButton && prevButton.addEventListener('click', handlePrev);


        return () => {
            // Cleanup event listeners on component unmount
            nextButton && nextButton.removeEventListener('click', handleNext);
            prevButton && prevButton.removeEventListener('click', handlePrev);
        };
    }, []);


    return (
        <div className=" w-full bg-slate-300 flex items-center justify-center py-10 pt-0 overflow-x-hidden">
            <div className={styles.container}>
                <div id="slide" className={`${styles.slide} mx-auto`}>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg1})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Innovation</div>
                            <div className={styles.des}>Pioneering wastewater treatment solutions for a healthier planet.</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg2})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Commitment</div>
                            <div className={styles.des}>Turning wastewater into clean water is not just a job, it's a commitment to the health of our planet</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg3})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Promise</div>
                            <div className={styles.des}>Cleaning water is n't just about treatment; it's about a promise for a sustainable future.</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg4})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Confluence</div>
                            <div className={styles.des}>Wastewater treatment: where science meets sustainability to create a better world.</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg5})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Renewal</div>
                            <div className={styles.des}>In the realm of water purification, every drop tells a story of renewal and responsibility.</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg6})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Responsibility</div>
                            <div className={styles.des}>Preserving our waterways is not a choice; it's a responsibility we owe to future generations.</div>
                        </div>
                    </div>
                    <div className={`${styles.item} sliderItem`} style={{ backgroundImage: `url(${heroCardImg7})` }}>
                        <div className={styles.content}>
                            <div className="name font-semibold text-center">Harmony</div>
                            <div className={styles.des}>In the cycle of life, wastewater treatment is the unsung guardian ensuring a harmonious balance.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button id="prev">
                        <i className="fa-solid fa-angle-left"><FontAwesomeIcon icon={faAngleLeft} /></i>
                    </button>
                    <button id="next">
                        <i className="fa-solid fa-angle-right"><FontAwesomeIcon icon={faAngleRight} /></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
