import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormText } from '../component/form/form-text/FormText';

export default {
    title: 'Form/FormText',
    component: FormText,

} as ComponentMeta<typeof FormText>;

const Template: ComponentStory<typeof FormText> = (args) => <FormText {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Complete = Template.bind({});
Complete.args = {
  id: 'id',
  label: 'Text label',
  placeholder: 'Placeholder'
};
