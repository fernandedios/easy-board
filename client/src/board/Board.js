import React, { Component } from 'react';

import ClearButton from './ClearButton';
import List from '../list/List';

class Board extends Component {
    render() {
        return (
            <div className="board-container">
                <div className="board">
                    <ClearButton />
                    <List />
                    <List />
                    <List />
                </div>
            </div>
       );
    }
}

export default Board;
