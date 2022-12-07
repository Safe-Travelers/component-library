import { ComponentMeta, ComponentStory } from "@storybook/react";

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
