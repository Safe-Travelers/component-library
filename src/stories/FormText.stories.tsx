import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormText } from '../component/form/form-text/FormText';

export default {
    title: 'Display/FormText',
    component: FormText,

} as ComponentMeta<typeof FormText>;

const Template: ComponentStory<typeof FormText> = (args) => <FormText {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'TestId',
    initialValue: 'Initial Value',
    labelText: 'Label Value',
    name: 'Name',
    placeholder: 'Placeholder'
};
