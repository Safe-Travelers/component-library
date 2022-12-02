import { ChipList, Icon } from '@jam-dev/starlight-react';
import closeIcon from '../../asset/icon/close.svg';
import locationIcon from '../../asset/icon/map-marker.svg';
import './TripPreview.css';

interface TripPreviewProps {
  contacts: string[];
  location: string;
  time: string;
  title: string;
}

export const TripPreview = (props: TripPreviewProps) => {
  const {contacts, location, time, title} = {...props};

  return (
    <div className='rclib-trip-preview'>
      <Icon alt='Location icon' className='rclib-trip-preview-icon' src={locationIcon} width='32px' />
      <div className='rclib-trip-preview-content'>
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{time}</p>
        <ChipList values={contacts} />
      </div>
      <Icon alt='Delete' src={closeIcon} />
    </div>
  );
}
