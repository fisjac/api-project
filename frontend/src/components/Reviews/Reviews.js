import { CreateModalButton } from "../../context/Modal";
import SpotReviews from "../SingleSpot/SpotReviews";
import ReviewForm from "./ReviewForm";


import './reviews.css'

const LeaveAReviewButton = ({user, spot}) => (
  user && user?.id !== spot.ownerId &&
  <CreateModalButton
    header='Leave a review'
    label='Leave a Review'
    >
    <ReviewForm/>
  </CreateModalButton>
);

export default function Reviews({user, spot}) {
  return (
    <div className="padded top-padded">
      <div id='reviews-header'>
        <div>
          <div className='stars flex justify-center'>
            <label><i className="fa-solid fa-star"></i></label>
            <span>
              {spot.avgStarRating ? spot.avgStarRating.toPrecision(3) : 'No Ratings'}
            </span>
            <span id='dot'>·</span>
            <div>{`${spot.numReviews} Reviews`}</div>
          </div>
        </div>
        <LeaveAReviewButton id='leave-review-button' spot={spot} user={user}/>
      </div>
      <div>
        <SpotReviews spotId={spot.id} user={user}/>
      </div>
    </div>)
};
