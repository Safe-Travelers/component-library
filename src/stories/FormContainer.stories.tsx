import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormContainer } from '../component/form/form-container/FormContainer';
import { FormNumber } from '../component/form/form-number/FormNumber';
import { FormRow } from '../component/form/form-row/FormRow';
import FormSubmit from '../component/form/form-submit/FormSubmit';

export default {
    title: 'Form/FormContainer',
    component: FormContainer,

} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => <FormContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <FormRow>
      <FormNumber label='Number' placeholder='123' />
      <FormNumber label='Number 2' placeholder='456' />
    </FormRow>,
    <FormRow>
      <FormNumber label='Number 3' placeholder='123' />
      <FormNumber label='Number 4' placeholder='456' />
    </FormRow>,
    <FormRow>
      <FormSubmit />
    </FormRow>
  ]
};
