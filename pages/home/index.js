import LayoutIndex from "../../components/home/layout-index";
import css from "./index.module.css"
import React, {useEffect, useState} from "react";
import Link from 'next/link'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import {Mousewheel, Pagination} from "swiper";
import st from "../../components/home/layout-arrowup.module.css";

export default function Home() {
    const handleOnIndexChanged = (activeIndex) => {
        document.querySelector('#navbar .navigation .menu > li.active')?.classList.remove('active');
        switch (activeIndex) {
            case 1: //ABOUT
                document.querySelector('#navbar .navigation .menu > li:nth-child(1)').classList.add('active');
                break
            case 2: //SEVICE
                document.querySelector('#navbar .navigation .menu > li:nth-child(2)').classList.add('active');
                break
            case 3: //CONTACT
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

    const swiperInit = () => {
        if (process.browser) {
            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');
            if (page) {
                switch (page) {
                    case 'about':
                        handleClick(2)
                        // window.history.replaceState({}, document.title, "/home");
                        break;
                    case 'service':
                        handleClick(3)
                        // window.history.replaceState({}, document.title, "/home");
                        break;
                    case 'contact':
                        handleClick(4)
                        // window.history.replaceState({}, document.title, "/home");
                        break;
                }
            }
        }
    }

    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        document.querySelector('#btnPlay').addEventListener('click', ()=>{
            document.querySelector('#btnPlay').classList.toggle("hidden");
            document.querySelector('#btnPause').classList.toggle("hidden");
            document.querySelector('#video').play();
        })
        document.querySelector('#btnPause').addEventListener('click', ()=>{
            document.querySelector('#btnPlay').classList.toggle("hidden");
            document.querySelector('#btnPause').classList.toggle("hidden");
            document.querySelector('#video').pause();
        })
        document.querySelector('#arrowUp').addEventListener('click', () => {
            handleClick(1);
        });
    });

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
                        document.querySelector('#video').src = "/home/videos/home.mp4";
                    } else {
                        document.querySelector('#video').src = "/home/videos/home_mobile.mp4";
                    }
                }, 66);
            }
        }

        function actualResizeHandler() {
            if (document.children[0].clientWidth > 500) {
                useEffect(() => setVideoUrl("/home/videos/home.mp4"), [
                    "/home/videos/home.mp4"
                ]);
            } else {
                useEffect(() => setVideoUrl("/home/videos/home_mobile.mp4"), [
                    "/home/videos/home_mobile.mp4"
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
                    onAfterInit={swiperInit}
                >
                    <SwiperSlide>
                        <section className={css.home}>
                            <div className="video_bg"></div>
                            <video id={"video"} autoPlay loop muted className={`${css.home__video}`} src={videoUrl}></video>

                            <div className="video_control control_area">
                                <button id={"btnPlay"} type="button" className="play hidden"><span>Play</span></button>
                                <button id={"btnPause"} type="button" className="pause"><span>Pause</span></button>
                            </div>

                            <div className="scroll_hint">
                                <p className="scroll_tit">Scroll</p>
                                <span className="mouse_icon"></span>
                                <span className="arrow"></span>
                            </div>

                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section id={'about'} className={`${css.about}`}>
                            {/*<div className={css.breadcrumb}>*/}
                            {/*    <p>About</p>*/}
                            {/*</div>*/}
                            <div className={css.about__content}>
                                <h2 className="main_h2_tit">About</h2>
                                <p className="about_titA"><span>On-line offline marketing</span> 창업컨설팅 전문가 집단</p>
                                <p className="about_titB">
                                    아름다운 여자들의 우아한 공간, 아름다운 당신이 머무는 공간,<br/>
                                    여우공간 필라테스
                                </p>
                                <div className="about_box">
                                    <div className="about_expert out_box">
                                        <div className="inner_box"><span>EXPERT</span></div>
                                    </div>
                                    <div className="about_passion out_box">
                                        <div className="inner_box"><span>PASSION</span></div>
                                    </div>
                                    <div className="about_service out_box">
                                        <div className="inner_box"><span>SERVICE</span></div>
                                    </div>
                                </div>
                                <p className="about_bottom">
                                    고객에게 최고의 전문가를 제공하고 전문성 · 열정 · 서비스 정신으로 고객만족을 위해 혼신의 힘을 다합니다.<br/>
                                    창업을 준비하시는 대표님들의 투자를 시장가치의 극대화하는 상생 원리를 실현합니다.
                                </p>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <div className={css.service__content}>
                                <h2 className="main_h2_tit">Service</h2>
                                <div className="service_box">
                                    <div className="service_box_left">
                                        <p className="service_titA">
                                            변화와 혁신에 도전하는<br/>
                                            우리의 미래 당신의 미래가 됩니다.</p>
                                        <p className="service_titB">
                                            Our future challenging change and innovation becomes your future</p>
                                    </div>
                                    <div className="service_box_right">
                                        <p className="service_titC">
                                            여우공간에서는 지점과 협업하여 허점을 보완하고 AGILE 프레임워크 활용하여 유기적 비즈니스와 매출 회복의 혁신을 추진할 수
                                            있도록지원합니다. <br/>
                                            온 · 오프라인 HUMAN COMMUNITY 통해 E-BUSINESS 성공하여 HUMAN NETWORK COMMUNITY 형성을 이룰 수
                                            있도록 하는 것이 최종 목표입니다.
                                        </p>
                                        <a href="#" className="more">자세히보기</a>
                                    </div>
                                </div>


                                <div className="service_banner">
                                    <ul>
                                        <li><a href="#" title="바로가기"><p>START-UP<br />BUSINESS</p><span className="banner_btn"></span></a></li>
                                        <li><a href="#" title="바로가기"><p>RECOVERY<br />PROJECT</p><span className="banner_btn"></span></a></li>
                                        <li><a href="#" title="바로가기"><p>BUSINESS<br />PERFORMANCE</p><span className="banner_btn"></span></a></li>
                                        <li><a href="#" title="바로가기"><p>NEW<br />BUSINESS</p><span className="banner_btn"></span></a></li>
                                    </ul>
                                </div>

                                {/* <div id="btn_group">
                                    <Link href={{
                                        pathname: '/home/service',
                                        query: {page: 'startup'}
                                    }}>

                                       <button className="btn">START-UP BUSINESS</button>
                                    </Link>
                                    <Link href={{
                                        pathname: '/home/service',
                                        query: {page: 'recovery'}
                                    }}>
                                        <button className="btn">RECOVERY PROJECT</button>
                                    </Link>
                                    <Link href={{
                                        pathname: '/home/service',
                                        query: {page: 'performance'}
                                    }}>
                                        <button className="btn">BUSINESS PERFORMANCE</button>
                                    </Link>
                                    <Link href={{
                                        pathname: '/home/service',
                                        query: {page: 'newbusiness'}
                                    }}>
                                        <button className="btn">NEW BUSINESS</button>
                                    </Link>
                                </div> */}

                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section id={'contact'} className={css.contact}>
                            <div className={css.contact__content}>
                                <h2 className="main_h2_tit">Contact</h2>

                                <div className="contact_box">
                                    <p className="tit">ADDRESS</p>
                                    <div className="con">
                                        <p className="kor_add">서울 동작구 보라매로5가길 16 보라매 아카데미 타워 6층</p>
                                        <p className="eng_add">16 Boramae Academy Tower, Boramae 5-ga-gil, Dongjak-gu, Seoul, 6th floor.</p>
                                    </div>
                                    <div className="link_box">
                                        <ul>
                                            <li><a href="https://goo.gl/maps/ThcE8NQDv8RPYFrP6" target={"_blank"}></a></li>
                                            <li><a href="mailto:yeougonggan@gmail.com"></a></li>
                                            <li><a href="https://www.instagram.com/fox_space_pilates/" target={"_blank"}></a></li>
                                        </ul>
                                    </div>
                                </div>


                                {/* <h2 style={{color: "black"}}>서울 동작구 보라매로5가길 16 보라매 아카데미 타워 6층</h2>
                                <h2 style={{color: "black"}}>16 Boramae Academy Tower, Boramae 5-ga-gil, Dongjak-gu,
                                    Seoul, 6th floor.</h2>
                                <div className="addr_icon">
                                    <a href="https://goo.gl/maps/ThcE8NQDv8RPYFrP6" target={"_blank"}>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="mailto:yeougonggan@gmail.com">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://www.instagram.com/fox_space_pilates/" target={"_blank"}>
                                        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                                    </a>
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
