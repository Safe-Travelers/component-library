var b=Object.defineProperty;var a=(r,m)=>b(r,"name",{value:m,configurable:!0});import{w as _}from"./starlight-react.8a2ffeee.js";import{r as V,a as O,j as d}from"./jsx-runtime.931debec.js";import{F as N}from"./FormSelect.ace5c9df.js";import"./iframe.b8e5eea6.js";/* empty css                   */const c=a(({id:r,initialValue:m,label:f,onChange:p,options:o,placeholder:C})=>{const[s,h]=V.exports.useState([]),S=a(e=>{const n=[...e];return n.sort((l,t)=>l.name.localeCompare(t.name)),n},"sortOptions"),y=a(e=>{const n=[...e];return n.sort((l,t)=>l.localeCompare(t)),n},"sortChips"),v=a((e,n)=>{if(!e)return[];const l=e.filter(t=>!n.includes(t.name));return S(l)},"getSelectOptions"),F=a(e=>{const n=o==null?void 0:o.find(t=>t.value===e);if(!n)return;const l=y([...s,n.name]);h(l),p&&p(l)},"handleChangeOption"),g=a(e=>{const n=o==null?void 0:o.find(i=>i.name===e),l=s.find(i=>i===e);if(!n||!l)return;const t=s.filter(i=>i!==e);h(t),p&&p(t)},"handleDeleteChip");return O("div",{className:"rclib-form-select-chips",children:[d(N,{id:r,initialValue:m,label:f,onChange:F,options:v(o,s),placeholder:C}),s.length>0?d(_,{onDelete:g,values:s}):null]})},"FormSelectChips");try{c.displayName="FormSelectChips",c.__docgenInfo={description:"",displayName:"FormSelectChips",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values: string[]) => any)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"FormSelectOption[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-select-chips/FormSelectChips.tsx#FormSelectChips"]={docgenInfo:c.__docgenInfo,name:"FormSelectChips",path:"src/component/form/form-select-chips/FormSelectChips.tsx#FormSelectChips"})}catch{}const A={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelectChips } from '../component/form/form-select-chips/FormSelectChips';

export default {
    title: 'Form/FormSelectChips',
    component: FormSelectChips,

} as ComponentMeta<typeof FormSelectChips>;

const Template: ComponentStory<typeof FormSelectChips> = (args) => <FormSelectChips {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'id',
  label: 'Select-Chips label',
  placeholder: 'Placeholder option',
};

export const Values = Template.bind({});
Values.args = {
  id: 'id',
  label: 'Select-Chips label',
  options: [
    {
      name: 'Name 1',
      value: 'value-1',
    },
    {
      name: 'Name 2',
      value: 'value-2',
    },
    {
      name: 'Name 3',
      value: 'value-3',
    },
    {
      name: 'Name 4',
      value: 'value-4',
    },
    {
      name: 'Name 5',
      value: 'value-5',
    },
  ],
  placeholder: 'Placeholder option',
};
`,locationsMap:{default:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}},placeholder:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}},values:{startLoc:{col:57,line:11},endLoc:{col:96,line:11},startBody:{col:57,line:11},endBody:{col:96,line:11}}}}},title:"Form/FormSelectChips",component:c},u=a(r=>d(c,{...r}),"Template"),x=u.bind({});x.args={id:"id"};const T=u.bind({});T.args={id:"id",label:"Select-Chips label",placeholder:"Placeholder option"};const B=u.bind({});B.args={id:"id",label:"Select-Chips label",options:[{name:"Name 1",value:"value-1"},{name:"Name 2",value:"value-2"},{name:"Name 3",value:"value-3"},{name:"Name 4",value:"value-4"},{name:"Name 5",value:"value-5"}],placeholder:"Placeholder option"};const R=["Default","Placeholder","Values"];export{x as Default,T as Placeholder,B as Values,R as __namedExportsOrder,A as default};
//# sourceMappingURL=FormSelectChips.stories.4ff1550d.js.map
