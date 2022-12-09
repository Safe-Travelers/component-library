var v=Object.defineProperty;var o=(i,n)=>v(i,"name",{value:n,configurable:!0});import{I as a}from"./starlight-react.8a2ffeee.js";import{c as w}from"./close.0730ccba.js";import{r as f}from"./message.140d9b48.js";import{S as y}from"./StarRating.f20ce1cd.js";import{a as r,j as e}from"./jsx-runtime.931debec.js";import"./iframe.b8e5eea6.js";const t=o(i=>{const{date:n,title:d,location:s,time:c,rating:u,body:p,profileId:R,reviewId:b,onDelete:l,onModify:m}={...i};return r("div",{className:"rclib-review-preview",children:[e(a,{alt:"Review icon",className:"rclib-review-preview-icon",src:f,width:"32px"}),r("div",{className:"rclib-review-preview-content",children:[r("div",{className:"rclib-review-preview-header",children:[e("h2",{onClick:m,children:d}),e(y,{display:!0,rating:u,numStars:5,precision:-1})]}),e("div",{className:"rclib-review-preview-header",children:r("p",{children:[s," on ",n," at ",c]})}),e("div",{className:"rclib-review-preview-body",children:e("p",{children:p})}),e("div",{className:"rclib-review-preview-delete",children:l?e(a,{alt:"Delete",className:"rclib-review-preview-delete-icon",onClick:l,src:w}):null})]})]})},"ReviewPreviewDelete");try{t.displayName="ReviewPreviewDelete",t.__docgenInfo={description:"",displayName:"ReviewPreviewDelete",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}},profileId:{defaultValue:null,description:"",name:"profileId",required:!0,type:{name:"string"}},reviewId:{defaultValue:null,description:"",name:"reviewId",required:!0,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => any)"}},onModify:{defaultValue:null,description:"",name:"onModify",required:!1,type:{name:"(() => any)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/review-preview-delete/ReviewPreviewDelete.tsx#ReviewPreviewDelete"]={docgenInfo:t.__docgenInfo,name:"ReviewPreviewDelete",path:"src/component/review-preview-delete/ReviewPreviewDelete.tsx#ReviewPreviewDelete"})}catch{}const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

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
  onDelete: () => {console.log(\`onDelete()\`)}
};
`,locationsMap:{default:{startLoc:{col:61,line:10},endLoc:{col:1,line:12},startBody:{col:61,line:10},endBody:{col:1,line:12}}}}},title:"Display/ReviewPreviewDelete",component:t},D=o(i=>e(t,{...i}),"Template"),g=D.bind({});g.args={date:"MM/DD/YYYY",title:"Review Title",location:"City, State, Country",time:"HH:MM AM/PM",rating:3.5,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",profileId:"p1",reviewId:"r1",onDelete:()=>{console.log("onDelete()")}};const C=["Default"];export{g as Default,C as __namedExportsOrder,x as default};
//# sourceMappingURL=ReviewPreviewDelete.stories.b9576133.js.map
