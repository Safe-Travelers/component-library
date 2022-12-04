import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTextArea } from '../component/form/form-text-area/FormTextArea';

export default {
    title: 'Display/FormTextArea',
    component: FormTextArea,

} as ComponentMeta<typeof FormTextArea>;

const Template: ComponentStory<typeof FormTextArea> = (args) => <FormTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {

};
