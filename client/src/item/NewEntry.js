import React, { Component } from 'react';

class NewEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: ''
        };
    }

    handleEvent(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { placeholder, type } = this.props;
        return (
            <div class="ui-item-entry field has-addons">
                <div class="control is-expanded">
                    <input name="entry" onChange={this.handleEvent} placeholder={placeholder} value={this.state.entry} class="input" />
                </div>
                <div class="control">
                    <button type="submit" class="button is-primary">
                        <span class="icon is-small"><i class="fas fa-angle-right"></i></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default NewEntry;
