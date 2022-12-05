import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormCheckbox } from '../component/form/form-checkbox/FormCheckbox';

export default {
    title: 'Display/FormCheckbox',
    component: FormCheckbox,

} as ComponentMeta<typeof FormCheckbox>;

const Template: ComponentStory<typeof FormCheckbox> = (args) => <FormCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'TestID',
    initialValue: 'value',
    labelText: 'Checkbox Label',
    name: 'Select'
};
