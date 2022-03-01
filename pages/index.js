import LayoutIndex from "../components/layout-index";
import css from "./index.module.css"
import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import {Mousewheel, Pagination} from "swiper";

export default function Home() {
    return (
        <LayoutIndex>
            {/*<section className={css.about}>*/}
            {/*    <p>*/}
            {/*        아름다운 여자들의 우아한 공간, 아름다운 당신이 머무는 공간*/}
            {/*        여우공간 필라테스*/}
            {/*    </p>*/}
            {/*    <p>EXPERT + PASSION + SERVICE</p>*/}
            {/*    <p>*/}
            {/*        On-line offline marketing 창업컨설팅 전문가 집단*/}
            {/*        고객에게 최고의 전문가를 제공하고 전문성 / 열정 / 서비스 정신으로 고객만족을 위해*/}
            {/*        혼신의 힘을 다합니다. 창업을 준비하시는 대표님들의 투자를*/}
            {/*        시장가치의 극대화하는 상생 원리를 실현합니다.*/}
            {/*    </p>*/}
            {/*</section>*/}
            {/*<section className={css.service}>*/}
            {/*    <p>*/}
            {/*        변화와 혁신에 도전하는 우리의 미래 당신의 미래가 됩니다.*/}
            {/*        Our future challenging change and innovation*/}
            {/*        becomes your future*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        YEOUGONGGAN에서는 지점과 협업하여 허점을*/}
            {/*        보완하고 AGILE 프레임워크 활용하여 유기적*/}
            {/*        비즈니스와 매출 회복의 혁신을 추진할 수 있도록지원합니다.*/}
            {/*        온.오프라인 HUMAN COMMUNITY 통해*/}
            {/*        E-BUSINESS 성공하여 HUMAN NETWORK COMMUNITY 형성을 이룰 수 있도록 하는 것이 최종 목표입니다.*/}
            {/*    </p>*/}
            {/*</section>*/}
            {/*<section className={css.about}>*/}
            {/*    <br/><br/>*/}
            {/*    <h1>hello world</h1>*/}
            {/*    <h2>hello world</h2>*/}
            {/*    <h3>hello world</h3>*/}
            {/*    <p>hello world</p>*/}
            {/*    <br/>*/}
            {/*</section>*/}
            <div className={css.main}>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    speed={800}
                    pagination={{
                        clickable: true,
                        clickableClass: "moregore"
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <section className={css.home}>
                            <video src="/videos/home.mp4" autoPlay loop muted/>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.about}>
                            <p>slikde2</p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.service}>
                            <p>slikde2</p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={css.contact}>
                            <p>slikde2</p>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>
        </LayoutIndex>
    )
}
