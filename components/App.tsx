import Image from "next/image"
import Button from "./Button"

const App = () => {
    return (
        <section className="  mx-auto my-10 ">
            <div className="flex flex-col sm:flex-row items-center  justify-between p-6 text-white gap-20 sm:gap-10 bg-pattern bg-cover bg-[#292c27] lg:max-h-[94vh] overflow-hidden xl:px-20">

                <div className="flex flex-col  gap-5 flex-1 w-full ">

                    <h1 className="text-[42px] lg:text-[65px] max-w-[320px] font-bold">Get for free now!</h1>
                    <p>Available on iOS and Android</p>
                    <div className="flex flex-col gap-3 xl:flex-row">
                        <Button type="button"
                            title="App Store"
                            variant="bg-white text-green-600"
                            icon="/apple.svg"
                        />
                        <Button type="button"
                            title="Play Store"
                            variant="text-white border border-gray-400"
                            icon="/android.svg"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <Image src="/phones.png" alt="phones"
                        width={300} height={100}
                        className="w-full max-w-[500px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default App