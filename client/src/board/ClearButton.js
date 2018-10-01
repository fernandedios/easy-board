import React from 'react';
import Button from '../common/Button';

const ClearButton = ({ name, label, ...others }) => {
    return (
        <div className="clear-button">
            <div className="control">
                <Button {...others} name={name} classes="is-button" label={label} />
            </div>
        </div>
    );
};

export default ClearButton;
