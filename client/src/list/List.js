import React, { Component } from 'react';
import Item from '../item/Item';

class List extends Component {
    render() {
        return (
            <div className="list-container">
                <div className="smooth-dnd-container horizontal">
                    <div className="smooth-dnd-draggable-wrapper">
                        <section className="list-container">
                            <div className="list-header">
                                <span className="list-drag-handle">☰</span> ppp
                            </div>

                            <div className="smooth-dnd-container vertical">
                                <div className="smooth-dnd-draggable-wrapper">
                                    <Item />
                                    <Item />
                                    <Item />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
