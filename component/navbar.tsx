import NavbarItem from "@/component/navbarItem";
import SignInButton from "@/component/signInButton";
import {FcGoogle} from "react-icons/fc";

export default function Navbar() {

    return (
        <div className={"flex flex-row mt-5 mx-5 z-51"}>
            <NavbarItem title={"HOME"}
                        href={"/"} />
            <NavbarItem title={"DASHBOARD"}
                        href={"/dashboard"} />
            <NavbarItem title={"ABOUT"}
                        href={"/about"} />
        </div>
    )
}