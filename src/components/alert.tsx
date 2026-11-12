import { useState, useEffect } from "react";
import { CheckCircleIcon, WarningCircleIcon, InfoIcon, XIcon } from "@phosphor-icons/react";

interface AlertMessageProps {
    message: string;
    type?: "success" | "error" | "info";
    duration?: number;
}

export default function AlertMessage({message, duration = 5000, type = "info"}: AlertMessageProps){
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) {
        return null;
    }

    const alertStyles = {
        success: {
            color: "text-green-700",
            bg: "bg-green-100",
            icon: CheckCircleIcon
        },
        error: {
            color: "text-red-700",
            bg: "bg-red-100",
            icon: WarningCircleIcon
        },        
        info: {
            color: "text-blue-700",
            bg: "bg-blue-100",
            icon: InfoIcon
        }
    };

    const style = alertStyles[type];
    const Icon = style.icon;

    return (
        <div className={`flex items-center gap-3 p-3 rounded-lg ${style.bg} ${style.color}`}>
            <Icon size={22} weight="fill" />

            <p className="flex-1 text-sm font-medium">
                {message}
            </p>

            <button onClick={() => setVisible(false)}>
                <XIcon size={18} />
            </button>
        </div>
    );

}