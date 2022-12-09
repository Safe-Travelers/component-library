var m=Object.defineProperty;var n=(i,t)=>m(i,"name",{value:t,configurable:!0});import{R as c}from"./ReviewPreview.f1c82fb0.js";import{j as u}from"./jsx-runtime.931debec.js";import"./starlight-react.8a2ffeee.js";import"./message.140d9b48.js";import"./StarRating.f20ce1cd.js";import"./Vote.3479e2b4.js";import"./iframe.b8e5eea6.js";const o=n(i=>{const{reviews:t,onUserVote:a,...r}={...i};if(t.length===0)return null;const s=n(d=>{const l=[];return d.forEach(e=>{l.push(u(c,{date:e.date,title:e.title,location:e.location,time:e.time,rating:e.rating,body:e.body,upvotes:e.upvotes,downvotes:e.downvotes,profileId:e.profileId,reviewId:e.reviewId,reviewVote:e.reviewVote,onUserVote:a},e.reviewId))}),l},"renderReviewPreviews");return u("div",{...r,className:`rclib-review-preview-list ${r.className?r.className:""}`,children:s(t)})},"ReviewPreviewList");try{o.displayName="ReviewPreviewList",o.__docgenInfo={description:"",displayName:"ReviewPreviewList",props:{reviews:{defaultValue:null,description:"",name:"reviews",required:!0,type:{name:"ReviewPreviewProps[]"}},onUserVote:{defaultValue:null,description:"",name:"onUserVote",required:!1,type:{name:"((reviewId: string, profileId: string, vote: number) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/review-preview-list/ReviewPreviewList.tsx#ReviewPreviewList"]={docgenInfo:o.__docgenInfo,name:"ReviewPreviewList",path:"src/component/review-preview-list/ReviewPreviewList.tsx#ReviewPreviewList"})}catch{}const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

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
`,locationsMap:{default:{startLoc:{col:59,line:10},endLoc:{col:1,line:12},startBody:{col:59,line:10},endBody:{col:1,line:12}}}}},title:"Display/ReviewPreviewList",component:o},p=n(i=>u(o,{...i}),"Template"),v=p.bind({});v.args={reviews:[{date:"MM/DD/YYYY",title:"Review 1",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r1",reviewVote:0},{date:"MM/DD/YYYY",title:"Review 2",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r2",reviewVote:0},{date:"MM/DD/YYYY",title:"Review 3",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r3",reviewVote:0},{date:"MM/DD/YYYY",title:"Review 4",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r4",reviewVote:0},{date:"MM/DD/YYYY",title:"Review 5",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvotes:0,downvotes:0,profileId:"p1",reviewId:"r5",reviewVote:0}],onUserVote:(i,t,a)=>{console.log(i+" "+t+" "+a)}};const D=["Default"];export{v as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=ReviewPreviewList.stories.7e4fc677.js.map
