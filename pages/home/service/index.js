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
                                    <li><a href="#" className="home">홈으로가기</a></li>
                                    <li>Service</li>
                                    <li>Start-up Business</li>
                                </ol>
                                <div className="business_all">
                                    <div className="line1">
                                        <div className="line2">
                                            <div className="center_circle"><span>여우공간</span></div>
                                        </div>
                                    </div>
                                    <div className="line_circle">
                                        <a href="#" className="circle1 tooltip right">
                                            <span className="tit">온라인</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>네이버 위치기반 검색</li>
                                                    <li>키워드광고</li>
                                                    <li>블로그 인스타 홈페이지</li>
                                                    <li>채널 SNS 카카오채널</li>
                                                    <li>브랜드 연결</li>
                                                    <li>Human Network Community</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle2 tooltip right">
                                            <span className="tit">회원관리</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>고객과 관련된 내·외부 자료 분석</li>
                                                    <li>고객 특성에 맞게 마케팅 활동을 계획. 지원 시스템</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle3 tooltip right">
                                            <span className="tit">데이터</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>수익 구조 분석</li>
                                                    <li>경쟁 업체 매출 마케팅 분석</li>
                                                    <li>회원 세분화 분류</li>
                                                    <li>직원 강사 정보 확립</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle4 tooltip right">
                                            <span className="tit">운영</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>본사 지원 이벤트 활용</li>
                                                    <li>직원,강사 교육과 면접</li>
                                                    <li>운영시스템 분석</li>
                                                    <li>최적화 운영시스템 활용</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle5 tooltip left">
                                            <span className="tit">오프라인</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>고객의 성향과 방향성</li>
                                                    <li>환경적인 요인과 관심사 통계확인</li>
                                                    <li>고객 리스트 세분화</li>
                                                    <li>Business System + APP</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle6 tooltip left">
                                            <span className="tit">지점관리</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>영업회의 월별</li>
                                                    <li>이벤트 브랜드</li>
                                                    <li>온라인 홍보물 관리</li>
                                                    <li>지점 영상 홍보물제작</li>
                                                    <li>지점 이벤트 문구 제작</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle7 tooltip left">
                                            <span className="tit">마케팅</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>온라인 휴먼네트워크커뮤니티</li>
                                                    <li>오프라인 비지니스시스템 어플</li>
                                                    <li>브랜드만의 가치를 담은 스토리텔링</li>
                                                    <li>Customer tendencies text message</li>
                                                </ul>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="business_circle">
                                        <a href="#" className="business_circle1"><span>컨설팅<br/>계약체결</span></a>
                                        <a href="#" className="business_circle2"><span>상권분석<br/>상권입지<br/>조건분석</span></a>
                                        <a href="#" className="business_circle3"><span>인테리어<br/>제휴업체</span></a>
                                        <a href="#" className="business_circle4"><span>개점 오픈</span></a>
                                    </div>
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
                                    <li><a href="#" className="home">홈으로가기</a></li>
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
                                    <li><a href="#" className="home">홈으로가기</a></li>
                                    <li>Service</li>
                                    <li>Recovery Project</li>
                                </ol>

                                <div className="recovery_all">
                                    <div className="line1">
                                        <div className="line2">
                                            <div className="center_circle"><span className="logo">여우공간</span><span
                                                className="text">RECOVERY<br/>PROJECT</span></div>
                                        </div>
                                    </div>
                                    <div className="line_circle">
                                        <a href="#" className="circle1 tooltip right">
                                            <span className="tit">온라인</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>네이버 위치기반 검색</li>
                                                    <li>키워드광고</li>
                                                    <li>블로그 인스타 홈페이지</li>
                                                    <li>채널 SNS 카카오채널</li>
                                                    <li>브랜드 연결</li>
                                                    <li>Human Network Community</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle2 tooltip right">
                                            <span className="tit">회원관리</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>고객과 관련된 내·외부 자료 분석</li>
                                                    <li>고객 특성에 맞게 마케팅 활동을 계획. 지원 시스템</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle3 tooltip right">
                                            <span className="tit">데이터</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>수익 구조 분석</li>
                                                    <li>경쟁 업체 매출 마케팅 분석</li>
                                                    <li>회원 세분화 분류</li>
                                                    <li>직원 강사 정보 확립</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle4 tooltip right">
                                            <span className="tit">운영</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>본사 지원 이벤트 활용</li>
                                                    <li>직원,강사 교육과 면접</li>
                                                    <li>운영시스템 분석</li>
                                                    <li>최적화 운영시스템 활용</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle5 tooltip left">
                                            <span className="tit">오프라인</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>고객의 성향과 방향성</li>
                                                    <li>환경적인 요인과 관심사 통계확인</li>
                                                    <li>고객 리스트 세분화</li>
                                                    <li>Business System + APP</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle6 tooltip left">
                                            <span className="tit">지점관리</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>영업회의 월별</li>
                                                    <li>이벤트 브랜드</li>
                                                    <li>온라인 홍보물 관리</li>
                                                    <li>지점 영상 홍보물제작</li>
                                                    <li>지점 이벤트 문구 제작</li>
                                                </ul>
                                            </span>
                                        </a>
                                        <a href="#" className="circle7 tooltip left">
                                            <span className="tit">마케팅</span>
                                            <span className="tooltip-content">
                                                <ul className="tool">
                                                    <li>온라인 휴먼네트워크커뮤니티</li>
                                                    <li>오프라인 비지니스시스템 어플</li>
                                                    <li>브랜드만의 가치를 담은 스토리텔링</li>
                                                    <li>Customer tendencies text message</li>
                                                </ul>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="recovery_circle">
                                        <a href="#" className="recovery_circle1"><span>상권분석</span></a>
                                        <a href="#" className="recovery_circle2"><span>인테리어</span></a>
                                        <a href="#" className="recovery_circle3"><span>컨설팅<br/>계약체결</span></a>
                                    </div>
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
                                    <li><a href="#" className="home">홈으로가기</a></li>
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
                                    <li><a href="#" className="home">홈으로가기</a></li>
                                    <li>Service</li>
                                    <li>Business Performance</li>
                                </ol>
                                {/* <div className={css.service__content__startup__graph}>
                                    <img src="/home/images/businessperformance.png" alt="START-UP BUSINESS"/>
                                </div> */}
                                <div className="Performance_box">
                                    <div className="Performance_graph">
                                        <div className="tit"><p>소비자심리지수 추이<span>자료:한국은행</span></p></div>
                                        <div className="img"><img src="/home/images/performance_graph.png" alt=""/></div>
                                    </div>
                                    <div className="Performance_con">
                                        <div className="Performance_left">
                                            <div className="tit">START-UP BUSINESS<br/><span>A 필라테스</span></div>
                                            <div className="box">
                                                <ul>
                                                    <li>그룹 수업 세분화(매장규모 80평)</li>
                                                    <li>고정 유동 인구 지역</li>
                                                    <li>아파트 주거구역 69%</li>
                                                    <li>경쟁사 2km 14곳 입점</li>
                                                    <li>START-UP BUSINESS 2021년 10월 15일 ~ 11월 13일<br/>오픈프리 세일 진행&nbsp;
                                                        <span>투자비용의 48% 매출발생</span></li>
                                                    <li>회원 11월 기준 199명</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="Performance_right">
                                            <div className="tit">RECOVERY PROJECT<br/><span>B 필라테스</span></div>
                                            <div className="box">
                                                <ul>
                                                    <li>2021년 12월 코로나 오미크론 변이 발생</li>
                                                    <li>2월 25일 신규 166,209 확진자 발생</li>
                                                    <li>21년 11월 <span>21.1% 신장</span></li>
                                                    <li>21년 12월 <span>72.5% 신장</span></li>
                                                    <li>22년 1월 <span>46.0% 신장</span></li>
                                                    <li>22년 2월 <span>17.0%신장</span></li>
                                                    <li><span>신규 88%, 재등록 93% 등록</span></li>
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
                                    <li><a href="#" className="home">홈으로가기</a></li>
                                    <li>Service</li>
                                    <li>New Business</li>
                                </ol>
                                <div className="new_all">
                                    <div className="new_left">
                                        <div className="line1">
                                            <div className="center_circle"><span>여우공간</span></div>
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
                                            <li>효율적인 광고 마케팅</li>
                                            <li>획기적인 판매 시스템 구축</li>
                                            <li>간편한 매장 운영 시스템</li>
                                            <li>피트니스 시설 어디든 가능한 간편함</li>
                                            <li>인재 정보,기업 데이터 베이스 구축</li>
                                        </ul>
                                    </div>
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
