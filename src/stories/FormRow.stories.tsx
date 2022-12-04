import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormRow } from '../component/form/form-row/FormRow';

export default {
    title: 'Display/FormRow',
    component: FormRow,

} as ComponentMeta<typeof FormRow>;

const Template: ComponentStory<typeof FormRow> = (args) => <FormRow {...args} />;

export const Default = Template.bind({});
Default.args = {

};
