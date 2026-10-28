import type {Icon, IconWeight} from "@phosphor-icons/react";
import { useState } from "react";

interface InputFieldProps {
    icon?: Icon;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    name?: string;
    required?: boolean;
    iconWeight?: IconWeight;
    className?: string;
}

export function InputField({icon: Icon, type, placeholder, label, value, onChange, name, required=true, iconWeight}: InputFieldProps) {
    
    const [valueInput, setValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (        
        
        <label className="flex h-8 w-full items-center gap-2 border-b border-gray-400 focus-within:border-b-2">
            {Icon && <Icon className="h-4 w-4" weight={iconWeight} color="white" />}
            <input
                type={type}
                placeholder={placeholder}
                value={valueInput}
                onChange={handleChange}
                name={name}
                required={required}
                className="h-full min-w-0 flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none border-b-amber-600 ${className}"                
            />
        </label>
    );
}
