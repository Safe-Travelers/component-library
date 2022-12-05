import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewPreviewList } from "../component/review-preview-list/ReviewPreviewList";

export default {
  title: "Display/ReviewPreviewList",
  component: ReviewPreviewList,
} as ComponentMeta<typeof ReviewPreviewList>;

const Template: ComponentStory<typeof ReviewPreviewList> = (args) => (
  <ReviewPreviewList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  reviews: [
    {
      date: "MM/DD/YYYY",
      title: "Review 1",
      location: "City, State, Country",
      time: "HH:MM AM/PM",
      rating: 3.5,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvotes: 0,
      downvotes: 0,
      profileId: "p1",
      reviewId: "r1",
      reviewVote: 0,
    },
    {
      date: "MM/DD/YYYY",
      title: "Review 2",
      location: "City, State, Country",
      time: "HH:MM AM/PM",
      rating: 3.5,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvotes: 0,
      downvotes: 0,
      profileId: "p1",
      reviewId: "r2",
      reviewVote: 0,
    },
    {
      date: "MM/DD/YYYY",
      title: "Review 3",
      location: "City, State, Country",
      time: "HH:MM AM/PM",
      rating: 3.5,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvotes: 0,
      downvotes: 0,
      profileId: "p1",
      reviewId: "r3",
      reviewVote: 0,
    },
    {
      date: "MM/DD/YYYY",
      title: "Review 4",
      location: "City, State, Country",
      time: "HH:MM AM/PM",
      rating: 3.5,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvotes: 0,
      downvotes: 0,
      profileId: "p1",
      reviewId: "r4",
      reviewVote: 0,
    },
    {
      date: "MM/DD/YYYY",
      title: "Review 5",
      location: "City, State, Country",
      time: "HH:MM AM/PM",
      rating: 3.5,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvotes: 0,
      downvotes: 0,
      profileId: "p1",
      reviewId: "r5",
      reviewVote: 0,
    },
  ],
  onUserVote: (reviewId, profileId, vote) => {
    console.log(reviewId + " " + profileId + " " + vote);
  },
};
