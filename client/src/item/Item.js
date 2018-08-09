import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                First Task!
                <a href="#"><i className="fa fa-fw fa-close hover-icon"> </i></a>
                <a href="#"><i className="fa fa-fw fa-pencil hover-icon"></i></a>
                <a href="#"><i className="fa fa-fw fa-ellipsis-v hover-icon"></i></a>
            </div>
        );
    }
}

export default Item;
