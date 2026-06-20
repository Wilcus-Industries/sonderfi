import {Logo} from "@/component/logo";
import Image from "next/image";
import Navbar from "@/component/navbar";
import { FcGoogle } from "react-icons/fc";
import SignInButton from "@/component/signInButton";
import {FaApple} from "react-icons/fa6";
import Parallax from "@/component/parallax";
import FitText from "@/component/fitText";

export default function Home() {
    return (
        <main className={""}>
            <div className={"relative h-screen text-background flex flex-col bg-green-500"}>
                <Navbar />
                <div className={"flex flex-row items-center justify-center text-[20vw] leading-none z-50"}>
                    <Logo />
                    <h1 className={"font-playfair mr-3"}>SonderFi</h1>
                </div>

                <div className={"relative flex-1 flex flex-row z-50"}>
                    <div className={"flex flex-col justify-between h-full w-full ml-2 pb-8"}>
                        <Parallax clampToNext>
                            <div>
                                <small className={"ml-1 font-sans"}>STOCKS ✦ BUDGETING ✦ OPTIONS</small>
                                <h1 className={"xl:text-7xl md:text-6xl text-4xl xl:w-150 md:w-115 sm:w-100 w-90 font-playfair"}>UNIQUE TOOLS FOR YOUR UNIQUE PORTFOLIO</h1>
                                <div className={"mt-2 flex flex-row gap-2"}>
                                    <SignInButton icon={<FcGoogle />} provider={"google"} />
                                    <SignInButton icon={<FaApple />} />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <div className={"relative xl:h-screen flex flex-col xl:flex-row overflow-hidden bg-black text-white xl:gap-10"}>
                <div className={"relative min-h-screen xl:min-h-0 w-full xl:w-auto xl:contents"}>
                    <Parallax distance={100} className={"absolute top-0 left-0 z-50 xl:static"}>
                        <small className={"ml-2"}>AUTOMATIONS ✦ RESEARCH</small>
                        <h1 className={"ml-2 md:text-7xl text-5xl font-bold md:w-130 w-100 font-playfair"}>AGENTIC FINANCIAL TECHNOLOGY</h1>
                    </Parallax>

                    <Parallax className={"relative xl:absolute bottom-0 left-0 md:w-150 md:h-200 w-75 h-100 ml-auto xl:ml-0"} distance={300}>
                        <Image src={"/assets/greek.png"} alt={""} fill sizes={"600px"} className={"contrast-[1.1]"} />
                    </Parallax>
                </div>

                <div className={"flex-1 min-h-screen xl:min-h-0 z-50 flex flex-col xl:block"}>
                    <FitText font={"font-sans"} className={"font-bold"}>ASK SONDER ANYTHING</FitText>
                </div>
            </div>
            <div className={"relative xl:h-screen flex flex-col xl:flex-row xl:justify-end overflow-hidden bg-black text-white xl:gap-10"}>
                <div className={"flex-1 min-h-screen xl:min-h-0  z-50 xl:block flex flex-col"}>
                    <FitText font={"font-sans"} className={"font-bold"}>NO MORE SPREADSHEETS</FitText>
                </div>

                <div className={"order-first xl:order-0 relative min-h-screen xl:min-h-0 w-full xl:w-auto xl:contents"}>
                    <Parallax distance={100} className={"absolute top-0 right-0 z-50 text-right xl:static"}>
                        <small className={"mr-2"}>GRAPHS ✦ DATA ✦ CATEGORIES</small>
                        <h1 className={"mr-2 md:text-7xl text-5xl font-bold md:w-130 w-80 font-playfair text-right"}>ULTIMATE BUDGETING SUITE</h1>
                    </Parallax>

                    <Parallax className={"relative xl:absolute bottom-0 right-0 md:w-150 md:h-200 w-75 h-100"} distance={300}>
                        <Image src={"/assets/greek2.png"} alt={""} fill sizes={"600px"} className={"contrast-[1.1]"} />
                    </Parallax>
                </div>
            </div>

            <div className={"relative xl:h-screen flex flex-col xl:flex-row overflow-hidden bg-black text-white xl:gap-10"}>
                <div className={"relative min-h-screen xl:min-h-0 w-full xl:w-auto xl:contents"}>
                    <Parallax distance={100} className={"absolute top-0 left-0 z-50 xl:static"}>
                        <small className={"ml-2"}>OPTIONS ✦ SOCIAL FEED ✦ IDEAS</small>
                        <h1 className={"ml-2 md:text-7xl text-5xl font-bold w-130 font-playfair"}>AND SO MUCH MORE.</h1>
                    </Parallax>

                    <Parallax className={"relative xl:absolute bottom-0 left-0 md:w-150 md:h-200 w-75 h-100 ml-auto xl:ml-0"} distance={300}>
                        <Image src={"/assets/greek.png"} alt={""} fill sizes={"600px"} className={"contrast-[1.1]"} />
                    </Parallax>
                </div>

                <div className={"flex-1 min-h-screen xl:min-h-0  z-50 flex flex-col xl:block"}>
                    <FitText className={"font-bold"} font={"font-sans"}>SHARE YOUR IDEAS</FitText>
                </div>
            </div>

            <div className={"relative h-screen flex flex-col overflow-hidden bg-black"}>
                <div className={"flex-1"}>

                </div>
                <div className={""}>
                    <FitText className={"leading-none text-gray-600 font-bold"}>WILCUS INDUSTRIES </FitText>
                </div>
            </div>
        </main>
    );
}

