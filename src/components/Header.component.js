import React from 'react';

const HeaderComponent = props => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{props.title}</a>
            </div>
        </nav>
    )
}

export default HeaderComponent;
