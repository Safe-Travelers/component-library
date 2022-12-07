import { ReactNode } from 'react';
import { TripPreview, TripPreviewProps } from '../trip-preview/TripPreview';
import './TripPreviewList.css';

export interface TripPreviewListProps {
  [key: string]: any;
  onDelete?: (tripID: string) => any;
  trips: TripPreviewProps[];
}

export const TripPreviewList = (props: TripPreviewListProps) => {
  const { onDelete, trips, ...otherProps } = { ...props };

  if (trips.length === 0) {
    return null;
  }

  const handleDelete = (tripID: string) => {
    if (onDelete) onDelete(tripID);
  }

  const renderTripPreviews = (tripPreviewProps: TripPreviewProps[]): ReactNode[] | ReactNode => {
    const tripPreviewElements: ReactNode[] = [];

    tripPreviewProps.forEach(tripPreviewProp => {
      tripPreviewElements.push(
        <TripPreview
          contacts={tripPreviewProp.contacts}
          key={tripPreviewProp.tripID}
          location={tripPreviewProp.location}
          onDelete={onDelete ? handleDelete : undefined}
          time={tripPreviewProp.time}
          title={tripPreviewProp.title}
          tripID={tripPreviewProp.tripID}
        />
      );
    });

    return tripPreviewElements;
  }

  return (
    <div {...otherProps} className={`rclib-trip-preview-list ${otherProps.className ? otherProps.className : ''}`}>
      { renderTripPreviews(trips) }
    </div>
  );
}
