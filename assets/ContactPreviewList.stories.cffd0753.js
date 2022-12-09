var l=Object.defineProperty;var a=(t,n)=>l(t,"name",{value:n,configurable:!0});import{C as p}from"./ContactPreview.85beae54.js";import{j as r}from"./jsx-runtime.931debec.js";import"./starlight-react.8a2ffeee.js";import"./account.d0aa43b5.js";import"./iframe.b8e5eea6.js";const e=a(t=>{const{contacts:n,...o}={...t};if(n.length===0)return null;const i=a(m=>{const s=[];return m.forEach(c=>{s.push(r(p,{contactName:c.contactName,hasEmail:c.hasEmail,hasPhone:c.hasPhone}))}),s},"renderContactPreviews");return r("div",{...o,className:`rclib-contact-preview-list ${o.className?o.className:""}`,children:i(n)})},"ContactPreviewList");try{e.displayName="ContactPreviewList",e.__docgenInfo={description:"",displayName:"ContactPreviewList",props:{contacts:{defaultValue:null,description:"",name:"contacts",required:!0,type:{name:"ContactPreviewProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/contact-preview-list/ContactPreviewList.tsx#ContactPreviewList"]={docgenInfo:e.__docgenInfo,name:"ContactPreviewList",path:"src/component/contact-preview-list/ContactPreviewList.tsx#ContactPreviewList"})}catch{}const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ContactPreviewList } from "../component/contact-preview-list/ContactPreviewList";

export default {
  title: "Display/ContactPreviewList",
  component: ContactPreviewList,
} as ComponentMeta<typeof ContactPreviewList>;

const Template: ComponentStory<typeof ContactPreviewList> = (args) => (
  <ContactPreviewList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  contacts: [
    {
      contactName: "Contact 1",
      hasEmail: true,
      hasPhone: true,
    },
    {
      contactName: "Contact 2",
      hasEmail: true,
      hasPhone: true,
    },
    {
      contactName: "Contact 3",
      hasEmail: true,
      hasPhone: true,
    },
    {
      contactName: "Contact 4",
      hasEmail: true,
      hasPhone: true,
    },
    {
      contactName: "Contact 5",
      hasEmail: true,
      hasPhone: true,
    },
  ],
};
`,locationsMap:{default:{startLoc:{col:60,line:10},endLoc:{col:1,line:12},startBody:{col:60,line:10},endBody:{col:1,line:12}}}}},title:"Display/ContactPreviewList",component:e},h=a(t=>r(e,{...t}),"Template"),u=h.bind({});u.args={contacts:[{contactName:"Contact 1",hasEmail:!0,hasPhone:!0},{contactName:"Contact 2",hasEmail:!0,hasPhone:!0},{contactName:"Contact 3",hasEmail:!0,hasPhone:!0},{contactName:"Contact 4",hasEmail:!0,hasPhone:!0},{contactName:"Contact 5",hasEmail:!0,hasPhone:!0}]};const E=["Default"];export{u as Default,E as __namedExportsOrder,L as default};
//# sourceMappingURL=ContactPreviewList.stories.cffd0753.js.map
