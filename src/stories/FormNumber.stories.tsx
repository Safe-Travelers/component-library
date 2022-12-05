import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormNumber } from '../component/form/form-number/FormNumber';

export default {
    title: 'Display/FormNumber',
    component: FormNumber,

} as ComponentMeta<typeof FormNumber>;

const Template: ComponentStory<typeof FormNumber> = (args) => <FormNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'TestId',
    initialValue: 'Initial Value',
    labelText: 'Label Value',
    name: 'Name',
};
