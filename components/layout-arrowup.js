import st from './layout-arrowup.module.css';

// scroll시에 arrowup 버튼 show
if (typeof window !== "undefined") {
    const arrowUp = document.querySelector('#arrowUp');
    document.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 3) {
            arrowUp.classList.add(st.visible)
        } else {
            arrowUp.classList.remove(st.visible)
        }
    });

    arrowUp.addEventListener('click', () => {
        console.log('click')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });


}

const LayoutArrowup = () => {
    return (
        <button id={'arrowUp'} className={st.arrow_up}>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default LayoutArrowup;
