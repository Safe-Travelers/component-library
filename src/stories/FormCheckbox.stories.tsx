import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormCheckbox } from '../component/form/form-checkbox/FormCheckbox';

export default {
  title: 'Form/FormCheckbox',
  component: FormCheckbox,

} as ComponentMeta<typeof FormCheckbox>;

const Template: ComponentStory<typeof FormCheckbox> = (args) => <FormCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'TestID',
  initialChecked: false,
  label: 'Checkmark label',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'TestID',
  initialChecked: true,
  label: 'Checkmark label',
};
