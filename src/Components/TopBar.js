import React from "react";
import './TopBar.css';

function TopBar() {
    return (
        <div className="TopBarWrapper">
            <div className="Name">JIN SEOB KIM</div>
            <ul className="links">
                <li className="Summary">SUMMARY</li>
                <li className="Project">PROJECT</li>
                <li className="Award">AWARD</li>
                <li className="Stacks">STACKS</li>
                <li className="Education">EDUCATION</li>
                <li className="Contact">CONTACT</li>
            </ul>
        </div>
    );
}

export default TopBar;