import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormNumber } from '../component/form/form-number/FormNumber';

export default {
    title: 'Form/FormNumber',
    component: FormNumber,

} as ComponentMeta<typeof FormNumber>;

const Template: ComponentStory<typeof FormNumber> = (args) => <FormNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Complete = Template.bind({});
Complete.args = {
  id: 'id',
  label: 'Number label',
  placeholder: 'Placeholder'
};
