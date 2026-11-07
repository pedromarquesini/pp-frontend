import { TrashIcon } from "@phosphor-icons/react";

interface DeleteButtonProps {
    disable?: boolean;
    onClick?: () => void;
}

export default function DeleteButton({ onClick , disable = false }: DeleteButtonProps) {
    return (
        <div className="flex items-center justify-center">
            <button
                onClick={onClick}
                className={`${disable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100 cursor-pointer'}`}
                aria-label="Deletar"
                disabled={disable}>            
                <TrashIcon color="red" />
            </button>
        </div>
    );
}