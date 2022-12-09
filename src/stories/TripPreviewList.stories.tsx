import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripPreviewList } from '../component/trip-preview-list/TripPreviewList';

export default {
  title: 'Display/TripPreviewList',
  component: TripPreviewList,

} as ComponentMeta<typeof TripPreviewList>;

const Template: ComponentStory<typeof TripPreviewList> = (args) => <TripPreviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: undefined,
};

export const Deletable = Template.bind({});
Deletable.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: (tripID: string) => {console.log(`onDelete(${tripID})`)}
};

export const Clickable = Template.bind({});
Clickable.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: undefined,
};
