import { ReactNode } from "react";
import {
  ReviewPreview,
  ReviewPreviewProps,
} from "../review-preview/ReviewPreview";
import "./ReviewPreviewList.css";

export interface ReviewPreviewListProps {
  [key: string]: any;
  reviews: ReviewPreviewProps[];
  onUserVote?: (reviewId: string, profileId: string, vote: number) => void;
}

export const ReviewPreviewList = (props: ReviewPreviewListProps) => {
  const { reviews, onUserVote, ...otherProps } = { ...props };

  if (reviews.length === 0) {
    return null;
  }

  const renderReviewPreviews = (
    reviewPreviewProps: ReviewPreviewProps[]
  ): ReactNode[] | ReactNode => {
    const reviewPreviewElements: ReactNode[] = [];

    reviewPreviewProps.forEach((reviewPreviewProp) => {
      reviewPreviewElements.push(
        <ReviewPreview
          date={reviewPreviewProp.date}
          title={reviewPreviewProp.title}
          location={reviewPreviewProp.location}
          time={reviewPreviewProp.time}
          rating={reviewPreviewProp.rating}
          body={reviewPreviewProp.body}
          upvotes={reviewPreviewProp.upvotes}
          downvotes={reviewPreviewProp.downvotes}
          profileId={reviewPreviewProp.profileId}
          reviewId={reviewPreviewProp.reviewId}
          reviewVote={reviewPreviewProp.reviewVote}
          onUserVote={onUserVote}
          key={reviewPreviewProp.reviewId}
        />
      );
    });

    return reviewPreviewElements;
  };

  return (
    <div
      {...otherProps}
      className={`rclib-review-preview-list ${
        otherProps.className ? otherProps.className : ""
      }`}
    >
      {renderReviewPreviews(reviews)}
    </div>
  );
};
