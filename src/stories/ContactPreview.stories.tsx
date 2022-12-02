import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactPreview } from '../component/contact-preview/ContactPreview';

export default {
  title: 'Display/ContactPreview',
  component: ContactPreview,

} as ComponentMeta<typeof ContactPreview>;

const Template: ComponentStory<typeof ContactPreview> = (args) => <ContactPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  contactName: 'First Last',
  hasEmail: true,
  hasPhone: true,
};
