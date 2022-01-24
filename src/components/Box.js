import React from "react";
// import styles from "./Steps.module.css";

const iconStyle = {
    fontSize: '100px',
    color: `${this.props.color}`,
};

class Box extends React.Component {
    render() {
        return (
        <div className="box col-sm-3 col-6">
            <span className="material-icons" style={iconStyle}>
                {/* directions_walk */}
                {this.props.icon}
            </span>
            <p>{this.props.value} {this.props.unit}</p>
        </div>
        );
    };
};

export default Box;