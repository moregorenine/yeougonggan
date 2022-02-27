import LayoutIndex from "../components/layout-index";
import css from "./index.module.css"

export default function Home() {
    return (
        <LayoutIndex>
            <section className={css.home}>
                <video src="/videos/home.mp4" autoPlay loop muted/>
            </section>
            <section className={css.about}>
                <br/>
                <br/>
                <br/>
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
                <p>hello world</p>
                <p>hello world</p>
                <p>hello world</p>
                <p>hello world</p>
                <p>hello world</p>
                <p>hello world</p>
                <br/><br/>
            </section>
            <section className={css.about}>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
                <br/><br/>
            </section>
            <section className={css.about}>
                <br/><br/>
                <h1>hello world</h1>
                <h2>hello world</h2>
                <h3>hello world</h3>
                <p>hello world</p>
                <br/>
            </section>
        </LayoutIndex>
    )
}
