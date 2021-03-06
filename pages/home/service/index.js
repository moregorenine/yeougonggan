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
        const arrowUp = document.querySelector('#arrowUp');
        if (activeIndex > 0) {
            arrowUp.classList.add(st.visible)
        } else {
            arrowUp.classList.remove(st.visible)
        }
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

    const swiperInit = () => {
        if (process.browser) {
            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');
            if (page) {
                switch (page) {
                    case 'startup':
                        handleClick(1)
                        // window.history.replaceState({}, document.title, "/home/service");
                        break;
                    case 'recovery':
                        handleClick(3)
                        // window.history.replaceState({}, document.title, "/home/service");
                        break;
                    case 'performance':
                        handleClick(5)
                        // window.history.replaceState({}, document.title, "/home/service");
                        break;
                    case 'newbusiness':
                        handleClick(6)
                        // window.history.replaceState({}, document.title, "/home/service");
                        break;
                }
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
                    onAfterInit={swiperInit}
                >
                    <SwiperSlide>
                        <section className={css.service__startup}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">START-UP BUSINESS</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>Start-up Business</li>
                                </ol>
                                <div className="business_all">
                                    <div className="line1">
                                        <div className="line2">
                                            <div className="center_circle"><span>????????????</span></div>
                                        </div>
                                    </div>
                                    <div className="line_circle">
                                        <a href="#" className="circle1 tooltip right">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ???????????? ??????</li>
                                                    <li>???????????????</li>
                                                    <li>????????? ????????? ????????????</li>
                                                    <li>?????? SNS ???????????????</li>
                                                    <li>????????? ??????</li>
                                                    <li>Human Network Community</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle2 tooltip right">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ????????? ??????????? ?????? ??????</li>
                                                    <li>?????? ????????? ?????? ????????? ????????? ??????. ?????? ?????????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle3 tooltip right">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>?????? ?????? ??????</li>
                                                    <li>?????? ?????? ?????? ????????? ??????</li>
                                                    <li>?????? ????????? ??????</li>
                                                    <li>?????? ?????? ?????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle4 tooltip right">
                                            <span className="tit">??????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>?????? ?????? ????????? ??????</li>
                                                    <li>??????,?????? ????????? ??????</li>
                                                    <li>??????????????? ??????</li>
                                                    <li>????????? ??????????????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle5 tooltip left">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ????????? ?????????</li>
                                                    <li>???????????? ????????? ????????? ????????????</li>
                                                    <li>?????? ????????? ?????????</li>
                                                    <li>Business System + APP</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle6 tooltip left">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>???????????? ??????</li>
                                                    <li>????????? ?????????</li>
                                                    <li>????????? ????????? ??????</li>
                                                    <li>?????? ?????? ???????????????</li>
                                                    <li>?????? ????????? ?????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle7 tooltip left">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ??????????????????????????????</li>
                                                    <li>???????????? ????????????????????? ??????</li>
                                                    <li>??????????????? ????????? ?????? ???????????????</li>
                                                    <li>Customer tendencies text message</li>
                                                </ul>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="business_circle">
                                        <a href="#" className="business_circle1"><span>?????????<br/>????????????</span></a>
                                        <a href="#" className="business_circle2"><span>????????????<br/>????????????<br/>????????????</span></a>
                                        <a href="#" className="business_circle3"><span>????????????<br/>????????????</span></a>
                                        <a href="#" className="business_circle4"><span>?????? ??????</span></a>
                                    </div>
                                </div>
                                <div className="business_all_t">
                                    <img src="/home/images/startup_t.png" alt="graph" />
                                </div>
                                <div className="business_all_m">
                                    <img src="/home/images/startup_m.png" alt="graph" />
                                </div>

                                {/* <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/service/startup.png" alt="START-UP BUSINESS"/>
                                </div> */}
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service__startup}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">START-UP BUSINESS</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>Start-up Business</li>
                                </ol>
                                <div className={css.service__content__startup__projects}>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup1.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup2.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup3.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup4.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup5.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/startup6.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service__recovery}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">RECOVERY PROJECT</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>Recovery Project</li>
                                </ol>

                                <div className="recovery_all">
                                    <div className="line1">
                                        <div className="line2">
                                            <div className="center_circle"><span className="logo">????????????</span><span
                                                className="text">RECOVERY<br/>PROJECT</span></div>
                                        </div>
                                    </div>
                                    <div className="line_circle">
                                        <a href="#" className="circle1 tooltip right">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ???????????? ??????</li>
                                                    <li>???????????????</li>
                                                    <li>????????? ????????? ????????????</li>
                                                    <li>?????? SNS ???????????????</li>
                                                    <li>????????? ??????</li>
                                                    <li>Human Network Community</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle2 tooltip right">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ????????? ??????????? ?????? ??????</li>
                                                    <li>?????? ????????? ?????? ????????? ????????? ??????. ?????? ?????????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle3 tooltip right">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>?????? ?????? ??????</li>
                                                    <li>?????? ?????? ?????? ????????? ??????</li>
                                                    <li>?????? ????????? ??????</li>
                                                    <li>?????? ?????? ?????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle4 tooltip right">
                                            <span className="tit">??????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>?????? ?????? ????????? ??????</li>
                                                    <li>??????,?????? ????????? ??????</li>
                                                    <li>??????????????? ??????</li>
                                                    <li>????????? ??????????????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle5 tooltip left">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ????????? ?????????</li>
                                                    <li>???????????? ????????? ????????? ????????????</li>
                                                    <li>?????? ????????? ?????????</li>
                                                    <li>Business System + APP</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle6 tooltip left">
                                            <span className="tit">????????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>???????????? ??????</li>
                                                    <li>????????? ?????????</li>
                                                    <li>????????? ????????? ??????</li>
                                                    <li>?????? ?????? ???????????????</li>
                                                    <li>?????? ????????? ?????? ??????</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle7 tooltip left">
                                            <span className="tit">?????????</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>????????? ??????????????????????????????</li>
                                                    <li>???????????? ????????????????????? ??????</li>
                                                    <li>??????????????? ????????? ?????? ???????????????</li>
                                                    <li>Customer tendencies text message</li>
                                                </ul>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="recovery_circle">
                                        <a href="#" className="recovery_circle1"><span>????????????</span></a>
                                        <a href="#" className="recovery_circle2"><span>????????????</span></a>
                                        <a href="#" className="recovery_circle3"><span>?????????<br/>????????????</span></a>
                                    </div>
                                </div>
                                <div className="recovery_all_t">
                                    <img src="/home/images/project_t.png" alt="graph" />
                                </div>
                                <div className="recovery_all_m">
                                    <img src="/home/images/project_m.png" alt="graph" />
                                </div>


                                {/* <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/service/recovery.png" alt="START-UP BUSINESS"/>
                                </div> */}
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service__recovery}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">RECOVERY PROJECT</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>Recovery Project</li>
                                </ol>
                                <div className={css.service__content__startup__projects}>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery1.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery2.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery3.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery4.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery5.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                    <div className={css.service__content__startup__project}>
                                        <img className={css.project__image} src="/home/images/service/recovery6.png"/>
                                        <div className={css.project__description}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service__performance}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">BUSINESS PERFORMANCE</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>Business Performance</li>
                                </ol>
                                {/* <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/businessperformance.png" alt="START-UP BUSINESS"/>
                                </div> */}
                                <div className="Performance_box">
                                    <div className="Performance_graph">
                                        <div className="tit"><p>????????????????????? ??????<span>??????:????????????</span></p></div>
                                        <div className="img"><img src="/home/images/performance_graph.png" alt=""/></div>
                                    </div>
                                    <div className="Performance_con">
                                        <div className="Performance_left">
                                            <div className="tit">START-UP BUSINESS<br/><span>A ????????????</span></div>
                                            <div className="box">
                                                <ul>
                                                    <li>?????? ?????? ?????????(???????????? 80???)</li>
                                                    <li>?????? ?????? ?????? ??????</li>
                                                    <li>????????? ???????????? 69%</li>
                                                    <li>????????? 2km 14??? ??????</li>
                                                    <li>START-UP BUSINESS 2021??? 10??? 15??? ~ 11??? 13???<br/>???????????? ?????? ??????&nbsp;
                                                        <span>??????????????? 48% ????????????</span></li>
                                                    <li>?????? 11??? ?????? 199???</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="Performance_right">
                                            <div className="tit">RECOVERY PROJECT<br/><span>B ????????????</span></div>
                                            <div className="box">
                                                <ul>
                                                    <li>2021??? 12??? ????????? ???????????? ?????? ??????</li>
                                                    <li>2??? 25??? ?????? 166,209 ????????? ??????</li>
                                                    <li>21??? 11??? <span>21.1% ??????</span></li>
                                                    <li>21??? 12??? <span>72.5% ??????</span></li>
                                                    <li>22??? 1??? <span>46.0% ??????</span></li>
                                                    <li>22??? 2??? <span>17.0%??????</span></li>
                                                    <li><span>?????? 88%, ????????? 93% ??????</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service__newbusiness}>
                            <div className={css.service__content}>
                                <h3 className="sub_tit">NEW BUSINESS</h3>
                                <ol className="location-list">
                                    <li><a href="#" className="home">???????????????</a></li>
                                    <li>Service</li>
                                    <li>New Business</li>
                                </ol>
                                <div className="new_all">
                                    <div className="new_left">
                                        <div className="line1">
                                            <div className="center_circle"><span>????????????</span></div>
                                        </div>
                                        <div className="line_circle_new">
                                            <a href="#" className="circle1_new">
                                                <span className="tit">APP</span>
                                            </a>
                                            <a href="#" className="circle2_new">
                                                <span className="tit">MARKETING</span>
                                            </a>
                                            <a href="#" className="circle3_new">
                                                <span className="tit">OFFLINE</span>
                                            </a>
                                            <a href="#" className="circle4_new">
                                                <span className="tit">SYSTEM</span>
                                            </a>
                                            <a href="#" className="circle5_new">
                                                <span className="tit">OPERATION</span>
                                            </a>
                                            <a href="#" className="circle6_new">
                                                <span className="tit">COMMERCIAL</span>
                                            </a>
                                            <a href="#" className="circle7_new">
                                                <span className="tit">SALE</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="new_contents new_right">
                                        <ul>
                                            <li>APP & BUSINESS</li>
                                            <li>???????????? ?????? ?????????</li>
                                            <li>???????????? ?????? ????????? ??????</li>
                                            <li>????????? ?????? ?????? ?????????</li>
                                            <li>???????????? ?????? ????????? ????????? ?????????</li>
                                            <li>?????? ??????,?????? ????????? ????????? ??????</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="new_all_t">
                                    <img src="/home/images/new_t.png" alt="graph" />
                                </div>
                                <div className="new_all_m">
                                    <img src="/home/images/new_m.png" alt="graph" />
                                </div>
                                {/* <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/newbusiness.png" alt="START-UP BUSINESS"/>
                                </div> */}
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
