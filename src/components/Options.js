import React from "react";

class Options extends React.Component {
  handleRemoveAll() {
    console.log('removed!')
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

export default Options;
