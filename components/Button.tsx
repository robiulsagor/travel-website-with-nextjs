import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit";
    icon?: string;
    title: string;
    variant: string;
    full?: boolean
}

const Button = ({ type, icon, title, variant, full }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flex items-center justify-center  gap-3 ${variant} ${full && 'w-full'}  px-8 py-4 rounded-full  transition-all duration-200 text-base font-bold `}
        >
            {icon && <Image src={icon} alt="user logo" width={20} height={10} className="h-auto w-auto" />}
            {title}
        </button>
    )
}

export default Button