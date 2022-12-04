import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSubmit } from '../component/form/form-submit/FormSubmit';

export default {
    title: 'Display/FormSubmit',
    component: FormSubmit,

} as ComponentMeta<typeof FormSubmit>;

const Template: ComponentStory<typeof FormSubmit> = (args) => <FormSubmit {...args} />;

export const Default = Template.bind({});
Default.args = {

};
