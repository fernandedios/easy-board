import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="icons">
                    <span className="icon icon-edit">
                        <i className="fas fa-edit"></i>
                    </span>
                </div>
                <div>
                    <p className="item-title">kkk</p>
                </div>
            </div>
        );
    }
}

export default Item;
