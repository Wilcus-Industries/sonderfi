import React from "react";

export function Logo() {
    return (
        <svg viewBox="0 0 400 400" role="img" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(200, 200)">
                <ellipse className="atom-orbit-1" cx="0" cy="0" rx="160" ry="52" fill="none" stroke="var(--background)" strokeWidth={10} opacity="0.9"/>
                <ellipse className="atom-orbit-2" cx="0" cy="0" rx="160" ry="52" fill="none" stroke="var(--background)" strokeWidth={10} opacity="0.9" transform="rotate(60)"/>
                <ellipse className="atom-orbit-3" cx="0" cy="0" rx="160" ry="52" fill="none" stroke="var(--background)" strokeWidth={10} opacity="0.9" transform="rotate(120)"/>
            </g>
        </svg>
    );
}

export function LogoFull() {
    return (
        <div className={"flex flex-row items-center "}>
            <Logo />
            <h1 className={"text-2xl font-open-sans font-medium"}>SonderFi</h1>
        </div>
    );
}

export function LogoWilcus() {
    return (
        <div className={"flex flex-row items-center "}>
            <Logo />
            <div className={"flex flex-row items-center gap-2"}>
                <h1 className={"text-2xl font-open-sans font-medium"}>SonderFi</h1>
                <h1 className={"text-2xl text-frame"}>|</h1>
                <h1 className={"font-open-sans font-thin"}>by Wilcus Industries</h1>
            </div>
        </div>
    );
}