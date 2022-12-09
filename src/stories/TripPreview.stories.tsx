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
  onClick: undefined,
  onDelete: undefined,
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};

export const Deletable = Template.bind({});
Deletable.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  onClick: undefined,
  onDelete: (tripID: string) => {console.log(`onDelete(${tripID})`)},
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};

export const Clickable = Template.bind({});
Clickable.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  onClick: () => {},
  onDelete: undefined,
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};
