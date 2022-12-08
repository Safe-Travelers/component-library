import { Icon } from "@jam-dev/starlight-react";
import closeIcon from "../../asset/icon/close.svg";
import reviewIcon from "../../asset/icon/message.svg";
import { StarRating } from "../star-rating/StarRating";
import "./ReviewPreviewDelete.css";

export interface ReviewPreviewDeleteProps {
  date: string;
  title: string;
  location: string;
  time: string;
  rating: number;
  body: string;
  profileId: string;
  reviewId: string;
  onDelete?: () => any;
  onModify?: () => any;
}

export const ReviewPreviewDelete = (props: ReviewPreviewDeleteProps) => {
  const {
    date,
    title,
    location,
    time,
    rating,
    body,
    profileId,
    reviewId,
    onDelete,
    onModify
  } = { ...props };

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
          <h2 onClick={onModify}>{title}</h2>
          <StarRating
            display={true}
            rating={rating}
            numStars={5}
            precision={-1}
          />
        </div>
        <div className="rclib-review-preview-header">
        <p>
          {location} on {date} at {time}
        </p>
        
        </div>
        
        
        <div className="rclib-review-preview-body">
          <p>{body}</p>
        </div>
        
       
        <div className="rclib-review-preview-delete">
        {
        onDelete ?
        <Icon
          alt='Delete'
          className='rclib-review-preview-delete-icon'
          onClick={onDelete}
          src={closeIcon}
        /> :
        null
        }
        </div>
        
      </div>
    </div>
  );
};
