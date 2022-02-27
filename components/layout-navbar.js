import st from './layout-navbar.module.css';

if (typeof window !== "undefined") {

    // navbar scroll시에 배경색 변경
    const navbar = document.querySelector(`.${st.navbar}`);
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add(st.navbar__dark)
        } else {
            navbar.classList.remove(st.navbar__dark)
        }
    });

    // menu 클릭시 activate
    const navbarMenu = document.querySelector(`.${st.navbar__menu}`);
    navbarMenu.addEventListener('click', (e) => {
        if (e.target.nodeName == 'LI') {
            const active = document.querySelector(`.${st.navbar__menu__item}.${st.active}`);
            active.classList.remove(st.active);
            e.target.classList.add(st.active);
            navbarMenu.classList.toggle(st.open)
        }

    })

    // toggle 클릭시 for small screen
    const navbarToggleBtn = document.querySelector(`.${st.navbar__toggle_btn}`);
    navbarToggleBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle(st.open)
    });
}

const LayoutNavbar = () => {
    return (
        <nav className={st.navbar}>
            <div className={st.navbar__logo}>
                <i className="fab fa-diaspora"></i>
                <a href="#">{' '}여우공간</a>
            </div>
            <ul className={st.navbar__menu}>
                <li className={`${st.navbar__menu__item} ${st.active}`} data-filter="center">센터플러스</li>
                <li className={st.navbar__menu__item} data-filter="info">정보센터</li>
                <li className={st.navbar__menu__item} data-filter="edu">교육정보</li>
                <li className={st.navbar__menu__item} data-filter="job">구인구직</li>
                <li className={st.navbar__menu__item} data-filter="comunity">커뮤니티</li>
                <li className={st.navbar__menu__item} data-filter="care">케어</li>
            </ul>
            <div className="navbar__right"></div>
            <div className={st.navbar__user}>
                <i className="fas fa-user"/>
            </div>
            <div className={st.navbar__toggle_btn}>
                <i className="fas fa-bars"/>
            </div>
        </nav>
    )
}

export default LayoutNavbar;
