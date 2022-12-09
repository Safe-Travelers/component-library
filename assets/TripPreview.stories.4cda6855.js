var c=Object.defineProperty;var o=(t,i)=>c(t,"name",{value:i,configurable:!0});import{T as e}from"./TripPreview.c24c3249.js";import{j as a}from"./jsx-runtime.931debec.js";import"./starlight-react.8a2ffeee.js";import"./close.0730ccba.js";import"./map-marker.6f1363ce.js";import"./iframe.b8e5eea6.js";const T={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TripPreview } from '../component/trip-preview/TripPreview';

export default {
  title: 'Display/TripPreview',
  component: TripPreview,

} as ComponentMeta<typeof TripPreview>;

const Template: ComponentStory<typeof TripPreview> = (args) => <TripPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  onClick: undefined,
  onDelete: undefined,
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};

export const Deletable = Template.bind({});
Deletable.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  onClick: undefined,
  onDelete: (tripID: string) => {console.log(\`onDelete(\${tripID})\`)},
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};

export const Clickable = Template.bind({});
Clickable.args = {
  contacts: ['contact 1', 'contact 2', 'contact 3'],
  location: 'Location name',
  onClick: () => {},
  onDelete: undefined,
  time: 'From abc to xyz',
  title: 'Visit friend in NY',
  tripID: '1',
};
`,locationsMap:{default:{startLoc:{col:53,line:11},endLoc:{col:88,line:11},startBody:{col:53,line:11},endBody:{col:88,line:11}},deletable:{startLoc:{col:53,line:11},endLoc:{col:88,line:11},startBody:{col:53,line:11},endBody:{col:88,line:11}},clickable:{startLoc:{col:53,line:11},endLoc:{col:88,line:11},startBody:{col:53,line:11},endBody:{col:88,line:11}}}}},title:"Display/TripPreview",component:e},n=o(t=>a(e,{...t}),"Template"),l=n.bind({});l.args={contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:void 0,onDelete:void 0,time:"From abc to xyz",title:"Visit friend in NY",tripID:"1"};const r=n.bind({});r.args={contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:void 0,onDelete:t=>{console.log(`onDelete(${t})`)},time:"From abc to xyz",title:"Visit friend in NY",tripID:"1"};const s=n.bind({});s.args={contacts:["contact 1","contact 2","contact 3"],location:"Location name",onClick:()=>{},onDelete:void 0,time:"From abc to xyz",title:"Visit friend in NY",tripID:"1"};const v=["Default","Deletable","Clickable"];export{s as Clickable,l as Default,r as Deletable,v as __namedExportsOrder,T as default};
//# sourceMappingURL=TripPreview.stories.4cda6855.js.map
