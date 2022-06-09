import React from "react";
import Card from "./Card";

const Entertainment = () => {
    return (
        <>
            <h2 className="selection_headings">Entertainment</h2>
            <div className="carddata_main">
                <Card imgsrc="https://previews.123rf.com/images/jossdiim/jossdiim1112/jossdiim111200044/11660757-vector-illustration-of-headphones-on-white-background.jpg" className="data_img" btnname="In Headphones" />
                <Card imgsrc="https://i0.wp.com/dyanora.in/wp-content/uploads/2021/02/front_wallpaper-min-01-2.jpg?resize=600%2C600&ssl=1" className="data_img" btnname="In Smart Tv" />
                <Card imgsrc="https://www.merriam-webster.com/reviews/wp-content/uploads/2021/08/Amazon-Fire-HD-10-Kids-Pro-Tablet.jpg" className="data_img" btnname="In Tablets" />
                <Card imgsrc="https://media.istockphoto.com/photos/blue-screen-on-flat-hd-tv-with-remote-control-picture-id471392499?k=20&m=471392499&s=612x612&w=0&h=MQC903HtptLbWSxyHaU8qtwz57yyuspnEwV-wxZnK9c=" className="data_img" btnname="In TV" />
            </div>
        </>
    );
};
export default Entertainment;