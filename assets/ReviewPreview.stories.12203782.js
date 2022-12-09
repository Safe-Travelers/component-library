var r=Object.defineProperty;var i=(e,t)=>r(e,"name",{value:t,configurable:!0});import{R as o}from"./ReviewPreview.f1c82fb0.js";import{j as a}from"./jsx-runtime.931debec.js";import"./starlight-react.8a2ffeee.js";import"./message.140d9b48.js";import"./StarRating.f20ce1cd.js";import"./Vote.3479e2b4.js";import"./iframe.b8e5eea6.js";const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

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
`,locationsMap:{default:{startLoc:{col:55,line:10},endLoc:{col:1,line:12},startBody:{col:55,line:10},endBody:{col:1,line:12}}}}},title:"Display/ReviewPreview",component:o},l=i(e=>a(o,{...e}),"Template"),s=l.bind({});s.args={date:"MM/DD/YYYY",title:"Review Title",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r1",reviewVote:0,onUserVote:(e,t,n)=>{console.log(e+" "+t+" "+n)}};const M=["Default"];export{s as Default,M as __namedExportsOrder,y as default};
//# sourceMappingURL=ReviewPreview.stories.12203782.js.map
