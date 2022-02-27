import LayoutIndex from "../components/layout-index";
import css from "./index.module.css"

export default function Home() {
    return (
        <LayoutIndex>
            <section className={css.home}>
                {/* <section className="about swiper-slide swiper-slide-active active_reverse" data-hash="about" style="height: 947px;"> */}
                <video src="/videos/home.mp4" autoPlay loop muted></video>
                {/* <div class="section_content">
                    <h2 data-split="Specialist + Sincerity + Service"><span data-bind-active="true" class="split_item0">Specialist</span><span data-bind-active="true" class="split_item1">+</span><span data-bind-active="true" class="split_item2">Sincerity</span><span data-bind-active="true" class="split_item3">+</span><span data-bind-active="true" class="split_item4">Service</span></h2>
                    <h3 data-split="세상을 주도하는 전문가 집단!"><span data-bind-active="true" class="split_item5">세상을 주도하는 전문가 집단!</span></h3>
                    <p data-split="고객 여러분께 최고의 전문가를 제공하고 전문성 / 성실 / 서비스 정신으로 고객만족을 위해 혼신의 힘을 다합니다. 사원을 위한 CDP 관리, 부단한 자기개발 지원을 통해 개개인의 시장가치를 극대화하는 상생 원리를 실현합니다."><span data-bind-active="true" class="split_item6">고객 여러분께 최고의 전문가를 제공하고 전문성 / 성실 / 서비스 정신으로 고객만족을 위해</span><span data-bind-active="true" class="split_item7">혼신의 힘을 다합니다. 사원을 위한 CDP 관리, 부단한 자기개발 지원을 통해</span><span data-bind-active="true" class="split_item8">개개인의 시장가치를 극대화하는 상생 원리를 실현합니다.</span></p>
                    <span class="btn" data-bind-active="true">
                        <div>
                            <a href="http://il4u.co.kr/page/?pn=about#company">about company</a>
                        </div>
                        <div>
                            <a href="http://il4u.co.kr/page/?pn=about#philosophy">philosophy</a>
                        </div>
                        <div>
                            <a href="http://il4u.co.kr/page/?pn=about#history">company history</a>
                        </div>
                    </span>
                </div> */}
                {/* <div class="arrow">
                    <svg id="circle-arrow" viewBox="0 0 38.67 38.67" width="100%" height="100%"><path d="M19.33 38.67C8.67 38.67 0 29.99 0 19.33S8.67 0 19.33 0c10.66 0 19.33 8.67 19.33 19.33.01 10.66-8.67 19.34-19.33 19.34zm0-37.17C9.5 1.5 1.5 9.5 1.5 19.33c0 9.83 8 17.83 17.83 17.83 9.83 0 17.83-8 17.83-17.83C37.17 9.5 29.17 1.5 19.33 1.5z"></path><path d="M18.58 12.08h1.5v12.33h-1.5z"></path><path d="M19.33 25.48l-6.11-6.11 1.06-1.07 5.05 5.06 5.06-5.06 1.06 1.07z"></path></svg>
                </div> */}
            </section>
            {/* <section className={css.home}>
                <br />
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
            </section>
            <section className={css.home}>
                <br />
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
            </section>
            <section className={css.home}>
                <br />
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
            </section> */}
        </LayoutIndex>
    )
}
