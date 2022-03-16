import Script from 'next/script'
import LayoutHead from "./home/layout-head";

const LayoutIndex = ({children}) => {
    return (
        <>
            <LayoutHead/>
            <Script src="https://kit.fontawesome.com/588bc570f8.js" crossOrigin="anonymous" strategy={'lazyOnload'}/>
            {/*<main>*/}
                {children}
            {/*</main>*/}
        </>
    )
}

export default LayoutIndex;
