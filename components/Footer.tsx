import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mb-20">
            <div className="px-10 lg:px-20 flex flex-col gap-20">
                <div className="flex flex-col gap-10 md:flex-row items-start justify-start">
                    <Link href='/' className="">
                        <Image src="/hilink-logo.svg" alt="logo"
                            width={70}
                            height={49}
                        />
                    </Link>

                    <div className="flex flex-wrap sm:justify-between gap-10">
                        <div className="flex flex-col gap-5">
                            <h4 className="text-[20px] font-bold ">Learn More</h4>
                            <ul className="text-gray-400 flex flex-col text-[15px] gap-3">
                                <Link href="/">
                                    About HiLink
                                </Link>
                                <Link href="/">
                                    Press Releases
                                </Link>
                                <Link href="/">
                                    Environments
                                </Link>
                                <Link href="/">
                                    Jobs
                                </Link>
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                                <Link href="/">
                                    Contact Us
                                </Link>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h4 className="text-[20px] font-bold ">
                                Our Community
                            </h4>
                            <ul className="text-gray-400 flex flex-col text-[15px] gap-3">
                                <Link href="/">
                                    Hiking HiLink
                                </Link>
                                <Link href="/">
                                    Hiking HiLink
                                </Link>
                                <Link href="/">
                                    Hiking HiLink
                                </Link>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h4 className="text-[20px] font-bold ">
                                Contact Us
                            </h4>
                            <ul className="text-gray-400 flex flex-col text-[15px] gap-3">
                                <Link href="/">
                                    Phone: +88123456789
                                </Link>
                                <Link href="/">
                                    Email: robiul100.me@gmail.com
                                </Link>

                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h4 className="text-[20px] font-bold ">
                                Socials
                            </h4>
                            <ul className="text-gray-400 flex flex-row text-[15px] gap-3">
                                <Link href="/">
                                    <Image src="/facebook.svg" alt="socils" width={20}
                                        height={20} />
                                </Link>
                                <Link href="/">
                                    <Image src="/twitter.svg" alt="socils" width={20}
                                        height={20} />
                                </Link>
                                <Link href="/">
                                    <Image src="/instagram.svg" alt="socils" width={20}
                                        height={20} />
                                </Link>
                                <Link href="/">
                                    <Image src="/youtube.svg" alt="socils" width={20}
                                        height={20} />
                                </Link>
                                <Link href="/">
                                    <Image src="/wordpress.svg" alt="socils" width={20}
                                        height={20} />
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300" />

                <p className="text-gray-400 text-center">HiLink 2023. &copy; All rights reserved by Robiul Islam Sagar.</p>

            </div>
        </footer>
    )
}

export default Footer