var c=Object.defineProperty;var e=(r,t)=>c(r,"name",{value:t,configurable:!0});/* empty css                   */import{j as o,a as i}from"./jsx-runtime.931debec.js";import{F as m}from"./FormNumber.c4ce5b33.js";import{F as a}from"./FormRow.37cc0cff.js";import{F as d}from"./FormSubmit.6adb0e35.js";import"./iframe.b8e5eea6.js";const n=e(({children:r,onSubmit:t})=>o("form",{className:"rclib-form-container",onSubmit:e(l=>{l.preventDefault(),t()},"handleSubmit"),children:r}),"FormContainer");try{n.displayName="FormContainer",n.__docgenInfo={description:"",displayName:"FormContainer",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"() => any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/form/form-container/FormContainer.tsx#FormContainer"]={docgenInfo:n.__docgenInfo,name:"FormContainer",path:"src/component/form/form-container/FormContainer.tsx#FormContainer"})}catch{}const _={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormContainer } from '../component/form/form-container/FormContainer';
import { FormNumber } from '../component/form/form-number/FormNumber';
import { FormRow } from '../component/form/form-row/FormRow';
import FormSubmit from '../component/form/form-submit/FormSubmit';

export default {
    title: 'Form/FormContainer',
    component: FormContainer,

} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => <FormContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <FormRow>
      <FormNumber id='id1' label='Number' placeholder='123' />
      <FormNumber id='id2' label='Number 2' placeholder='456' />
    </FormRow>,
    <FormRow>
      <FormNumber id='id3' label='Number 3' placeholder='123' />
      <FormNumber id='id4' label='Number 4' placeholder='456' />
    </FormRow>,
    <FormRow>
      <FormSubmit />
    </FormRow>
  ]
};
`,locationsMap:{default:{startLoc:{col:55,line:14},endLoc:{col:92,line:14},startBody:{col:55,line:14},endBody:{col:92,line:14}}}}},title:"Form/FormContainer",component:n},p=e(r=>o(n,{...r}),"Template"),s=p.bind({});s.args={children:[i(a,{children:[o(m,{id:"id1",label:"Number",placeholder:"123"}),o(m,{id:"id2",label:"Number 2",placeholder:"456"})]}),i(a,{children:[o(m,{id:"id3",label:"Number 3",placeholder:"123"}),o(m,{id:"id4",label:"Number 4",placeholder:"456"})]}),o(a,{children:o(d,{})})]};const y=["Default"];export{s as Default,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=FormContainer.stories.dc28aad5.js.map
