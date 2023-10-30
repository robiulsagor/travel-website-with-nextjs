import Image from "next/image"

const Guide = () => {
    return (
        <section className="relative  flex justify-center items-center flex-col gap-20 px-0 lg:px-10 pb-16 lg:pb-24">

            <div className=" max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 flex items-start flex-col xl:flex-row justify-start xl:items-center gap-4  xl:gap-60">
                <div className="relative flex-1 xl:max-w-[390px] ">
                    <Image src={'/camp.svg'} width={50} height={50} alt="camp"
                        className="absolute left-[-10px] top-[-35px] lg:-top-[45px] w-10 lg:w-[50px] z-0" />
                    <h3 className="uppercase text-green-600 text-xl mb-3 z-30">we are here for you</h3>
                    <h1 className="font-bold text-[40px] lg:text-[64px] lg:leading-[82px]">Guide You to Easy Path</h1>
                </div>
                <div className="flex-1 xl:flex-3x text-gray-600">
                    <p>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
            </div>

            <div className=" relative w-full h-[300px] md:h-[480px] lg:h-[540px]   text-center items-stretch">
                <Image src='/boat.png' alt="Boat img" width={1440} height={580} className="h-full w-full block  text-center mx-auto rounded-3xl " />

                <div className=" bg-slate-100 absolute w-80 top-20 left-20 max-md:left-[50%] max-md:top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%] p-8 rounded-3xl flex flex-wrap gap-3 justify-stretch">
                    <Image src="/meter.svg" alt="meter"
                        width={29}
                        height={300}
                        className="h-[200px]"
                    />
                    <div className="flex flex-col flex-1 gap-16">
                        <div >
                            <div className="flex flex-row justify-between mb-2">
                                <p className="text-gray-400 text-[17px]">Destination</p>
                                <p className="font-bold text-green-700">48 min</p>
                            </div>
                            <p className="font-bold text-[20px] text-left">Aguas Calientes</p>
                        </div>

                        <div >
                            <div className="flex flex-row justify-between mb-2">
                                <p className="text-gray-500">Start Track</p>
                            </div>
                            <p className="font-bold text-[20px] text-left">Wonorejo Pasuruan</p>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Guide