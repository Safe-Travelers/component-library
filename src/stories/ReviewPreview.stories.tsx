import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewPreview } from "../component/review-preview/ReviewPreview";

export default {
  title: "Display/ReviewPreview",
  component: ReviewPreview,
} as ComponentMeta<typeof ReviewPreview>;

const Template: ComponentStory<typeof ReviewPreview> = (args) => (
  <ReviewPreview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: "MM/DD/YYYY",
  title: "Review Title",
  location: "City, State, Country",
  time: "HH:MM AM/PM",
  rating: 3.5,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  upvotes: 0,
  downvotes: 0,
  profileId: "p1",
  reviewId: "r1",
  reviewVote: 0,
  onUserVote: (reviewId, profileId, vote) => {
    console.log(reviewId + " " + profileId + " " + vote);
  },
};
