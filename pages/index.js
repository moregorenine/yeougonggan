import LayoutIndex from "../components/layout-index";
import css from "./index.module.css"
import React, {useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import {Mousewheel, Pagination} from "swiper";

export default function Home() {
    const handleOnIndexChanged = (activeIndex) => {
        document.querySelector('#navbar .navigation .menu > li.active')?.classList.remove('active');
        switch (activeIndex) {
            case 1: //ABOUT
                document.querySelector('#navbar .navigation .menu > li:nth-child(1)').classList.add('active');
                break
            case 2: //SEVICE
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                document.querySelector('#navbar .navigation .menu > li:nth-child(2)').classList.add('active');
                break
            case 10: //CONTACT
                document.querySelector('#navbar .navigation .menu > li:nth-child(3)').classList.add('active');
                break
        }
        // document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };

    const handleClick = (nthChild) => {
        if (document.querySelector('#navbar').classList.contains("active")) {
            document.querySelector('#navbar').classList.toggle("active")
        }
        document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };

    const [videoUrl, setVideoUrl] = useState(null)
    if (process.browser) {

        window.addEventListener("resize", resizeThrottler, false);

        actualResizeHandler();

        var resizeTimeout;

        function resizeThrottler() {
            // ignore resize events as long as an actualResizeHandler execution is in the queue
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function () {
                    resizeTimeout = null;
                    if (document.children[0].clientWidth > 500) {
                        document.querySelector('#video').src = "/videos/home.mp4";
                    } else {
                        document.querySelector('#video').src = "/videos/home_mobile.mp4";
                    }
                }, 66);
            }
        }

        function actualResizeHandler() {
            if (document.children[0].clientWidth > 500) {
                useEffect(() => setVideoUrl("/videos/home.mp4"), [
                    "/videos/home.mp4"
                ]);
            } else {
                useEffect(() => setVideoUrl("/videos/home_mobile.mp4"), [
                    "/videos/home_mobile.mp4"
                ]);
            }
        }

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
                        <section className={css.home}>
                            <video id={"video"} autoPlay loop muted className={`${css.home__video}`}
                                   src={videoUrl}></video>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={`${css.about}`}>
                            {/*<div className={css.breadcrumb}>*/}
                            {/*    <p>About</p>*/}
                            {/*</div>*/}
                            <div className={css.about__content}>
                                <h2>
                                    아름다운 여자들의 우아한 공간,<br/>
                                    아름다운 당신이 머무는 공간,<br/>
                                    여우공간 필라테스
                                </h2>
                                <h1>EXPERT + PASSION + SERVICE</h1>
                                <h2>On-line offline marketing 창업컨설팅 전문가 집단</h2>
                                <h3>
                                    고객에게 최고의 전문가를 제공하고 전문성 / 열정 / 서비스 정신으로 고객만족을 위해 <br/>
                                    혼신의 힘을 다합니다. 창업을 준비하시는 대표님들의 투자를 <br/>
                                    시장가치의 극대화하는 상생 원리를 실현합니다.
                                </h3>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h1>
                                    변화와 혁신에 도전하는<br/>
                                    우리의 미래 당신의 미래가 됩니다.
                                </h1>
                                <h2>
                                    Our future challenging change and innovation <br/>
                                    becomes your future
                                </h2>
                                <p>
                                    YEOUGONGGAN에서는 지점과 협업하여 허점을 보완하고 AGILE 프레임워크 활용하여 유기적 비즈니스와 매출 회복의 혁신을 추진할 수
                                    있도록지원합니다. <br/>
                                    온.오프라인 HUMAN COMMUNITY 통해 E-BUSINESS 성공하여 HUMAN NETWORK COMMUNITY 형성을 이룰 수 있도록 하는 것이
                                    최종 목표입니다.
                                </p>
                                <div id="btn_group">
                                    <button className="btn" onClick={() => handleClick(4)}>START-UP BUSINESS</button>
                                    <button className="btn" onClick={() => handleClick(6)}>RECOVERY PROJECT</button>
                                    <button className="btn" onClick={() => handleClick(8)}>BUSINESS PERFORMANCE</button>
                                    <button className="btn" onClick={() => handleClick(9)}>NEW BUSINESS</button>
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
                                <div className={css.service__content__startup__graph}>
                                    <img src="/images/service/startup.png" alt="START-UP BUSINESS"/>
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
                                        <img className={css.project__image} src="/images/service/startup1.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/startup2.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/startup3.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/startup4.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/startup5.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/startup6.png"/>
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
                                    <img src="/images/service/recovery.png" alt="START-UP BUSINESS"/>
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
                                        <img className={css.project__image} src="/images/service/recovery1.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/recovery2.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/recovery3.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/recovery4.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/recovery5.png"/>
                                        <div className={css.project__description}>
                                            <h3>image1</h3>
                                            <p>image1 description</p>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/images/service/recovery6.png"/>
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
                                <p>
                                    YEOUGONGGAN에서는 지점과 협업하여 허점을 <br/>
                                    보완하고 AGILE 프레임워크 활용하여 유기적 <br/>
                                    비즈니스와 매출 회복의 혁신을 추진할 수 있도록지원합니다. <br/>
                                    온.오프라인 HUMAN COMMUNITY 통해 <br/>
                                    E-BUSINESS 성공하여 HUMAN NETWORK COMMUNITY 형성을 이룰 수 있도록 하는 것이 최종 목표입니다.
                                </p>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2>
                                    NEW BUSINESS
                                </h2>
                                <p>
                                    YEOUGONGGAN에서는 지점과 협업하여 허점을 <br/>
                                    보완하고 AGILE 프레임워크 활용하여 유기적 <br/>
                                    비즈니스와 매출 회복의 혁신을 추진할 수 있도록지원합니다. <br/>
                                    온.오프라인 HUMAN COMMUNITY 통해 <br/>
                                    E-BUSINESS 성공하여 HUMAN NETWORK COMMUNITY 형성을 이룰 수 있도록 하는 것이 최종 목표입니다.
                                </p>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.contact}>
                            <div className={css.contact__content}>
                                <h2 style={{color: "black"}}>서울 동작구 보라매로5가길 16 보라매 아카데미 타워 6층</h2>
                                <h2 style={{color: "black"}}>16 Boramae Academy Tower, Boramae 5-ga-gil, Dongjak-gu,
                                    Seoul, 6th floor.</h2>

                                <div className="addr_icon">
                                    <a href="https://goo.gl/maps/ThcE8NQDv8RPYFrP6" target={"_blank"}>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" my-data-show-form1="true">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" my-data-show-form2="true">
                                        <i className="fa fa-edit" aria-hidden="true" title="맘껏"></i>
                                    </a>
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
