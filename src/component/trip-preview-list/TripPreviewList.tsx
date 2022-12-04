import { ReactNode } from 'react';
import { TripPreview, TripPreviewProps } from '../trip-preview/TripPreview';
import './TripPreviewList.css';

export interface TripPreviewListProps {
  [key: string]: any;
  trips: TripPreviewProps[];
}

export const TripPreviewList = (props: TripPreviewListProps) => {
  const { trips, ...otherProps } = { ...props };

  if (trips.length === 0) {
    return null;
  }

  const renderTripPreviews = (tripPreviewProps: TripPreviewProps[]): ReactNode[] | ReactNode => {
    const tripPreviewElements: ReactNode[] = [];

    tripPreviewProps.forEach(tripPreviewProp => {
      tripPreviewElements.push(
        <TripPreview
          contacts={tripPreviewProp.contacts}
          key={tripPreviewProp.title}
          location={tripPreviewProp.location}
          time={tripPreviewProp.time}
          title={tripPreviewProp.title}
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
