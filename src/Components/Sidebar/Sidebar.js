import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOptions from '../Sidebaroptions/SidebarOptions';
function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarOptions active Icon={HomeIcon} text="Dashboard" />
            <SidebarOptions Icon={SearchIcon} text="Products" />
            <SidebarOptions Icon={NotificationsNoneIcon} text="Customers" />
            <SidebarOptions Icon={MailOutlineIcon} text={"Orders"} />
            <SidebarOptions Icon={BookmarkBorderIcon} text={"Settings"} />


        </div>
    );
}


export default Sidebar;