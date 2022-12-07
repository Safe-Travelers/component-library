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
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ],
};
