import { ChipList } from "@jam-dev/starlight-react";
import { useState } from "react";
import { FormSelect, FormSelectOption } from "../form-select/FormSelect";
import './FormSelectChips.css';

export interface FormSelectChipsProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (values: string[]) => any;
  options?: FormSelectOption[];
  placeholder?: string;
}

export const FormSelectChips = ({id, initialValue, label, onChange, options, placeholder}: FormSelectChipsProps) => {
  const [chipValues, setChipValues] = useState<string[]>([]);

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

  const getSelectOptions = (options: FormSelectOption[] | undefined, chipValues: string[]): FormSelectOption[] => {
    if (!options) return [];

    const selectOptions = options.filter(e => {
      return !chipValues.includes(e.name);
    });

    return sortOptions(selectOptions);
  }

  const handleChangeOption = (value: string) => {
    const deletedOption = options?.find(e => e.value === value);
    if (!deletedOption) return;

    const newChipValues = sortChips([...chipValues, deletedOption.name])
    setChipValues(newChipValues);

    console.log(newChipValues);

    if (onChange) onChange(newChipValues);
  }

  const handleDeleteChip = (value: string) => {
    const addedOption = options?.find(e => e.name === value);
    const deletedChip = chipValues.find(e => e === value);
    if (!addedOption || !deletedChip) return;

    const newChipValues = chipValues.filter(e => e !== value);
    setChipValues(newChipValues);

    console.log(newChipValues);

    if (onChange) onChange(newChipValues);
  }

  return(
    <div className='rclib-form-select-chips'>
      <FormSelect
        id={id}
        initialValue={initialValue}
        label={label}
        onChange={handleChangeOption}
        options={getSelectOptions(options, chipValues)}
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
