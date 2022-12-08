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
    const deletedOption = selectOptions.find(e => e.value === value);
    if (!deletedOption) return;

    const newSelectOptions = selectOptions.filter(e => e.value !== value)
    setSelectOptions(newSelectOptions);

    const newChipValues = sortChips([...chipValues, deletedOption.name])
    setChipValues(newChipValues);

    if (onChange) onChange(chipValues);
  }

  const handleDeleteChip = (value: string) => {
    const addedOption = options?.find(e => e.name === value);
    const deletedChip = chipValues.find(e => e === value);
    if (!addedOption || !deletedChip) return;

    const newSelectOptions = sortOptions([...selectOptions, addedOption]);
    setSelectOptions(newSelectOptions);

    const newChipValues = chipValues.filter(e => e !== value);
    setChipValues(newChipValues);

    if (onChange) onChange(chipValues);
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
