import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const FeedbackCard = () => {
    return (
        <>
            <div className="FeedbackCard_main">
                <h2>Customer Speak</h2>
                <h2>Who help us fly higher and bring out the best in us !</h2>
                <div className="feedback_div">
                    <div className="Feedback_icon">
                        <p>I love the filter feature, you can filter for short or long term housing, by bedrooms and bathrooms. Great that it shows an accurate price range for the amount of bedrooms you want.</p>
                        <PersonOutlineIcon sx={{ fontSize: 150 }} className="personOutlineIcon_icon" />
                    </div>
                    <div className="Feedback_icon">
                        <p>I love the filter feature, you can filter for short or long term housing, by bedrooms and bathrooms. Great that it shows an accurate price range for the amount of bedrooms you want.</p>
                        <PersonOutlineIcon sx={{ fontSize: 150 }} className="personOutlineIcon_icon" />
                    </div>
                    <div className="Feedback_icon">
                        <p>I love the filter feature, you can filter for short or long term housing, by bedrooms and bathrooms. Great that it shows an accurate price range for the amount of bedrooms you want.</p>
                        <PersonOutlineIcon sx={{ fontSize: 150 }} className="personOutlineIcon_icon" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default FeedbackCard;