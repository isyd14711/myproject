import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Navbar = () => {
    const [kelma, setKelma] = useState(false);
    const [menu, setMenu] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);
    const [close, setClose] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setKelma(window.innerWidth >= 850);
            setMenu(window.innerWidth <= 600);
            setMenu(!(window.innerWidth > 600));
        };

        const handelScroll = () => {
            setScroll(window.scrollY >= 600);
        };

        // Check the window size right when the component loads
        handleResize();
        handelScroll();

        // Add event listener to listen for window resizing
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handelScroll);

        // Clean up: remove the event listener when the component is removed (unmounts)
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handelScroll);
        };
    }, []);

    const changeMenu = () => {
        setBigMenu(!bigMenu);
        setMenu(false);
        setClose(true);
    };

    const changeClose = () => {
        setBigMenu(!bigMenu);
        if (window.innerWidth > 600) {
            setMenu(false);
        } else {
            setMenu(true);
        }
        setClose(false);
    };

    return (
        <>
            {scroll ? (
                <div
                    className="arrow"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <FaRegArrowAltCircleUp
                        size={23}
                        cursor={"pointer"}
                        style={{ transform: "translateX(0)" }}
                    />
                </div>
            ) : undefined}
            <header style={window.location.pathname === "/" || window.location.pathname
            === "/home" ? (window.scroll ? { background: "#000" } : {background : 
                "rgba(0,0,0,0.3)"}) : {background : "#000"}}>
                <nav>
                    <span>LOGO</span>
                    <ul
                        className={bigMenu ? "big-menu" : undefined}
                        style={menu ? { display: "none" } : { display: "flex" }}
                    >
                        <li>
                            <NavLink to={"/home"}>
                                <FaHome />
                                {kelma ? "home" : bigMenu ? "home" : undefined}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>
                                <IoInformationCircleOutline />
                                {kelma ? "about" : bigMenu ? "about" : undefined}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>
                                <FaBasketShopping />
                                {kelma ? "products" : bigMenu ? "products" : undefined}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>
                                <FaPhoneAlt />
                                {kelma ? "contact" : bigMenu ? "contact" : undefined}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cart"}>
                                <IoCartSharp />
                                {kelma ? "cart" : bigMenu ? "cart" : undefined}
                            </NavLink>
                        </li>
                    </ul>
                    {(menu || bigMenu) && !close ? (
                        <TiThMenu
                            onClick={() => {
                                changeMenu();
                            }}
                            size={25}
                            cursor={"pointer"}
                        />
                    ) : undefined}
                    {close || bigMenu ? (
                        <IoMdCloseCircleOutline
                            onClick={() => {
                                changeClose();
                            }}
                            size={25}
                            cursor={"pointer"}
                        />
                    ) : undefined}
                </nav>
            </header>
        </>
    );
};

export default Navbar;