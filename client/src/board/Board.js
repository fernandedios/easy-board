import React, { Component } from 'react';

import ClearButton from './ClearButton';
import List from '../list/List';
import NewEntry from '../item/NewEntry';
import Modal from '../common/Modal';

class Board extends Component {
    render() {
        return (
            <div className="board-container">
                <div className="board">
                    <ClearButton label="Reset Board" />
                    <List />
                    <List />
                    <List />
                    <div className="new-list">
                        <NewEntry placeholder="Add new list" />
                    </div>
                </div>
                <Modal name="ItemEditModal" />
            </div>
       );
    }
}

export default Board;
