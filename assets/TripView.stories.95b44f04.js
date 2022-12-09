var u=Object.defineProperty;var n=(t,o)=>u(t,"name",{value:o,configurable:!0});import{I as a,w as T,D as w}from"./starlight-react.8a2ffeee.js";import{a as f}from"./account.d0aa43b5.js";import{m as y}from"./map-marker.6f1363ce.js";import{a as i,j as e}from"./jsx-runtime.931debec.js";import"./iframe.b8e5eea6.js";const V="/component-library/assets/calendar.9ae1f6c5.svg",v="/component-library/assets/pencil.973061af.svg";const r=n(t=>{const{contacts:o,dateTime:s,locationName:p,onEdit:c,tripID:l,tripName:d,...m}={...t};return i("div",{...m,className:"rclib-trip-view",children:[i("div",{className:"rclib-trip-view-content",children:[e("h3",{children:d}),i("div",{className:"rclib-trip-view-row",children:[e(a,{alt:"Edit",src:y}),e("p",{children:p})]}),i("div",{className:"rclib-trip-view-row",children:[e(a,{alt:"Edit",src:V}),e("p",{children:s})]}),i("div",{className:"rclib-trip-view-row",children:[e(a,{alt:"Edit",src:f}),e(T,{values:o})]})]}),e(w,{className:"rclib-trip-view-edit",onClick:n(()=>{c&&c(l)},"handleEdit"),children:e(a,{alt:"Edit",src:v,width:"24px"})})]})},"TripView");try{r.displayName="TripView",r.__docgenInfo={description:"",displayName:"TripView",props:{contacts:{defaultValue:null,description:"",name:"contacts",required:!0,type:{name:"string[]"}},dateTime:{defaultValue:null,description:"",name:"dateTime",required:!0,type:{name:"string"}},locationName:{defaultValue:null,description:"",name:"locationName",required:!0,type:{name:"string"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"(tripID: string) => any"}},tripID:{defaultValue:null,description:"",name:"tripID",required:!0,type:{name:"string"}},tripName:{defaultValue:null,description:"",name:"tripName",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/trip-view/TripView.tsx#TripView"]={docgenInfo:r.__docgenInfo,name:"TripView",path:"src/component/trip-view/TripView.tsx#TripView"})}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripView } from '../component/trip-view/TripView';

export default {
  title: 'Display/TripView',
  component: TripView,

} as ComponentMeta<typeof TripView>;

const Template: ComponentStory<typeof TripView> = (args) => <TripView {...args} />;

export const Default = Template.bind({});
Default.args = {
  contacts: ['First Last 1', 'First Last 2', 'First Last 3'],
  dateTime: 'Date & Time',
  locationName: 'Location name',
  onEdit: undefined,
  tripID: 'c1',
  tripName: 'Trip name',
};
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:82,line:11},startBody:{col:50,line:11},endBody:{col:82,line:11}}}}},title:"Display/TripView",component:r},N=n(t=>e(r,{...t}),"Template"),_=N.bind({});_.args={contacts:["First Last 1","First Last 2","First Last 3"],dateTime:"Date & Time",locationName:"Location name",onEdit:void 0,tripID:"c1",tripName:"Trip name"};const x=["Default"];export{_ as Default,x as __namedExportsOrder,S as default};
//# sourceMappingURL=TripView.stories.95b44f04.js.map
