import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripPreview } from '../component/trip-preview/TripPreview';

export default {
  title: 'Display/TripPreview',
  component: TripPreview,

} as ComponentMeta<typeof TripPreview>;

const Template: ComponentStory<typeof TripPreview> = (args) => <TripPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
};
