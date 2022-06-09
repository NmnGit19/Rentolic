import React from "react";
import Card from "./Card";

const Electronics = () => {
    return (
        <>
            <h2 className="selection_headings">Electronics</h2>
            <div className="carddata_main">
                <Card imgsrc="https://www.maharajawhiteline.com/assests/product-images/enlarge-image/5200000950.jpg" className="data_img" btnname="In Mixer Grinder" />
                <Card imgsrc="https://i.pinimg.com/736x/72/19/31/721931185e3e96d627e13b593dc60199.jpg" className="data_img" btnname="In Iron" />
                <Card imgsrc="https://previews.123rf.com/images/dny3d/dny3d1506/dny3d150600026/40844264-3d-motor-el%C3%A9ctrico-grande-en-el-fondo-blanco.jpg" className="data_img" btnname="In Electric Motor" />
                <Card imgsrc="https://previews.123rf.com/images/tom19275/tom192751611/tom19275161100115/65760755-electric-fan-isolated-on-white-background-3d-rendering.jpg" className="data_img" btnname="In Fans" />
            </div>
        </>
    );
};
export default Electronics;