import React from 'react';

import "./Layout.css";
import Header from "../../Header/Header";
function Layout({children}) {
    return (
        <div className="layout">
            <Header/>
            {children}
        </div>
    );
}

export default Layout;