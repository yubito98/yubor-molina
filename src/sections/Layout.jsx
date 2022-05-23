import React, { Children } from "react";


const Layout = ({children}) =>{
    return(
        <div className="layout custom-container" >
            {children}
        </div>
    )
}


export default Layout;