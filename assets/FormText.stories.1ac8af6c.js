var f=Object.defineProperty;var a=(e,n)=>f(e,"name",{value:n,configurable:!0});import{r as d,a as m,j as l}from"./jsx-runtime.931debec.js";import"./iframe.b8e5eea6.js";const t=d.exports.forwardRef((e,n)=>{const[o,s]=d.exports.useState(e.initialValue||""),r=a(u=>{const i=u.target.value;e.onChange&&e.onChange(i),s(i)},"handleChange");return e.required?m("label",{className:"rclib-form-label",htmlFor:e.id,children:[e.label,l("input",{className:"rclib-form-input",id:e.id,name:e.id,onChange:r,placeholder:e.placeholder,type:"text",value:o,pattern:e.pattern,required:e.required})]}):m("label",{className:"rclib-form-label",htmlFor:e.id,children:[e.label,l("input",{ref:n,className:"rclib-form-input",id:e.id,name:e.id,onChange:r,placeholder:e.placeholder,type:"text",value:o,pattern:e.pattern})]})});try{t.displayName="FormText",t.__docgenInfo={description:"",displayName:"FormText",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => any)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-text/FormText.tsx#FormText"]={docgenInfo:t.__docgenInfo,name:"FormText",path:"src/component/form/form-text/FormText.tsx#FormText"})}catch{}const h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormText } from '../component/form/form-text/FormText';

export default {
    title: 'Form/FormText',
    component: FormText,

} as ComponentMeta<typeof FormText>;

const Template: ComponentStory<typeof FormText> = (args) => <FormText {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Complete = Template.bind({});
Complete.args = {
  id: 'id',
  label: 'Text label',
  placeholder: 'Placeholder'
};
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:82,line:11},startBody:{col:50,line:11},endBody:{col:82,line:11}},complete:{startLoc:{col:50,line:11},endLoc:{col:82,line:11},startBody:{col:50,line:11},endBody:{col:82,line:11}}}}},title:"Form/FormText",component:t},c=a(e=>l(t,{...e}),"Template"),p=c.bind({});p.args={};const x=c.bind({});x.args={id:"id",label:"Text label",placeholder:"Placeholder"};const b=["Default","Complete"];export{x as Complete,p as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=FormText.stories.1ac8af6c.js.map
