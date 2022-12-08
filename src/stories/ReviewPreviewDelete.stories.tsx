import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewPreviewDelete } from "../component/review-preview-delete/ReviewPreviewDelete";

export default {
  title: "Display/ReviewPreviewDelete",
  component: ReviewPreviewDelete,
} as ComponentMeta<typeof ReviewPreviewDelete>;

const Template: ComponentStory<typeof ReviewPreviewDelete> = (args) => (
  <ReviewPreviewDelete {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: "MM/DD/YYYY",
  title: "Review Title",
  location: "City, State, Country",
  time: "HH:MM AM/PM",
  rating: 3.5,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  profileId: "p1",
  reviewId: "r1",
  onDelete: (reviewId: string) => {console.log(`onDelete(${reviewId})`)}
};
