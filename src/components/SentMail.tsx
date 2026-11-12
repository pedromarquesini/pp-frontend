import { ChecksIcon,MinusIcon } from "@phosphor-icons/react";
import DeleteButton from "./DeleteButton";

interface SentMailProps {
    className?: string;
    emailSentTo: string;
    title: string;
    viewed: boolean;   
    onClick?: () => void; 
    onDelete?: () => void;
    deleting?: boolean;
}

export default function SentMail({ className, emailSentTo, title, viewed, onClick, onDelete, deleting = false }: SentMailProps) {
    return (
        <div className={"flex max-w-lvw h-20 border rounded-2xl mb-1 border-gray-200 hover:bg-orange-100 hover:cursor-pointer " + className}>
           <div className="flex flex-col p-2 gap-1 truncate w-92/100" onClick={onClick}>
                <div className="flex">
                    <p className="text-md font-semibold text-gray-950">{emailSentTo} </p>
                </div>
                <div className="flex flex-row truncate" >                                  
                    <p className="truncate">{title}</p>                                    
                </div>
            </div>
            <div className="ml-auto p-1 flex flex-row gap-3 justify-center items-center border-l border-gray-200 w-8/100">
                            {viewed ? <ChecksIcon color="orange" /> : <MinusIcon />}
                            {!viewed ? <DeleteButton onClick={onDelete} disable={deleting} /> : <DeleteButton disable={true} />}
            </div>          
        </div>
    );  
}