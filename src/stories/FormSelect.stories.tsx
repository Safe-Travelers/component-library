import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelect } from '../component/form/form-select/FormSelect';

export default {
    title: 'Form/FormSelect',
    component: FormSelect,

} as ComponentMeta<typeof FormSelect>;

const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Select label',
  placeholder: 'Placeholder option',
};

export const Values = Template.bind({});
Values.args = {
  label: 'Select label',
  placeholder: 'Placeholder option',
  options: [
    {
      name: 'Option 1',
      value: 'option-1',
    },
    {
      name: 'Option 2',
      value: 'option-2',
    },
    {
      name: 'Option 3',
      value: 'option-4',
    },
    {
      name: 'Option 4',
      value: 'option-4',
    },
    {
      name: 'Option 5',
      value: 'option-5',
    },
  ],
};
