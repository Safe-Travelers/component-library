import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripView } from '../component/trip-view/TripView';

export default {
  title: 'Display/TripView',
  component: TripView,

} as ComponentMeta<typeof TripView>;

const Template: ComponentStory<typeof TripView> = (args) => <TripView {...args} />;

export const Default = Template.bind({});
Default.args = {
  contacts: ['First Last 1', 'First Last 2', 'First Last 3'],
  dateTime: 'Date & Time',
  locationName: 'Location name',
  tripName: 'Trip name',
};
