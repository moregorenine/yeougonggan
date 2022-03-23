import LayoutIndex from "../../../components/home/layout-service";
import css from "./index.module.css"
import React, {useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import {Mousewheel, Pagination} from "swiper";
import st from "../../../components/home/layout-arrowup.module.css";

export default function Home() {
    const handleOnIndexChanged = (activeIndex) => {
        document.querySelector('#navbar .navigation .menu > li.active')?.classList.remove('active');
        switch (activeIndex) {
            case 1: //START-UP BUSINESS
                document.querySelector('#navbar .navigation .menu > li:nth-child(1)').classList.add('active');
                break
            case 2: //RECOVERY PROJECT
            case 3: //BUSINESS PERFORMANCE
            case 4: //NEW BUSINESS
            case 5:
            case 6:
            case 7:
            case 8:
                document.querySelector('#navbar .navigation .menu > li:nth-child(2)').classList.add('active');
                break
            case 9: //CONTACT
                document.querySelector('#navbar .navigation .menu > li:nth-child(3)').classList.add('active');
                break
        }
        const arrowUp = document.querySelector('#arrowUp');
        if (activeIndex > 0) {
            arrowUp.classList.add(st.visible)
        } else {
            arrowUp.classList.remove(st.visible)
        }
        // document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };



    const handleClick = (nthChild) => {
        if (document.querySelector('#navbar').classList.contains("active")) {
            document.querySelector('#navbar').classList.toggle("active")
        }
        document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };

    if (process.browser) {

        document.querySelector('#arrowUp').addEventListener('click', () => {
            handleClick(1);
        });

    }

    return (
        <LayoutIndex>
            <div className={css.main}>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    // spaceBetween={30}
                    mousewheel={true}
                    speed={800}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                    onSlideChange={e => handleOnIndexChanged(e.activeIndex)}
                >
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    START-UP BUSINESS
                                </h2>
                                <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/service/startup.png" alt="START-UP BUSINESS"/>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    START-UP BUSINESS
                                </h2>
                                <div className={css.service__content__startup__projects}>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup1.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup2.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup3.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup4.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup5.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup6.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    RECOVERY PROJECT
                                </h2>
                                <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/service/recovery.png" alt="START-UP BUSINESS"/>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    RECOVERY PROJECT
                                </h2>
                                <div className={css.service__content__startup__projects}>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery1.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery2.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery3.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery4.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery5.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery6.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    BUSINESS PERFORMANCE
                                </h2>
                                <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/businessperformance.png" alt="START-UP BUSINESS"/>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    NEW BUSINESS
                                </h2>
                                <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/newbusiness.png" alt="START-UP BUSINESS"/>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>

            <style jsx>{`

              #btn_group {
                margin-top: 20px;
              }

              #btn_group button {
                margin-top: 5px;
                border: 1px solid skyblue;
                background-color: rgba(0, 0, 0, 0);
                color: skyblue;
                padding: 5px;
              }

              .btn {
                border-radius: 5px;
                margin: 0 5px;
                color: white;
              }

              #btn_group button:hover {
                color: white;
                background-color: skyblue;
              }

              .addr_icon {
                text-align: center;
                margin-top: 30px;
              }

              .addr_icon a i {
                font-size: 30px;
                color: var(--color-white)
              }

            `}</style>

        </LayoutIndex>
    )
}
