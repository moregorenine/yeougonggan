import Head from "next/head";

const LayoutHead = () => {
    return (
        <Head>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'}/>
            <title>여우공간</title>
            <meta name={'description'} content={'여우공간'}/>
            <meta name={'author'} content={'moregorenine'}/>
            <link rel="icon" href="/home/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
        </Head>
    )
}

export default LayoutHead;
