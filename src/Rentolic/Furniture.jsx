import React from "react";
import Card from "./Card";

const Furniture = () => {
    return (
        <>
            <h2 className="selection_headings">Furnitures</h2>
            <div className="carddata_main">
                <Card imgsrc="https://previews.123rf.com/images/bluehand/bluehand1401/bluehand140100004/27583029-theater-seat-isolated-on-white-background-movie-seat.jpg" className="data_img" btnname="In Chairs" />
                <Card imgsrc="https://cdn.w600.comps.canstockphoto.com/wooden-table-pictures_csp21168884.jpg" className="data_img" btnname="In Tables" />
                <Card imgsrc="https://swall.teahub.io/photos/small/345-3453199_china-super-deluxe-3-door-steel-almirah-design.jpg" className="data_img" btnname="In Almirah" />
                <Card imgsrc="https://media.istockphoto.com/photos/brown-wooden-bed-isolated-on-white-background-picture-id91714601?k=20&m=91714601&s=612x612&w=0&h=trlsnG7abqVTGA7f2yhX0D9GsUeA5apOttScgGL1SWY=" className="data_img" btnname="In Bed" />
            </div>
        </>
    );
};
export default Furniture;