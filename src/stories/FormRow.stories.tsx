import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormNumber } from '../component/form/form-number/FormNumber';

import { FormRow } from '../component/form/form-row/FormRow';

export default {
    title: 'Form/FormRow',
    component: FormRow,

} as ComponentMeta<typeof FormRow>;

const Template: ComponentStory<typeof FormRow> = (args) => <FormRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <FormNumber label='Number' placeholder='123' />,
    <FormNumber label='Number 2' placeholder='456' />,
  ]
};
