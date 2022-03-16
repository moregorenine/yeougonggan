import LayoutIndex from "../components/layout-index";
import cssindex from "./index.module.scss"

export default function Home() {

    return (
        <LayoutIndex>
            <div className={cssindex.main}>
                <div>
                    <h2>안녕하세요.</h2>
                    <img src="/home/favicon.png" className="navbar__logo__icon" style={{margin: "0 5px 0 10px;"}}/>
                    <h2>여우공간 입니다.</h2>
                </div>
                <div>
                    <h2>현재 Business Model Page 구축중입니다.</h2>
                    <h2><a href="/home">Homepage는 여기를 클릭해주세요.</a></h2>
                </div>
            </div>
        </LayoutIndex>
    )
}
