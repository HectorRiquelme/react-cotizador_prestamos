import React, { Fragment } from "react";

function Header(props){

    return[
        <Fragment>
            <h1>
                {props.titulo} {props.version}
            </h1>
        </Fragment>
    ]
}

export default Header;