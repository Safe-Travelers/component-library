import { Button, ChipList, Icon } from '@jam-dev/starlight-react';
import accountIcon from '../../asset/icon/account.svg';
import calendarIcon from '../../asset/icon/calendar.svg';
import mapMarkerIcon from '../../asset/icon/map-marker.svg';
import pencilIcon from '../../asset/icon/pencil.svg';
import './TripView.css';

export interface TripViewProps {
  [key: string]: any;
  contacts: string[];
  dateTime: string;
  locationName: string;
  onEdit: (tripID: string) => any;
  tripID: string;
  tripName: string;
}

export const TripView = (props: TripViewProps) => {
  const {contacts, dateTime, locationName, onEdit, tripID, tripName, ...otherProps} = {...props};

  const handleEdit = () => {
    if (onEdit) onEdit(tripID);
  }

  return (
    <div {...otherProps} className='rclib-trip-view'>
      <div className='rclib-trip-view-content'>
        <h3>{tripName}</h3>
        <div className='rclib-trip-view-row'>
          <Icon alt='Edit' src={mapMarkerIcon} />
          <p>{locationName}</p>
        </div>
        <div className='rclib-trip-view-row'>
          <Icon alt='Edit' src={calendarIcon} />
          <p>{dateTime}</p>
        </div>
        <div className='rclib-trip-view-row'>
          <Icon alt='Edit' src={accountIcon} />
          <ChipList values={contacts} />
        </div>
      </div>
      <Button
        className='rclib-trip-view-edit'
        onClick={handleEdit}
      >
        <Icon alt='Edit' src={pencilIcon} width='24px' />
      </Button>
    </div>
  );
}
