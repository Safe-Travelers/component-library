import {ChangeEvent, FormEvent, ReactNode, useState} from 'react';
import '../FormCommon.css';
import './FormDate.css';

export interface FormDateProps {
    id: string;
    initialValue?: string;
    labelText?: string;
    name: string;
    onChange: (value: string) => any;
}

export const FormDate = ({id, initialValue, labelText, name, onChange}: FormDateProps) => {
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
                className='rclib-form-date'
                id={id}
                name={name}
                onChange={handleChange}
                type='datetime-local'
                value={value}
            />
        </label>
    );
}

