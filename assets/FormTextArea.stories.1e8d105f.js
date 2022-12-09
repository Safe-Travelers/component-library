var u=Object.defineProperty;var a=(e,r)=>u(e,"name",{value:r,configurable:!0});import{r as f,a as x,j as l}from"./jsx-runtime.931debec.js";import"./iframe.b8e5eea6.js";const t=a(({id:e,initialValue:r,label:s,onChange:o,placeholder:c})=>{const[i,p]=f.exports.useState(r||"");return x("label",{className:"rclib-form-label",htmlFor:e,children:[s,l("textarea",{className:"rclib-form-input rclib-form-text-area",id:e,name:e,onChange:a(d=>{const n=d.target.value;o&&o(n),p(n)},"handleChange"),placeholder:c,value:i})]})},"FormTextArea");try{t.displayName="FormTextArea",t.__docgenInfo={description:"",displayName:"FormTextArea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => any)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-text-area/FormTextArea.tsx#FormTextArea"]={docgenInfo:t.__docgenInfo,name:"FormTextArea",path:"src/component/form/form-text-area/FormTextArea.tsx#FormTextArea"})}catch{}const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTextArea } from '../component/form/form-text-area/FormTextArea';

export default {
    title: 'Form/FormTextArea',
    component: FormTextArea,

} as ComponentMeta<typeof FormTextArea>;

const Template: ComponentStory<typeof FormTextArea> = (args) => <FormTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Complete = Template.bind({});
Complete.args = {
  id: 'id',
  label: 'Text area label',
  placeholder: 'Placeholder',
};
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:90,line:11},startBody:{col:54,line:11},endBody:{col:90,line:11}},complete:{startLoc:{col:54,line:11},endLoc:{col:90,line:11},startBody:{col:54,line:11},endBody:{col:90,line:11}}}}},title:"Form/FormTextArea",component:t},m=a(e=>l(t,{...e}),"Template"),T=m.bind({});T.args={};const A=m.bind({});A.args={id:"id",label:"Text area label",placeholder:"Placeholder"};const h=["Default","Complete"];export{A as Complete,T as Default,h as __namedExportsOrder,b as default};
//# sourceMappingURL=FormTextArea.stories.1e8d105f.js.map
