var h=Object.defineProperty;var c=(i,t)=>h(i,"name",{value:t,configurable:!0});import{I as R}from"./starlight-react.8a2ffeee.js";import{r as b,a as e,j as r}from"./jsx-runtime.931debec.js";import{r as _}from"./message.140d9b48.js";import{S as I}from"./StarRating.f20ce1cd.js";import{V as q}from"./Vote.3479e2b4.js";const d=c(i=>{const{date:t,title:m,location:v,time:w,rating:f,body:y,upvotes:V,profileId:u,reviewId:s,reviewVote:g,onUserVote:n}={...i};let[a,p]=b.exports.useState(V);return e("div",{className:"rclib-review-preview",children:[r(R,{alt:"Review icon",className:"rclib-review-preview-icon",src:_,width:"32px"}),e("div",{className:"rclib-review-preview-content",children:[e("div",{className:"rclib-review-preview-header",children:[r("h2",{children:m}),r(I,{display:!0,rating:f,numStars:5,precision:-1})]}),e("p",{children:[v," on ",t," at ",w]}),r("div",{className:"rclib-review-preview-body",children:r("p",{children:y})}),n!=null?e("div",{className:"rclib-review-voting",children:[e("p",{children:[a," people found this helpful"]}),r(q,{onVote:(l,o)=>{l==o?n(s,u,0):n(s,u,o),o==1&&l!=1?p(a+1):l==1&&p(a-1)},reviewVote:g})]}):null]})]})},"ReviewPreview");try{d.displayName="ReviewPreview",d.__docgenInfo={description:"",displayName:"ReviewPreview",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}},upvotes:{defaultValue:null,description:"",name:"upvotes",required:!0,type:{name:"number"}},downvotes:{defaultValue:null,description:"",name:"downvotes",required:!0,type:{name:"number"}},profileId:{defaultValue:null,description:"",name:"profileId",required:!0,type:{name:"string"}},reviewId:{defaultValue:null,description:"",name:"reviewId",required:!0,type:{name:"string"}},reviewVote:{defaultValue:null,description:"",name:"reviewVote",required:!0,type:{name:"number"}},onUserVote:{defaultValue:null,description:"",name:"onUserVote",required:!1,type:{name:"((reviewId: string, profileId: string, vote: number) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/review-preview/ReviewPreview.tsx#ReviewPreview"]={docgenInfo:d.__docgenInfo,name:"ReviewPreview",path:"src/component/review-preview/ReviewPreview.tsx#ReviewPreview"})}catch{}export{d as R};
//# sourceMappingURL=ReviewPreview.f1c82fb0.js.map