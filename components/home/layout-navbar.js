const LayoutNavbar = () => {

    const handleToggle = () => {
        document.querySelector('#navbar').classList.toggle("active")
    };

    const handleClick = (nthChild) => {
        if (document.querySelector('#navbar').classList.contains("active")) {
            document.querySelector('#navbar').classList.toggle("active")
        }
        document.querySelector('.swiper-pagination-bullet:nth-child(' + nthChild + ')')?.click();
    };

    if (process.browser) {

        document.querySelectorAll('.menu>li>a').forEach(a => {
            a.addEventListener('click', ev => {
                ev.preventDefault();
            })
        })
    }

    return (
        <nav id="navbar">
            <div className="sub-header-bg"></div>
            <div className="navbar__logo">
                <img src="/home/favicon.png" className="navbar__logo__icon"/>{' '}
                <a href="/home">여우공간</a>
            </div>
            {/*<a href="/">*/}
            {/*    <div className="logo">여우공간*/}
            {/*    </div>*/}
            {/*</a>*/}
            <div className="icon" onClick={() => handleToggle()}>
                <div>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
            </div>
            <div className="navigation">
                <ul className="menu">
                    <li><a href="#about" onClick={() => handleClick(2)}>About</a>
                    </li>
                    <li><a href="#service" onClick={() => handleClick(3)}>service</a>
                        <ul>
                            <li><a href="/home/service?page=startup">START-UP BUSINESS</a></li>
                            <li><a href="/home/service?page=recovery">RECOVERY PROJECT</a></li>
                            <li><a href="/home/service?page=performance">BUSINESS PERFORMANCE</a>
                            </li>
                            <li><a href="/home/service?page=newbusiness">NEW BUSINESS</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" onClick={() => handleClick(4)}>contact</a></li>
                </ul>
            </div>
            <style jsx>{`
              .sub-header-bg {
                //border-top: 3px solid #ff7f00;
                position: fixed;
                top: 0;
                width: 100%;
                left: 0;
                height: 90px;
                border-bottom: 1px solid rgba(255, 255, 255, .1);
                background: #000000;
                opacity: 0.4;
                //background: linear-gradient(to bottom, #0000009c, #00000000);
                //z-index: 15
              }

              .navbar__logo {
                font-size: 23px;
                font-weight: 500;
                z-index: 20;
                left: 45px;
                top: 20px;
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
                //border-top: 10px solid #ff7f00;
              }

              #navbar .navigation {
                //margin-top: 40px;
                //margin-right: 60px;
                //float: right;
                text-align: center;
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
                font-family: "Roboto";
                font-weight: 600;
                padding-bottom: 10px;
                // border-bottom: 1px solid rgba(255, 216, 142, 0);
                margin: 7px 0;
              }

              #navbar ul li ul {
                position: absolute;
                display: none;
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
                height: 30px;
                line-height: 30px;
                width: 240px;
                display: block;
                text-align: center;
                margin-bottom: 5px;
              }

              #navbar ul li ul li a {
                font-weight: 400 !important;
                font-family: "Roboto";
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: none;
                border-bottom: 1px solid rgba(0, 0, 0, 0);
                font-size: 14px;
                color: rgba(255, 255, 255, 0.7);
              }

              #navbar ul li.tmpactive ul,
              #navbar ul li:hover ul {
                display: block;
                background: rgba(255, 127, 0, 1);
                background-size: cover;
                opacity: 1;
              }

              #navbar ul li:hover ul li {
              }

              #navbar div > ul > li > a {
                color: #fff;
              }

              #navbar div > ul > li.active > a {
                color: #ff7f00;
                // border-bottom: 1px solid rgba(142, 203, 255, 0.5);
              }

              #navbar > div > ul > li:hover > a {
                color: #ff7f00;
                // border-bottom: 1px solid rgba(142, 203, 255, 0.5);
              }

              #navbar ul li:hover ul li:hover a {
                color: rgb(255, 229, 179);
                // border-bottom: 1px solid rgb(74, 74, 74);
                padding: 0 15px;
              }

              #navbar ul li.active ul li.active a {
                color: rgb(251, 251, 251);
                // border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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
                background: #ff7f00;
              }

              #navbar.active .icon i {
                background: #ff7f00;
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

              @media (max-width: 768px) {
                .navbar__logo {
                  left: 15px;
                  top: 22px;
                }

                #navbar {
                  top: 0px;
                  right: 0px;
                  height: 80px;
                  width: 100%;
                  overflow: hidden;
                  background: rgba(0, 0, 0, 0);
                }

                #navbar .icon {
                  display: block;
                }

                #navbar .icon > div {
                  opacity: 1;
                }

                #navbar .logo {
                  left: 20px;
                  top: 15px;
                  width: 75px;
                }

                #navbar .one_line {
                  z-index: 21;
                  position: fixed;
                  left: 0px;
                  top: 93px;
                  width: 100%;
                  box-sizing: border-box;
                  padding: 0px 20px;
                  height: 1px;
                }

                #navbar .one_line > div {
                  width: 0%;
                  height: 1px;
                  background: rgba(255, 255, 255, 0.15);
                  -webkit-transition: all .7s ease-out;
                  transition: all .7s ease-out;
                }

                #navbar.active .one_line > div {
                  width: 100%;
                }

                #navbar ul {
                  -webkit-transition: all .7s ease-out;
                  transition: all .7s ease-out;
                  opacity: 0;
                }

                #navbar.active ul {
                  opacity: 1;
                }

                #navbar.active ul li ul {
                  opacity: 1;
                }

                #navbar .navigation {
                  width: 100%;
                  margin: 0 auto;
                  position: relative;
                  top: 100px;
                }

                #navbar.active .navigation {
                  display: block;
                }

                #navbar .navigation ul.lang {
                  position: absolute;
                  right: 30px;
                  margin-top: 5px;
                }

                #navbar .navigation ul.lang li a {
                  font-size: 16px;
                }

                #navbar .navigation ul.menu li {
                  display: block;
                  margin-left: 40px;
                }

                #navbar .navigation ul.menu li a {
                  display: inline-block;
                  font-size: 45px;
                  padding-bottom: 0px;
                  line-height: 45px;
                  font-weight: 600;
                  letter-spacing: 0em;
                }

                #navbar .navigation ul.menu li ul {
                  padding: 0px;
                  top: 0;
                  position: relative;
                  display: block;
                  background: transparent;
                  left: 0px;
                  margin-left: 0px;
                  text-align: left;
                }

                #navbar .navigation ul.menu li ul li {
                  height: 25px;
                  border-left: 1px solid rgba(255, 255, 255, 0.2);
                  margin: 0px;
                  padding: 0px 20px;
                  width: auto;
                  text-align: left;
                  display: inline-block;
                  margin-bottom: 10px;
                }

                //#navbar .navigation ul.menu li ul li:first-child {
                //  margin: 0px;
                //  padding-left: 0px;
                //  border: 0px;
                //}
                #navbar .navigation ul.menu li ul li a {
                  line-height: 25px;
                  display: inline-block;
                  font-size: 16px;
                  letter-spacing: 0.05em;
                  text-align: left;
                  color: rgba(255, 255, 255, 0.5);
                  padding: 0;
                }

                #navbar .navigation ul.menu li.active ul li.active a {
                  color: #ff7f00;
                }

                .swiper-container.right_bar > .swiper-pagination > .swiper-pagination-bullet-active {
                  width: 23px;
                }

                .swiper-container-vertical.right_bar > .swiper-pagination-bullets {
                  right: 5px;
                }

              }

              @media (max-width: 480px) {
                #navbar .navigation ul.menu li {
                  margin-left: 20px;
                }

                #navbar .navigation ul.menu li ul li {
                  padding: 0px 14px;
                }
              }

            `}</style>
        </nav>
    )
}

export default LayoutNavbar;
