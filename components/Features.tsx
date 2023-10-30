import Image from "next/image"

const Features = () => {
    return (
        <section className=" bg-feature-bg bg-center bg-cover bg-no-repeat lg:py-28">
            <div className="flex flex-row gap-0 px-6 lg:px-20">
                {/* Left */}
                <div className="hidden lg:block lg:min-h-[800px]     relative lg:w-[40%] ">
                    <Image src="/phone.png" alt="phone image" width={300} height={100} className="absolute right-20 top-28    rotate-[15deg] lg:w-[400px] xl:w-[460px] 2xl:w-[480px]  max-w-[500px]" />
                </div>

                {/* Right */}
                <div className="relative   lg:w-[60%]">
                    <Image src="/camp.svg" width={50} height={50} alt="camp"
                        className="absolute left-[-10px] top-[-35px] lg:-top-[45px] w-10 lg:w-[50px] z-0" />
                    <h1 className="font-bold text-[40px] lg:text-[64px] lg:leading-[82px] mb-14">Our Features</h1>

                    <div className="grid gap-16  md:grid-cols-2 md:gap-y-20">

                        <div className="flex flex-col gap-4">
                            <Image src="/map.svg" alt="calendar" width={50} height={50} className="bg-green-600 p-3 rounded-full lg:w-20 lg:p-6" />
                            <h4 className="text-[20px] lg:text-[35px] font-bold">Real Maps Can Be Offline</h4>
                            <p className="text-gray-500 lg:text-[18px]">We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Image src="/calendar.svg" alt="calendar" width={50} height={50} className="bg-green-600 p-3 rounded-full lg:w-20 lg:p-6" />
                            <h4 className="text-[20px]  lg:text-[35px]  font-bold ">
                                Set An Adventure Schedule
                            </h4>
                            <p className="text-gray-500 lg:text-[18px]">
                                Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Image src="/tech.svg" alt="calendar" width={50} height={50} className="bg-green-600 p-3 rounded-full lg:w-20 lg:p-6" />
                            <h4 className="text-[20px]  lg:text-[35px]  font-bold">
                                Technology Using Augment Reality
                            </h4>
                            <p className="text-gray-500 lg:text-[18px]">
                                Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Image src="/location.svg" alt="calendar" width={50} height={50} className="bg-green-600 p-3 rounded-full lg:w-20 lg:p-6" />
                            <h4 className="text-[20px]  lg:text-[35px]  font-bold ">
                                Many New Locations Every Month
                            </h4>
                            <p className="text-gray-500 lg:text-[18px]">
                                Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features