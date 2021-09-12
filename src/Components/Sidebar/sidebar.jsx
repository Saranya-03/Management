import React from 'react'
import"./sidebar.css"
import {LineStyle,Timeline,TrendingUp,Assessment,ShoppingCart,Storefront,PeopleAlt,LocalOffer,LocationOn} from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="item active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="item">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="item">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="item">
                            <PeopleAlt className="sidebarIcon" />
                            Salesperson
                        </li>
                        <li className="item">
                            <LocalOffer className="sidebarIcon" />
                            Products
                        </li>
                        <li className="item">
                            <ShoppingCart className="sidebarIcon" />
                            Orders
                        </li>
                        <li className="item">
                            <Storefront className="sidebarIcon" />
                            Shops
                        </li>
                        <li className="item">
                            <LocationOn className="sidebarIcon" />
                            Routes
                        </li>
                        <li className="item">
                            <Assessment className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
