import React from "react";
import { IconGeneratorOpts } from "../types";
import { IconGenerator, iconMap } from "./svgs";

export function generateTabIcon({
    iconLocation,
    iconLink,
    iconTitle,
    key,
}: IconGeneratorOpts) {
    return (
        <div style={{ textAlign: "center" }}>
            <a href={iconLink ? iconLink : undefined}>
            {/* <img src={require('../../../assets/languages/docker-original.svg').default} height="48" width="48" /> */}
                {iconLocation ? (
                    <img src={iconLocation} height="48" width="48" />
                )  : undefined}
                {/* {iconLocation ? (
                    <img src={iconLocation} height="48" width="48" />
                ) : key ? (
                    <IconGenerator language={key}></IconGenerator>
                ) : undefined} */}
                {iconTitle ? (
                    <>
                        <br />
                        {iconTitle}
                    </>
                ) : undefined}
            </a>
        </div>
    );
}
