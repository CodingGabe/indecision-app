import React from "react";

class Action extends React.Component {
    handlePick() {
        console.log('handled!')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Add Me!</button>
            </div>
        );
    }
}

export default Action;