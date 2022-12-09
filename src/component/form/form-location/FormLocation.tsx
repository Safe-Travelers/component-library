//import {ChangeEvent, useRef, useState} from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

export interface FormLocationProps {
    //id: string;
    //apiKey: string;
    initialValue?: string;
    labelText?: string;
    //name: string;
    onChange: (value: string) => any;
    //placeholder?: string;
}

export const FormLocation = ({
                                 //id,
                                 //apiKey,
                                 initialValue,
                                 labelText,
                                 //name,
                                 onChange,
                                 //placeholder
            }: FormLocationProps) => {

    //Note: Code taken and modified from public usePlacesAutocomplete docs
    //Link found here: https://www.npmjs.com/package/use-places-autocomplete
    const { value, suggestions: { status, data }, setValue, clearSuggestions }  = usePlacesAutocomplete();

    if (initialValue) {
        setValue(initialValue);
    }

    const handleInput = (e: any) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    const handleSelect = ({ description }: {description: string}) => () => {
        setValue(description, false);
        onChange(description);
        clearSuggestions();
    };

    const renderSuggestions = () =>
         data.map((suggestion: any) => {
             const {
                 place_id,
                 structured_formatting: { main_text, secondary_text },
             } = suggestion;
            console.log(suggestion);
             return (
                 <li key={place_id} onClick={handleSelect(suggestion)}>
                     <strong>{main_text}</strong> <small>{secondary_text}</small>
                 </li>
             );
         });

        return (
            <div>
                <label>{labelText}</label>
                <input value={value} onChange={handleInput} />
                {status === 'OK' && <ul>{renderSuggestions()}</ul>}
            </div>
        );

}

