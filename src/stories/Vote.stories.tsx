import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Vote } from "../component/vote/Vote";

export default {
  title: "Input/Vote",
  component: Vote,
} as ComponentMeta<typeof Vote>;

const Template: ComponentStory<typeof Vote> = (args) => <Vote {...args} />;

export const Default = Template.bind({});
Default.args = {
  reviewVote: 0,
  onVote: (oldVote, voteClick) => {
    console.log(oldVote + " " + voteClick);
  },
};
