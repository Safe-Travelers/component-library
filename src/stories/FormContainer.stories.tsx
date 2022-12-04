import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormContainer } from '../component/form/form-container/FormContainer';

export default {
    title: 'Display/FormContainer',
    component: FormContainer,

} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => <FormContainer {...args} />;

export const Default = Template.bind({});
Default.args = {

};
