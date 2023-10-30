import Image from "next/image"

const Camp = () => {
    return (
        <section className=" relative flex flex-col py-10 pb-20 lg:py-20 xl:pb-24 ">

            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <div className="h-full w-full min-w-[1100px] bg-bg-img-1 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl flex flex-col justify-between p-8">
                    <div className="flex justify-start items-center gap-4">
                        <Image
                            src='/folded-map.svg'
                            alt="map"
                            width={20}
                            height={20}
                            className="bg-green-600 w-16 p-5 rounded-full"
                        />
                        <div className="text-white">
                            <h2 className="text-[18px] font-bold">
                                Putuk Truno Camp
                            </h2>
                            <p className="text-gray-200 mt-1">Prigen, Pasuruan</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex ml-4">
                            {Array(4).fill(1).map((_, index) => (
                                <img src={`person-${index + 1}.png`} alt=""
                                    className="-ml-4 w-10" />
                            ))}
                        </div>
                        <p className="text-white font-bold">50+ Joined</p>
                    </div>
                </div>

                <div className="h-full w-full min-w-[1100px] bg-bg-img-1 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl flex flex-col justify-between p-8">
                    <div className="flex justify-start items-center gap-4">
                        <Image
                            src='/folded-map.svg'
                            alt="map"
                            width={20}
                            height={20}
                            className="bg-green-600 w-16 p-5 rounded-full"
                        />
                        <div className="text-white">
                            <h2 className="text-[18px] font-bold">
                                Putuk Truno Camp
                            </h2>
                            <p className="text-gray-200 mt-1">Prigen, Pasuruan</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex ml-4">
                            {Array(4).fill(1).map((_, index) => (
                                <img src={`person-${index + 1}.png`} alt=""
                                    className="-ml-4 w-10" />
                            ))}
                        </div>
                        <p className="text-white font-bold">50+ Joined</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-10 px-8 lg:-mt-60">
                <div className="bg-green-600 lg:max-w-[500px] xl:max-w-[700px] p-8 rounded-2xl xl:rounded-3xl text-white">
                    <h2 className=" text-2xl md:text-3xl xl:text-6xl">
                        <strong>Feeling Lost </strong>
                        And Not Knowing The Way?
                    </h2>
                    <p className="mt-6 text-justify">
                        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Camp