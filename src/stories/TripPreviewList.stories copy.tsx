import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TripPreviewList } from "../component/trip-preview-list/TripPreviewList";

export default {
  title: "Display/TripPreviewList",
  component: TripPreviewList,
} as ComponentMeta<typeof TripPreviewList>;

const Template: ComponentStory<typeof TripPreviewList> = (args) => (
  <TripPreviewList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  trips: [
    {
      contacts: ["contact 1", "contact 2", "contact 3"],
      location: "Location name",
      time: "From abc to xyz",
      title: "Title 1",
    },
    {
      contacts: ["contact 1", "contact 2", "contact 3"],
      location: "Location name",
      time: "From abc to xyz",
      title: "Title 2",
    },
    {
      contacts: ["contact 1", "contact 2", "contact 3"],
      location: "Location name",
      time: "From abc to xyz",
      title: "Title 3",
    },
    {
      contacts: ["contact 1", "contact 2", "contact 3"],
      location: "Location name",
      time: "From abc to xyz",
      title: "Title 4",
    },
    {
      contacts: ["contact 1", "contact 2", "contact 3"],
      location: "Location name",
      time: "From abc to xyz",
      title: "Title 5",
    },
  ],
};
