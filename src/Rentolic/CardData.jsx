import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const CardData = () => {
    return (
        <>

            <h2 className="Rental_div">Rental Statistics</h2>
            <div className="data_div">
                <div>
                    <h2>Sessionson site</h2>
                    <h2>435635</h2>
                </div>
                <div>
                    <h2>Products Rented</h2>
                    <h2>4435</h2>
                </div>
                <div>
                    <h2>Rented Days</h2>
                    <h2>985635</h2>
                </div>
            </div>
            <h2 className="Top_picks">Top Rental Picks of the week. What's yours?</h2>
            <div className="carddata_main">
                <Card imgsrc="https://c4.wallpaperflare.com/wallpaper/29/381/284/motorbike-derbi-gpr-sports-wallpaper-preview.jpg" className="data_img" btnname="In Automobiles" />
                <Card imgsrc="https://thumbs.dreamstime.com/b/furniture-white-background-22617447.jpg" className="data_img" btnname="In Furnitures" />
                <Card imgsrc="https://img.freepik.com/free-vector/household-appliances-group-household-appliances-white-background_39422-20.jpg?w=2000" className="data_img" btnname="In Appliciance" />
                <Card imgsrc="https://c4.wallpaperflare.com/wallpaper/146/888/965/headphones-nature-music-animals-puppies-white-background-1920x1200-entertainment-music-hd-art-wallpaper-preview.jpg" className="data_img" btnname="In Entertainment" />
            </div>
            <div className="second_div">
                <h2 className="Rental_div">Rent By Category</h2>
                <Navbar />
            </div>
        </>
    );
};
export default CardData;