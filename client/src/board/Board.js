import React, { Component } from 'react';

import ClearButton from './ClearButton';
import List from '../list/List';
import NewEntry from '../item/NewEntry';

class Board extends Component {
    render() {
        return (
            <div className="board-container">
                <div className="board">
                    <ClearButton />
                    <List />
                    <List />
                    <List />
                    <div className="new-list">
                        <NewEntry placeholder="Add new list" />
                    </div>
                </div>
            </div>
       );
    }
}

export default Board;
