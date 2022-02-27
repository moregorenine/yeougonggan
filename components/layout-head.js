import Head from "next/head";

const LayoutHead = () => {
    return (
        <Head>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'}/>
            <title>여우공간</title>
            <meta name={'description'} content={'여우공간'}/>
            <meta name={'author'} content={'moregorenine'}/>
            <link rel="icon" href="/jiyul/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
                  rel="stylesheet"/>
        </Head>
    )
}

export default LayoutHead;
