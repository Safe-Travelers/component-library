var r=Object.defineProperty;var e=(o,t)=>r(o,"name",{value:t,configurable:!0});import{V as n}from"./Vote.3479e2b4.js";import{j as l}from"./jsx-runtime.931debec.js";import"./iframe.b8e5eea6.js";const V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

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
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:74,line:10},startBody:{col:46,line:10},endBody:{col:74,line:10}}}}},title:"Input/Vote",component:n},a=e(o=>l(n,{...o}),"Template"),s=a.bind({});s.args={reviewVote:0,onVote:(o,t)=>{console.log(o+" "+t)}};const d=["Default"];export{s as Default,d as __namedExportsOrder,V as default};
//# sourceMappingURL=Vote.stories.22155c31.js.map
