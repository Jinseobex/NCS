import React from "react";
import mypic from "../Pic/mypic3.png";

function TopPic() {
    const style = {
        backgroundColor:'black',
        textAlign:'center'
    };
    return (
        <div className="picWrapper" style={style}>
            <div>
        <img src={mypic} className="mypic" alt="mypic" />
            </div>
        </div>
    );
}

export default TopPic;