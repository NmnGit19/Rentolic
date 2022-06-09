import React from "react";
import Card from "./Card";

const Applications = () => {
    return (
        <>
            <h2 className="selection_headings">Applications</h2>
            <div className="carddata_main">
                <Card imgsrc="https://c4.wallpaperflare.com/wallpaper/29/381/284/motorbike-derbi-gpr-sports-wallpaper-preview.jpg" className="data_img" btnname="In Bike" />
                <Card imgsrc="https://www.drivespark.com/car-image/640x480x100/car/x7674741-hyundai_creta.jpg.pagespeed.ic.kHZ_Hiz6K2.jpg" className="data_img" btnname="In Furnitures" />
                <Card imgsrc="https://img.freepik.com/free-vector/household-appliances-group-household-appliances-white-background_39422-20.jpg?w=2000" className="data_img" btnname="In Appliciance" />
                <Card imgsrc="https://c4.wallpaperflare.com/wallpaper/146/888/965/headphones-nature-music-animals-puppies-white-background-1920x1200-entertainment-music-hd-art-wallpaper-preview.jpg" className="data_img" btnname="In Entertainment" />
            </div>
        </>
    );
};
export default Applications;