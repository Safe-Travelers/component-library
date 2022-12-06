import { ChipList, Icon } from "@jam-dev/starlight-react";
import { useState } from "react";
import closeIcon from "../../asset/icon/close.svg";
import reviewIcon from "../../asset/icon/message.svg";
import StarRating from "../star-rating/StarRating";
import Vote from "../vote/Vote";
import "./ReviewPreview.css";

export interface ReviewPreviewProps {
  date: string;
  title: string;
  location: string;
  time: string;
  rating: number;
  body: string;
  upvotes: number;
  downvotes: number;
  profileId: string;
  reviewId: string;
  reviewVote: number;
  onUserVote?: (reviewId: string, profileId: string, vote: number) => void;
}

export const ReviewPreview = (props: ReviewPreviewProps) => {
  const {
    date,
    title,
    location,
    time,
    rating,
    body,
    upvotes,
    profileId,
    reviewId,
    reviewVote,
    onUserVote,
  } = { ...props };

  let [helpful, setHelpful] = useState(upvotes);

  return (
    <div className="rclib-review-preview">
      <Icon
        alt="Review icon"
        className="rclib-review-preview-icon"
        src={reviewIcon}
        width="32px"
      />
      <div className="rclib-review-preview-content">
        <div className="rclib-review-preview-header">
          <h2>{title}</h2>
          <StarRating
            display={true}
            rating={rating}
            numStars={5}
            precision={-1}
          />
        </div>
        <p>
          {location} on {date} at {time}
        </p>

        <div className="rclib-review-preview-body">
          <p>{body}</p>
        </div>

        {onUserVote != undefined ? (
          <div className="rclib-review-voting">
            <p>{helpful} people found this helpful</p>
            <Vote
              onVote={(oldVote, voteClick) => {
                if (oldVote == voteClick) {
                  onUserVote(reviewId, profileId, 0);
                } else {
                  onUserVote(reviewId, profileId, voteClick);
                }
                if (voteClick == 1 && oldVote != 1) {
                  setHelpful(helpful + 1);
                } else if (oldVote == 1) {
                  setHelpful(helpful - 1);
                }
              }}
              reviewVote={reviewVote}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
