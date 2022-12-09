import { ChipList, Icon } from '@jam-dev/starlight-react';
import closeIcon from '../../asset/icon/close.svg';
import locationIcon from '../../asset/icon/map-marker.svg';
import './TripPreview.css';

export interface TripPreviewProps {
  contacts: string[];
  location: string;
  onClick?: (id: string) => any;
  onDelete?: (id: string) => any;
  time: string;
  title: string;
  tripID: string;
}

export const TripPreview = (props: TripPreviewProps) => {
  const {contacts, location, onClick, onDelete, time, title, tripID} = {...props};

  const handleClick = () => {
    if (onClick) onClick(tripID);
  }

  const handleDelete = () => {
    if (onDelete) onDelete(tripID);
  }

  return (
    <div className='rclib-trip-preview'>
      <Icon alt='Location icon' className='rclib-trip-preview-icon' src={locationIcon} width='32px' />
      <div className='rclib-trip-preview-content'>
        <h2
          className={onClick ? 'rclib-trip-title-clickable' : undefined}
          onClick={onClick ? handleClick : undefined}
        >
          {title}
        </h2>
        <p>{location}</p>
        <p>{time}</p>
        <ChipList values={contacts} />
      </div>
      {
        onDelete ?
        <Icon
          alt='Delete'
          className='rclib-trip-preview-delete'
          onClick={handleDelete}
          src={closeIcon}
        /> :
        null
      }
    </div>
  );
}
