import { ChecksIcon,MinusIcon } from "@phosphor-icons/react";

interface EntranceMailProps {
    className?: string;
    sendBy?: string;
    emailSentBy: string;
    title: string;
    viewed: boolean;   
    onClick?: () => void; 
}

export default function EntranceMail({ className, sendBy, emailSentBy, title, viewed, onClick }: EntranceMailProps) {
    return (
        <div className={"flex flex-col max-w-lvw h-20 border rounded-2xl mb-1 border-gray-300 hover:bg-orange-100 hover:cursor-pointer " + className} onClick={onClick}>
            <div className="flex flex-row gap-1 p-2 items-center">
                <p className="text-md font-semibold text-gray-950">{sendBy} </p>
                <p className="text-sm text-gray-500">{emailSentBy}</p>
            </div>
            <div className="flex gap-2 p-2">
                
                    <p className="truncate">{title}</p>
                
                    <div className="ml-auto mr-2">
                        {viewed ? <ChecksIcon color="orange" /> : <MinusIcon />}
                    </div>
                
            </div>
            
        </div>
    );
}