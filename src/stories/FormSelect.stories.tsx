import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelect } from '../component/form/form-select/FormSelect';

export default {
    title: 'Display/FormSelect',
    component: FormSelect,

} as ComponentMeta<typeof FormSelect>;

const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'TestID',
    initialValue: 'value',
    labelText: 'Select Label',
    name: 'Select'
};
