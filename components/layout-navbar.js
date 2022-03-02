// import st from './layout-navbar.module.css';

if (typeof window !== "undefined") {

    // navbar scroll시에 배경색 변경
    // document.addEventListener('scroll', () => {
    //     const navbar = document.querySelector(`.${st.navbar}`);
    //     const navbarHeight = navbar.getBoundingClientRect().height;
    //     if (window.scrollY > navbarHeight) {
    //         navbar.classList.add(st.navbar__dark)
    //     } else {
    //         navbar.classList.remove(st.navbar__dark)
    //     }
    // });

    // // menu 클릭시 activate
    // const navbarMenu = document.querySelector(`.menu`);
    // console.log('li click')
    // navbarMenu.addEventListener('click', (e) => {
    //     if (e.target.nodeName == 'LI') {
    //         // const active = document.querySelector(`.${st.navbar__menu__item}.${st.active}`);
    //         // active?.classList.remove(st.active);
    //         // e.target.classList.add(st.active);
    //         // navbarMenu.classList.toggle(st.open)
    //     }
    // })
    //
    // // toggle 클릭시 for small screen
    // const navbarToggleBtn = document.querySelector(`.${st.navbar__toggle_btn}`);
    // navbarToggleBtn.addEventListener('click', () => {
    //     navbarMenu.classList.toggle(st.open)
    // });
}

const LayoutNavbar = () => {
    const handleClick = (nthChild) => {
        document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };
    return (
        <nav id="navbar">
            <div className="navbar__logo">
                <img src="/favicon.png" className="navbar__logo__icon"/>
                <a href="/">여우공간</a>
            </div>
            {/*<a href="/">*/}
            {/*    <div className="logo">여우공간*/}
            {/*    </div>*/}
            {/*</a>*/}
            <div className="icon">
                <div>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
            </div>
            <div className="navigation">
                <ul className="menu">
                    <li><a href="#" onClick={() => handleClick(2)}>About</a>
                    </li>
                    <li><a href="#" onClick={() => handleClick(3)}>service</a>
                        <ul>
                            <li><a href="#" onClick={() => handleClick(4)}>START-UP BUSINESS</a></li>
                            <li><a href="#" onClick={() => handleClick(5)}>RECOVERY PROJECT</a></li>
                            <li><a href="#" onClick={() => handleClick(6)}>BUSINESS PERFORMANCE</a></li>
                            <li><a href="#" onClick={() => handleClick(7)}>NEW BUSINESS</a></li>
                        </ul>
                    </li>
                    {/*<li><a href="#recruit">recruit</a>*/}
                    {/*    <ul>*/}
                    {/*        <li><a href="page/?pn=recruit#hope">인재상</a></li>*/}
                    {/*        <li><a href="page/?pn=recruit#guide">채용안내</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li><a href="#news">news</a></li>*/}
                    <li><a href="#" onClick={() => handleClick(8)}>contact</a></li>
                </ul>
            </div>
            <style jsx>{`
              //#navbar .logo {
              //  z-index: 20;
              //  left: 45px;
              //  top: 30px;
              //  position: absolute;
              //  display: inline-block;
              //  width: 100px;
              //  height: 55px;
              //  background: url("/favicon.png") left center no-repeat;
              //  background-size: contain;
              //  -webkit-transition: all .5s ease-out;
              //  transition: all .5s ease-out;
              //}
              .navbar__logo {
                font-size: var(--font-medium);
                font-weight: var(--weight-semi-bold);
                z-index: 20;
                left: 45px;
                top: 15px;
                position: absolute;
                display: inline-block;
                //width: 100px;
                //height: 55px;
                background-size: contain;
                -webkit-transition: all .5s ease-out;
                transition: all .5s ease-out;
              }

              .navbar__logo__icon {
                height: 30px;
                vertical-align: middle;
                display: inline-block;
                margin-bottom: 5px;
              }

              .navbar__logo__icon + a {
                color: var(--color-white);
                text-decoration: none;
              }

              #navbar ul * {
                -webkit-transition: all .5s ease-out;
                transition: all .5s ease-out;
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
                display: inline-block;
                letter-spacing: 0.1em;
              }

              #navbar {
                position: fixed;
                z-index: 20;
                width: 100%;
                left: 0px;
                top: 5px;
                background: rgba(0, 0, 0, 0);
                -webkit-transition: all .5s ease-out;
                transition: all .5s ease-out;
                height: 0%;
              }

              #navbar.active {
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                border-top: 10px solid #8eb5ff;
              }

              #navbar .navigation {
                //margin-top: 40px;
                margin-right: 60px;
                float: right;
              }

              #navbar.active .navigation {

              }

              #navbar ul {
                display: inline-block;
              }

              #navbar ul li {

                margin-left: 60px;
                position: relative;
              }

              #navbar > div > ul > li > a {
                font-size: 16px;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(255, 216, 142, 0);
                margin: 7px 0;
              }

              #navbar ul li ul {
                position: absolute;
                padding: 20px 0px;
                top: 40px;
                left: 50%;
                margin-left: -90px;
                text-align: center;
                opacity: 0;
                -webkit-transition: all .5s ease-out;
                transition: all .5s ease-out;
              }

              #navbar ul li ul li {
                cursor: pointer;
                padding: 0px;
                margin: 0px;
                height: 35px;
                line-height: 26px;
                width: 260px;
                display: block;
                text-align: center;
                margin-bottom: 5px;
              }

              #navbar ul li ul li a {
                font-weight: 200 !important;
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: none;
                border-bottom: 1px solid rgba(0, 0, 0, 0);
                font-size: 15px;
                color: rgba(255, 255, 255, 0.7);
              }

              #navbar ul li.tmpactive ul,
              #navbar ul li:hover ul {
                border-bottom-right-radius: 60px;
                border-top-left-radius: 20px;
                display: block;
                background: rgba(0, 0, 0, 0.8);
                background-size: cover;
                opacity: 1;
              }

              #navbar ul li:hover ul li {

              }

              #navbar div > ul > li > a {
                color: #fff;
              }

              #navbar div > ul > li.active > a {
                color: #8eb5ff;
                border-bottom: 1px solid rgba(142, 203, 255, 0.5);
              }

              #navbar > div > ul > li:hover > a {
                color: #8eb5ff;
                border-bottom: 1px solid rgba(142, 203, 255, 0.5);
              }

              #navbar ul li:hover ul li:hover a {
                color: rgb(255, 229, 179);
                border-bottom: 1px solid rgb(74, 74, 74);
                padding: 0 15px;
              }

              #navbar ul li.active ul li.active a {
                color: rgb(251, 251, 251);
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
              }

              #navbar ul.lang li {
                margin-left: 20px;
              }

              #navbar ul.lang li a {
                font-size: 13px;
                padding-bottom: 5px;
              }

              #navbar .icon {
                z-index: 21;
                display: none;
                position: absolute;
                padding: 20px;
                top: 10px;
                right: 20px;
                width: 20px;
                height: 20px;
              }

              #navbar .icon > div {
                position: absolute;
                width: 20px;
                height: 20px;
                overflow: hidden;
                cursor: pointer;
                -webkit-transition: all .7s ease-out;
                transition: all .7s ease-out;
                opacity: 0;
              }

              #navbar .icon i {
                position: absolute;
                width: 3px;
                height: 3px;
                border-radius: 100%;
                background: #fff;
                -webkit-transition: all .7s ease-out;
                transition: all .7s ease-out;
              }

              #navbar .icon i:nth-of-type(1) {
              }

              #navbar .icon i:nth-of-type(2) {
                top: 0px;
                left: 8px;
              }

              #navbar .icon i:nth-of-type(3) {
                left: 16px;
              }

              #navbar .icon i:nth-of-type(4) {
                left: 0px;
                top: 8px;
              }

              #navbar .icon i:nth-of-type(5) {
                top: 8px;
                left: 8px;
              }

              #navbar .icon i:nth-of-type(6) {
                top: 8px;
                left: 16px;
              }

              #navbar .icon i:nth-of-type(7) {
                top: 16px;
              }

              #navbar .icon i:nth-of-type(8) {
                top: 16px;
                left: 8px;
              }

              #navbar .icon i:nth-of-type(9) {
                top: 16px;
                left: 16px;
              }

              #navbar .icon:hover i {
                background: #8eb5ff;
              }

              #navbar.active .icon i {
                background: #8eb5ff;
              }

              #navbar.active .icon i:nth-of-type(2) {
                left: 4px;
                top: 4px;
              }

              #navbar.active .icon i:nth-of-type(6) {
                left: 12px;
                top: 4px;
              }

              #navbar.active .icon i:nth-of-type(4) {
                left: 4px;
                top: 12px;
              }

              #navbar.active .icon i:nth-of-type(8) {
                left: 12px;
                top: 12px;
              }

              #navbar.active .icon > div {
                transform: rotate(180deg);
              }
            `}</style>
        </nav>
    )
}

export default LayoutNavbar;
