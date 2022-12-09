var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{r as d,a as h,j as a}from"./jsx-runtime.931debec.js";/* empty css                   */import"./iframe.b8e5eea6.js";const o=n(({id:e,initialChecked:t,label:m,onCheck:r})=>{const[c,i]=d.exports.useState(!!t);return h("label",{className:"rclib-form-checkbox-label",htmlFor:e,children:[a("input",{checked:c,className:"rclib-form-checkbox",id:e,name:e,onChange:n(()=>{r&&r(!c),i(!c)},"handleChange"),type:"checkbox"}),m]})},"FormCheckbox");try{o.displayName="FormCheckbox",o.__docgenInfo={description:"",displayName:"FormCheckbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},initialChecked:{defaultValue:null,description:"",name:"initialChecked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onCheck:{defaultValue:null,description:"",name:"onCheck",required:!1,type:{name:"((checked: boolean) => any)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-checkbox/FormCheckbox.tsx#FormCheckbox"]={docgenInfo:o.__docgenInfo,name:"FormCheckbox",path:"src/component/form/form-checkbox/FormCheckbox.tsx#FormCheckbox"})}catch{}const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormCheckbox } from '../component/form/form-checkbox/FormCheckbox';

export default {
  title: 'Form/FormCheckbox',
  component: FormCheckbox,

} as ComponentMeta<typeof FormCheckbox>;

const Template: ComponentStory<typeof FormCheckbox> = (args) => <FormCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'TestID',
  initialChecked: false,
  label: 'Checkmark label',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'TestID',
  initialChecked: true,
  label: 'Checkmark label',
};
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:90,line:11},startBody:{col:54,line:11},endBody:{col:90,line:11}},checked:{startLoc:{col:54,line:11},endLoc:{col:90,line:11},startBody:{col:54,line:11},endBody:{col:90,line:11}}}}},title:"Form/FormCheckbox",component:o},l=n(e=>a(o,{...e}),"Template"),k=l.bind({});k.args={id:"TestID",initialChecked:!1,label:"Checkmark label"};const p=l.bind({});p.args={id:"TestID",initialChecked:!0,label:"Checkmark label"};const F=["Default","Checked"];export{p as Checked,k as Default,F as __namedExportsOrder,y as default};
//# sourceMappingURL=FormCheckbox.stories.b5152f09.js.map
