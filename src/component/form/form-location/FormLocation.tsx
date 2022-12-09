//import {ChangeEvent, useRef, useState} from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import "./FormLocation.css";

export interface FormLocationProps {
    //id: string;
    //apiKey: string;
    //initialValue?: string;
    labelText?: string;
    //name: string;
    onChange: (value: string) => any;
    //placeholder?: string;
}

export const FormLocation = ({
                                 //id,
                                 //apiKey,
                                 labelText,
                                 //name,
                                 onChange,
                                 //placeholder
            }: FormLocationProps) => {

    //Note: Code taken and modified from public usePlacesAutocomplete docs
    //Link found here: https://www.npmjs.com/package/use-places-autocomplete
    const { value, suggestions: { status, data }, setValue, clearSuggestions }  = usePlacesAutocomplete();


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
                 <div className="autocomplete-suggestion">
                     <li className="listing-format" key={place_id} onClick={handleSelect(suggestion)}>
                         <strong>{main_text}</strong> <small>{secondary_text}</small>
                     </li>
                 </div>
             );
         });

        return (
            <div>
                <label>{labelText}</label>
                <input className="location-input" value={value} onChange={handleInput} />
                {status === 'OK' && <ul>{renderSuggestions()}</ul>}
            </div>
        );

}

