import React from 'react';

const NewEntry = ({ placeholder, type }) => {
    return (
        <div class="ui-item-entry field has-addons">
            <div class="control is-expanded">
                <input placeholder={placeholder} class="input" />
            </div>
            <div class="control">
                <button type="submit" class="button is-primary">
                    <span class="icon is-small"><i class="fas fa-angle-right"></i></span>
                </button>
            </div>
        </div>
    );
}

export default NewEntry;
