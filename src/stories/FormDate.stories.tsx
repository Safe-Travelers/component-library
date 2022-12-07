import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormDate } from '../component/form/form-date/FormDate';

export default {
    title: 'Form/FormDate',
    component: FormDate,

} as ComponentMeta<typeof FormDate>;

const Template: ComponentStory<typeof FormDate> = (args) => <FormDate {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Label = Template.bind({});
Label.args = {
  id: 'TestID',
  initialValue: '2022-12-04 00:00:00',
  label: 'Date label',
};
