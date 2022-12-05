import {ChangeEvent, FormEvent, ReactNode, useState} from 'react';
import '../FormCommon.css';
//import './FormNumber.css';

export interface FormNumberProps {
    id: string;
    initialValue?: string;
    labelText?: string;
    name: string;
    onChange: (value: string) => any;
}

export const FormNumber = ({id, initialValue, labelText, name, onChange}: FormNumberProps) => {
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    }

    return (
        <label htmlFor={id}>
            { labelText }
            <input
                className='rclib-form-element'
                id={id}
                name={name}
                onChange={handleChange}
                type='number'
                value={value}
            />
        </label>
    );
}

