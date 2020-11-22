import React from 'react';

import "./Layout.css";
import Header from "../../Header/Header";
import Sidebar from "../../Extra UI/Sidebar/Sidebar";
function Layout({children}) {
    const [showSidebar,setShowSidebar] = React.useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    return (
        <div className="layout">
            <Header show={showSidebar} hanldeSidebar={toggleSidebar}/>
            {/*<Sidebar show={showSidebar} handleSidebar={toggleSidebar} />*/}
            {children}
        </div>
    );
}

export default Layout;