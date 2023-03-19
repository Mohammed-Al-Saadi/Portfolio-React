import React, { useEffect, useState } from "react";
import './Darkmood.css';


export default function Darkmode() {
    const [theme, setTheme] = useState(false);

    const handleClick = () => {
        setTheme(!theme)
    }
    useEffect(() => {
        if (theme === true) {
            document.body.classList.add("dark");

        } else {
            document.body.classList.remove("dark");
        }
    })




    return (
        <div className="theme">

            <input onClick={handleClick} type="checkbox" id="switch" /><label className="toggle" for="switch"></label>

        </div>
    );


};
