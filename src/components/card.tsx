import type { Icon } from "@phosphor-icons/react";

interface CardProps extends React.HTMLAttributes<HTMLInputElement> {
    title: string;    
    icon?: Icon;
    className?: string;
    colorIcon?: string;
    onClick?: () => void;
    checked?: boolean;
}

export default function Card({title, icon: Icon, className, colorIcon, checked=false, onClick}: CardProps) {
    return (
        <>
            <div className={`flex items-center mb-2 p-2 gap-2 rounded-2xl hover:bg-amber-500 hover:opacity-90 hover:cursor-pointer ${className} `} onClick={onClick}>
               {Icon && <Icon className="h-4 w-4 {}" weight="bold" color={checked ? "orange" : colorIcon || "black"} />}
                <button><p className={`text-lg font-medium ${checked ? 'text-orange-500' : ''}`}>{title}</p></button>
            </div>
        </>
    );
}