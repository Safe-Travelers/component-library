import {ChangeEvent, FormEvent, ReactNode, useState} from 'react';
import '../FormCommon.css';
//import './FormCheckbox.css';

export interface FormCheckboxProps {
    id: string;
    initialValue?: string;
    labelText?: string;
    name: string;
}

export const FormCheckbox = ({id, initialValue, labelText, name}: FormCheckboxProps) => {
    const [value, setValue] = useState(initialValue || '');

    return (
        <label htmlFor={id}>
            <input
                className='rclib-form-checkbox'
                type='checkbox'
                id={id}
                name={name}
                value={value}
            />
            { labelText }
        </label>
    );
}

