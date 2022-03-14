import LayoutIndex from "../components/layout-index";
import css from "./index.module.css"
import React, {useEffect, useState} from "react";

export default function Home() {

    return (
        <LayoutIndex>
            <p>안녕하세요. 여우공간 입니다.</p>
            <p>Business Model Page 구축중입니다.</p>
            <p><a href="/home">Homepage는 여기로~</a></p>
        </LayoutIndex>
    )
}
