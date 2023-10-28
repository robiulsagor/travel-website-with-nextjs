import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Nav = () => {
    return (
        <nav className="border border-red-500 flex  justify-between items-center py-5 px-6 lg:px-20 3xl:px-0 relative max-w-[1440px] z-30 mx-auto">
            <Link href="/" >
                <Image src='/hilink-logo.svg' alt="logo" height={50} width={70} className="w-auto h-auto"
                />
            </Link>

            <ul className="hidden h-full lg:flex gap-12">
                {NAV_LINKS.map(link => (

                    <Link href={link.href} key={link.key} className="  transition-all hover:font-bold ">
                        {link.label}
                    </Link>

                ))}
            </ul>

            <div className="hidden h-full lg:flex ">
                <Button
                    type="button"
                    icon="/user.svg"
                    title="Login"
                    variant="bg-slate-900"
                />
            </div>

            <div className="lg:hidden">
                <Image src='/menu.svg' alt="menu logo"
                    width={20} height={10}
                    className="w-[30px] h-auto cursor-pointer"
                />
            </div>

        </nav>
    )
}

export default Nav