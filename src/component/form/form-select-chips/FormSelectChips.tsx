import { ChipList } from "@jam-dev/starlight-react";
import { useState } from "react";
import { FormSelect, FormSelectOption } from "../form-select/FormSelect";
import './FormSelectChips.css';

export interface FormSelectChipsProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  options?: FormSelectOption[];
  placeholder?: string;
}

export const FormSelectChips = ({id, initialValue, label, onChange, options, placeholder}: FormSelectChipsProps) => {
  const sortOptions = (options: FormSelectOption[]) => {
    const newOptions = [...options];;
    newOptions.sort((a, b) => a.name.localeCompare(b.name));
    return newOptions;
  }

  const sortChips = (chips: string[]) => {
    const newChips = [...chips];
    newChips.sort((a, b) => a.localeCompare(b));
    return newChips;
  }

  const [selectOptions, setSelectOptions] = useState<FormSelectOption[]>(sortOptions(options || []));
  const [chipValues, setChipValues] = useState<string[]>([]);

  const handleChangeOption = (value: string) => {
    const selectedOption = selectOptions.find(e => e.value === value);
    if (!selectedOption) return;

    setSelectOptions(selectOptions.filter(e => e.value !== value));
    setChipValues(sortChips([...chipValues, selectedOption?.name]));

    if (onChange) onChange(value);
  }

  const handleDeleteChip = (value: string) => {
    setChipValues(chipValues.filter(e => e !== value));

    const newOption = options?.find(e => e.name === value);
    if (!newOption) return;

    const newSelectOptions = sortOptions([...selectOptions, newOption]);
    setSelectOptions(newSelectOptions);
  }

  return(
    <div className='rclib-form-select-chips'>
      <FormSelect
        id={id}
        initialValue={initialValue}
        label={label}
        onChange={handleChangeOption}
        options={selectOptions}
        placeholder={placeholder}
      />
      {
        chipValues.length > 0 ?
        <ChipList
          onDelete={handleDeleteChip}
          values={chipValues}
        /> :
        null
      }
    </div>
  );
}
