import LayoutHead from './layout-head';
import LayoutNavbar from './layout-navbar';
import LayoutArrowup from "./layout-arrowup";
import Script from 'next/script'

const LayoutIndex = ({children}) => {
    return (
        <>
            <LayoutHead/>
            <LayoutNavbar/>
            <Script src="https://kit.fontawesome.com/588bc570f8.js" crossOrigin="anonymous" strategy={'lazyOnload'}/>
            <main>
                {children}
            </main>
            <LayoutArrowup/>
        </>
    )
}

export default LayoutIndex;
