import { ReactNode } from 'react';
import { TripPreview, TripPreviewProps } from '../trip-preview/TripPreview';
import './TripPreviewList.css';

interface TripPreviewListProps {
  [key: string]: any;
  trips: TripPreviewProps[];
}

export const TripPreviewList = (props: TripPreviewListProps) => {
  const { trips, ...otherProps } = { ...props };

  const renderTripPreviews = (tripPreviewProps: TripPreviewProps[]): ReactNode[] => {
    const tripPreviewElements: ReactNode[] = [];

    tripPreviewProps.forEach(tripPreviewProp => {
      tripPreviewElements.push(
        <TripPreview
          contacts={tripPreviewProp.contacts}
          location={tripPreviewProp.location}
          time={tripPreviewProp.time}
          title={tripPreviewProp.title}
        />
      );
    });

    return  tripPreviewElements;
  }

  return (
    <div {...otherProps} className={`rclib-trip-preview-list ${otherProps.className ? otherProps.className : ''}`}>
      { renderTripPreviews(trips) }
    </div>
  );
}
