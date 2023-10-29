import Image from "next/image"
import Button from "./Button"

const Hero = () => {
    return (
        <section className="relative max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 flex flex-col xl:flex-row pt-8 gap-20 xl:gap-28 py-10 lg:py-20">
            <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-36 xl:-top-60" />

            {/* Left side*/}
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image src={'/camp.svg'} width={50} height={50} alt="camp"
                    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] z-0" />

                <h1 className="text-[52px] leading-[60px]  font-bold z-10 lg:text-[88px] lg:font-[700] lg:leading-[120%]">Putuk Truno Camp Area</h1>
                <p className="text-slate-600 mt-6 max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

                <div className="flex my-11 gap-5">
                    <div className="flex gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src='/star.svg'
                                alt="Stat"
                                width={20}
                                height={20}
                                key={index}
                            />
                        ))}
                    </div>

                    <p className="lg:text-[20px] font-bold">198k
                        <span className="font-normal ml-2">Excellent Reviews  </span>
                    </p>
                </div>

                <div className="flex flex-col gap-2  sm:flex-row">
                    <Button
                        type="button"
                        title="Download Now"
                        variant="bg-green-500 text-white"
                    />
                    <Button
                        type="button"
                        title="How we work"
                        variant="bg-green-500 bg-white"
                        icon="play.svg"
                    />
                </div>
            </div>

            {/* Right side */}
            <div className="z-30  flex flex-1 items-start">
                <div className="w-[268px] bg-[#292c27] text-gray-100 px-7 py-8 rounded-3xl flex flex-col gap-8">
                    <div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Location</p>
                            <Image
                                src='/close.svg'
                                alt="close btn" width={20} height={20}
                            />
                        </div>
                        <p className="text-[20px] font-bold">Aguas Calientes</p>
                    </div>

                    <div className=" flex flow-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-gray-400">Distance</p>
                            <p className="text-[20px] font-bold" >173 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-400">Elevation</p>
                            <p className="text-[20px] font-bold" >2.052 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero