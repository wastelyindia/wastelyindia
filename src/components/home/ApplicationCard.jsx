
import style from '../../styles/ApplicationCard.module.css'
import Tilt from 'react-parallax-tilt';

const ApplicationCard = () => {

    return (
        // <div className=" my-10 min-h-screen bg-[#18181B]">
        <div className=" container">
            <div className=" my-10 min-h-screen  bg-gradient-to-r from-indigo-500 to-[#a3a3a3]">
                <h2 className='  text-red-500 font-bold text-6xl text-center py-10'>Features</h2>
                <div className=" my-10 grid grid-cols-[240px] sm:grid-cols-[240px,240px] md:grid-cols-[minmax(200px,240px)_minmax(200px,240px)_minmax(200px,240px)] gap-7 lg:gap-12 place-content-center">
                    <Tilt>
                        <div className={style.card}>
                            <span className={style.icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"></path>
                                </svg>
                            </span>
                            <h4>Products</h4>
                            <p>
                                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                                for those interested.
                            </p>

                        </div>
                    </Tilt>
                    <Tilt>
                        <div className={style.card}>
                            <span className={style.icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 12V4H9V12H5M5 19V21H19V19H5Z" />
                                    <path d="M12 4V3H4V15H12V4Z" />
                                    <path d="M12 21V19H4V21H12Z" />
                                </svg>
                            </span>
                            <h4>SOLUTIONS</h4>
                            <p>
                                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                                for those interested.
                            </p>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className={style.card}>
                            <span className={style.icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"></path>
                                    <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"></path>
                                    <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z"></path>
                                    <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"></path>
                                </svg>
                            </span>
                            <h4>SERVICES</h4>
                            <p>
                                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                                for those interested.
                            </p>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default ApplicationCard;
