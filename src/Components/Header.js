import React from 'react';
import "./Header.css";
import winsvg from "../svg/winner1.svg";
import dotsvg from "../svg/Icon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <div>
        <div className="container Header_container">
            <div className="row Header_row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="Header__firstcol">
                    <div className="Header__mainheading">Nima CC</div>
                    <div className="Header__heading_1">Elections <span className="Header__heading_2">2019 - 21</span></div>
                    <div className="Header__subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore  magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aut</div>
                    </div>
                </div>
                <div className="col-xs-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="Header__secondcol">
                        <img className="Header__svg" src={winsvg} />
                    </div>
                </div>
            </div>
            </div>
            
            <div className="Header__thirdcol">
            <div className="Header__message_salutation">To,</div>
            <div className="Header__message">All the members of NIMA CC</div>
            <div className="Header__message_respected">Respected sir,</div>
            <div className="Header__message">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
        </div>
    );
}
export default Header;