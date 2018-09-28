import React, { Component } from 'react';

class NewEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: ''
        };

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { placeholder, type } = this.props;
        return (
            <div className="ui-item-entry field has-addons">
                <div className="control is-expanded">
                    <input name="entry" onChange={this.handleEvent} placeholder={placeholder} value={this.state.entry} className="input" />
                </div>
                <div className="control">
                    <button type="submit" className="button is-primary">
                        <span className="icon is-small"><i className="fas fa-angle-right"></i></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default NewEntry;
