var D=Object.defineProperty;var c=(t,o)=>D(t,"name",{value:o,configurable:!0});import{T as L}from"./TripPreview.c24c3249.js";import{j as l}from"./jsx-runtime.931debec.js";import"./starlight-react.8a2ffeee.js";import"./close.0730ccba.js";import"./map-marker.6f1363ce.js";import"./iframe.b8e5eea6.js";const e=c(t=>{const{onDelete:o,trips:s,...i}={...t};if(s.length===0)return null;const p=c(a=>{o&&o(a)},"handleDelete"),T=c(a=>{const m=[];return a.forEach(n=>{m.push(l(L,{contacts:n.contacts,location:n.location,onClick:n.onClick,onDelete:o?p:void 0,time:n.time,title:n.title,tripID:n.tripID},n.tripID))}),m},"renderTripPreviews");return l("div",{...i,className:`rclib-trip-preview-list ${i.className?i.className:""}`,children:T(s)})},"TripPreviewList");try{e.displayName="TripPreviewList",e.__docgenInfo={description:"",displayName:"TripPreviewList",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((tripID: string) => any)"}},trips:{defaultValue:null,description:"",name:"trips",required:!0,type:{name:"TripPreviewProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/trip-preview-list/TripPreviewList.tsx#TripPreviewList"]={docgenInfo:e.__docgenInfo,name:"TripPreviewList",path:"src/component/trip-preview-list/TripPreviewList.tsx#TripPreviewList"})}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripPreviewList } from '../component/trip-preview-list/TripPreviewList';

export default {
  title: 'Display/TripPreviewList',
  component: TripPreviewList,

} as ComponentMeta<typeof TripPreviewList>;

const Template: ComponentStory<typeof TripPreviewList> = (args) => <TripPreviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: undefined,
};

export const Deletable = Template.bind({});
Deletable.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: (tripID: string) => {console.log(\`onDelete(\${tripID})\`)}
};

export const Clickable = Template.bind({});
Clickable.args = {
  trips: [
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 1',
      tripID: '1',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 2',
      tripID: '2',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 3',
      tripID: '3',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 4',
      tripID: '4',
    },
    {
      contacts: ['contact 1', 'contact 2', 'contact 3'],
      location: 'Location name',
      onClick: () => {},
      time: 'From abc to xyz',
      title: 'Title 5',
      tripID: '5',
    },
  ],
  onDelete: undefined,
};
`,locationsMap:{default:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}},deletable:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}},clickable:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}}}}},title:"Display/TripPreviewList",component:e},r=c(t=>l(e,{...t}),"Template"),y=r.bind({});y.args={trips:[{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 1",tripID:"1"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 2",tripID:"2"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 3",tripID:"3"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 4",tripID:"4"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 5",tripID:"5"}],onDelete:void 0};const d=r.bind({});d.args={trips:[{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 1",tripID:"1"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 2",tripID:"2"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 3",tripID:"3"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 4",tripID:"4"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",time:"From abc to xyz",title:"Title 5",tripID:"5"}],onDelete:t=>{console.log(`onDelete(${t})`)}};const b=r.bind({});b.args={trips:[{contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},time:"From abc to xyz",title:"Title 1",tripID:"1"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},time:"From abc to xyz",title:"Title 2",tripID:"2"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},time:"From abc to xyz",title:"Title 3",tripID:"3"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},time:"From abc to xyz",title:"Title 4",tripID:"4"},{contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},time:"From abc to xyz",title:"Title 5",tripID:"5"}],onDelete:void 0};const w=["Default","Deletable","Clickable"];export{b as Clickable,y as Default,d as Deletable,w as __namedExportsOrder,C as default};
//# sourceMappingURL=TripPreviewList.stories.ae45ba10.js.map
