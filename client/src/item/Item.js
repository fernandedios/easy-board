import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal() {
        console.log('item edit clicked');
    } 

    render() {
        return (
            <div className="card">
                <div onClick={this.handleModal} className="icons">
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
