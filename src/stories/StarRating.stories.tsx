import { ComponentMeta, ComponentStory } from "@storybook/react";

import StarRating from "../component/star-rating/StarRating";

export default {
  title: "Input/StarRating",
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
);

export const Default = Template.bind({});
Default.args = {
  display: false,
  rating: 0,
  numStars: 5,
  precision: 0.5,
};
