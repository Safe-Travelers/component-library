import { Icon } from '@jam-dev/starlight-react';
import accountIcon from '../../asset/icon/account.svg';
import './ContactPreview.css';

export interface ContactPreviewProps {
  contactName: string;
  hasEmail?: boolean;
  hasPhone?: boolean;
}

export const ContactPreview = (props: ContactPreviewProps) => {
  const {contactName, hasEmail, hasPhone, ...otherProps} = {...props};

  const getAvailableContactMethods = (props: ContactPreviewProps): string => {
    const methods = [];
    if (props.hasEmail) {
      methods.push('Email');
    }
    if (props.hasPhone) {
      methods.push('Phone');
    }

    if (methods.length === 0) {
      return ''
    }

    return methods.join(', ');
  }

  return (
    <div {...otherProps} className='rclib-contact-preview'>
      <Icon alt='Contact icon' src={accountIcon} />
      <div className='rclib-contact-preview-content'>
        <h3>{contactName}</h3>
        <p>{getAvailableContactMethods(props)}</p>
      </div>
    </div>
  );
}
