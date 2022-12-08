import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelectChips } from '../component/form/form-select-chips/FormSelectChips';

export default {
    title: 'Form/FormSelectChips',
    component: FormSelectChips,

} as ComponentMeta<typeof FormSelectChips>;

const Template: ComponentStory<typeof FormSelectChips> = (args) => <FormSelectChips {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'id',
  label: 'Select-Chips label',
  placeholder: 'Placeholder option',
};

export const Values = Template.bind({});
Values.args = {
  id: 'id',
  label: 'Select-Chips label',
  options: [
    {
      name: 'Name 1',
      value: 'value-1',
    },
    {
      name: 'Name 2',
      value: 'value-2',
    },
    {
      name: 'Name 3',
      value: 'value-3',
    },
    {
      name: 'Name 4',
      value: 'value-4',
    },
    {
      name: 'Name 5',
      value: 'value-5',
    },
  ],
  placeholder: 'Placeholder option',
};
