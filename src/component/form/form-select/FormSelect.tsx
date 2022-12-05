import {ChangeEvent, FormEvent, ReactNode, useState} from 'react';
import '../FormCommon.css';
//import './FormSelect.css';

export interface FormSelectProps {
    id: string;
    initialValue?: string;
    labelText?: string;
    name: string;
    onChange: (value: string) => any;
    children?: ReactNode;
}

export const FormSelect = ({id, initialValue, labelText, name, onChange, children}: FormSelectProps) => {
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    }

    return (
        <label htmlFor={id}>
            { labelText }
            <select
                className='rclib-form-element'
                id={id}
                name={name}
                //onChange={handleChange}
                value={value}
            >
                { children }
            </select>
        </label>
    );
}

