var u=Object.defineProperty;var t=(i,n)=>u(i,"name",{value:n,configurable:!0});import{I as o,w as f}from"./starlight-react.8a2ffeee.js";import{c as v}from"./close.0730ccba.js";import{m as w}from"./map-marker.6f1363ce.js";import{a as p,j as e}from"./jsx-runtime.931debec.js";const a=t(i=>{const{contacts:n,location:s,onClick:r,onDelete:l,time:d,title:m,tripID:c}={...i};return p("div",{className:"rclib-trip-preview",children:[e(o,{alt:"Location icon",className:"rclib-trip-preview-icon",src:w,width:"32px"}),p("div",{className:"rclib-trip-preview-content",children:[e("h2",{className:r?"rclib-trip-title-clickable":void 0,onClick:r?t(()=>{r&&r(c)},"handleClick"):void 0,children:m}),e("p",{children:s}),e("p",{children:d}),e(f,{values:n})]}),l?e(o,{alt:"Delete",className:"rclib-trip-preview-delete",onClick:t(()=>{l&&l(c)},"handleDelete"),src:v}):null]})},"TripPreview");try{a.displayName="TripPreview",a.__docgenInfo={description:"",displayName:"TripPreview",props:{contacts:{defaultValue:null,description:"",name:"contacts",required:!0,type:{name:"string[]"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((id: string) => any)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((id: string) => any)"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tripID:{defaultValue:null,description:"",name:"tripID",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/trip-preview/TripPreview.tsx#TripPreview"]={docgenInfo:a.__docgenInfo,name:"TripPreview",path:"src/component/trip-preview/TripPreview.tsx#TripPreview"})}catch{}export{a as T};
//# sourceMappingURL=TripPreview.c24c3249.js.map