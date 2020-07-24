import React from "react";

const MainPage = ()=>{
    return(
        <div className="main">
            <input
                type="text"
                placeholder="Room id"
                value=""
                className="main__input"

            />
            <input
                type="text"
                placeholder="Enter your name"
                value=""
                className="main__input"

            />
            <button className="main__button btn btn-success">Enter</button>
        </div>
    )

}

export default MainPage;
