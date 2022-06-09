import React from "react";
import Card from "./Card";

const Automobiles = () => {
    return (
        <>
            <h2 className="selection_headings">Automobiles</h2>
            <div className="carddata_main">
                <Card imgsrc="https://c4.wallpaperflare.com/wallpaper/29/381/284/motorbike-derbi-gpr-sports-wallpaper-preview.jpg" className="data_img" btnname="In Bike" />
                <Card imgsrc="https://www.drivespark.com/car-image/640x480x100/car/x7674741-hyundai_creta.jpg.pagespeed.ic.kHZ_Hiz6K2.jpg" className="data_img" btnname="In Cars" />
                <Card imgsrc="https://wallpapercave.com/wp/wp2518418.jpg" className="data_img" btnname="In Scooty" />
                <Card imgsrc="https://media.istockphoto.com/photos/orange-sport-bike-looks-to-the-right-isolated-on-white-background-picture-id860853234?k=20&m=860853234&s=612x612&w=0&h=u9m2A_8pqCqurZQL8Z8UOCIugVWv_-Mm17VZ0JLbsm8=" className="data_img" btnname="In Cycle" />
            </div>
        </>
    );
};
export default Automobiles;