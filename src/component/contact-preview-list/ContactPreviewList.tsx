import { ReactNode } from "react";
import {
  ContactPreview,
  ContactPreviewProps,
} from "../contact-preview/ContactPreview";
import "./ContactPreviewList.css";

export interface ContactPreviewListProps {
  [key: string]: any;
  contacts: ContactPreviewProps[];
}

export const ContactPreviewList = (props: ContactPreviewListProps) => {
  const { contacts, ...otherProps } = { ...props };

  if (contacts.length === 0) {
    return null;
  }

  const renderContactPreviews = (
    contactPreviewProps: ContactPreviewProps[]
  ): ReactNode[] | ReactNode => {
    const contactPreviewElements: ReactNode[] = [];

    contactPreviewProps.forEach((contactPreviewProp) => {
      contactPreviewElements.push(
        <ContactPreview
          contactName={contactPreviewProp.contactName}
          hasEmail={contactPreviewProp.hasEmail}
          hasPhone={contactPreviewProp.hasPhone}
        />
      );
    });

    return contactPreviewElements;
  };

  return (
    <div
      {...otherProps}
      className={`rclib-contact-preview-list ${
        otherProps.className ? otherProps.className : ""
      }`}
    >
      {renderContactPreviews(contacts)}
    </div>
  );
};
