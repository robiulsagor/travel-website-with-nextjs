"use client"

import { useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Nav = () => {
    const [mobileNav, setMobileNav] = useState(false)

    const handleMobileNav = () => {
        setMobileNav(prev => !prev)
    }

    const hideMobileNav = () => {
        setMobileNav(false)
    }
    return (
        <nav className="flex justify-between items-center py-5 px-6 lg:px-20 3xl:px-0 relative max-w-[1440px] z-30 mx-auto ">
            <Link href="/" >
                <Image src='/hilink-logo.svg' alt="logo" height={50} width={70} className="w-auto h-auto" priority={true}
                />
            </Link>

            <ul className="hidden h-full lg:flex gap-12">
                {NAV_LINKS.map(link => (
                    <Link href={link.href} key={link.key} className="  transition-all hover:font-bold text-slate-500 ">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="hidden h-full lg:flex ">
                <Button
                    type="button"
                    icon="/user.svg"
                    title="Login"
                    variant="bg-slate-800 hover:bg-slate-900"
                />
            </div>

            <div className="lg:hidden select-none">
                <Image src='/menu.svg' alt="menu logo" id="mobile-btn"
                    onClick={handleMobileNav}
                    width={20} height={10}
                    className="w-[30px] h-auto cursor-pointer select-none"
                />
            </div>

            <div
                className={`lg:hidden  h-screen fixed top-0  flex justify-end transition-all duration-300 ${mobileNav ? "w-full right-0" : "w-96 -right-96"}`} >

                {/* blur container */}
                <div onClick={hideMobileNav}
                    className={`absolute h-full   backdrop-blur-sm transition-all duration-300 z-10  ${mobileNav ? "w-full" : "w-0"}`} />

                {/* Nav close button*/}
                <span className="absolute  right-8 top-5 text-4xl cursor-pointer text-white font-bold select-none z-30  h-10 w-10 flex items-center justify-center"
                    onClick={handleMobileNav}>
                    <Image src='/close.svg' alt="close icon"
                        width={50} height={40} />
                </span>

                {/* actual nav  */}
                <div className="z-20 w-full h-screen flex items-center justify-end">

                    <ul className="w-full sm:w-[90%] md:w-[55%]  h-[100vh] text-xl md:text-2xl  bg-slate-800 flex flex-col justify-between items-center  py-20 px-10 z-20 ">
                        {NAV_LINKS.map(link => (
                            <Link href={link.href} key={link.key} className="  transition-all hover:font-bold text-white ">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Nav