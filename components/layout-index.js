import Script from 'next/script'

const LayoutIndex = ({children}) => {
    return (
        <>
            <Script src="https://kit.fontawesome.com/588bc570f8.js" crossOrigin="anonymous" strategy={'lazyOnload'}/>
            {/*<main>*/}
                {children}
            {/*</main>*/}
        </>
    )
}

export default LayoutIndex;
