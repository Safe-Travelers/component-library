var p=Object.defineProperty;var a=(e,o)=>p(e,"name",{value:o,configurable:!0});import{r as u,a as f,j as l}from"./jsx-runtime.931debec.js";/* empty css                   */import"./iframe.b8e5eea6.js";const t=a(({id:e,initialValue:o,label:s,onChange:n})=>{const[i,c]=u.exports.useState(o||"");return f("label",{className:"rclib-form-label",htmlFor:e,children:[s,l("input",{className:"rclib-form-input rclib-form-date",id:e,name:e,onChange:a(d=>{const r=d.target.value;n&&n(new Date(r)),c(r)},"handleChange"),type:"datetime-local",value:i})]})},"FormDate");try{t.displayName="FormDate",t.__docgenInfo={description:"",displayName:"FormDate",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => any)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-date/FormDate.tsx#FormDate"]={docgenInfo:t.__docgenInfo,name:"FormDate",path:"src/component/form/form-date/FormDate.tsx#FormDate"})}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormDate } from '../component/form/form-date/FormDate';

export default {
    title: 'Form/FormDate',
    component: FormDate,

} as ComponentMeta<typeof FormDate>;

const Template: ComponentStory<typeof FormDate> = (args) => <FormDate {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Label = Template.bind({});
Label.args = {
  id: 'TestID',
  initialValue: '2022-12-04 00:00:00',
  label: 'Date label',
};
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:82,line:11},startBody:{col:50,line:11},endBody:{col:82,line:11}},label:{startLoc:{col:50,line:11},endLoc:{col:82,line:11},startBody:{col:50,line:11},endBody:{col:82,line:11}}}}},title:"Form/FormDate",component:t},m=a(e=>l(t,{...e}),"Template"),D=m.bind({});D.args={};const b=m.bind({});b.args={id:"TestID",initialValue:"2022-12-04 00:00:00",label:"Date label"};const h=["Default","Label"];export{D as Default,b as Label,h as __namedExportsOrder,S as default};
//# sourceMappingURL=FormDate.stories.d88cd6b0.js.map
