import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit";
    icon?: string;
    title: string;
    variant: string
}

const Button = ({ type, icon, title, variant }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flex  gap-2 ${variant} text-white px-4 py-3 rounded-full hover:opacity-60 transition-all duration-200`}
        >
            {icon && <Image src={icon} alt="user logo" width={20} height={10} className="h-auto w-auto" />}
            {title}
        </button>
    )
}

export default Button