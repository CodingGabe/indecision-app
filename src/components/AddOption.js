import React from "react";

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        // .trim removes spaces before and after
        const option = e.target.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;