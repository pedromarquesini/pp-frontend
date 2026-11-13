import { useFormStatus } from "react-dom";
import { CircleNotchIcon } from "@phosphor-icons/react";

interface SubmitButtonProps {
    label: string;
    labelLoading: string;
}


export default function SubmitButton({ label, labelLoading }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <CircleNotchIcon size={20} className="animate-spin" />
                    {labelLoading}
                </>
            ) : (
                label
            )}
        </button>
    );
}