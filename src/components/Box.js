import React from "react";
// import styles from "./Steps.module.css";

class Box extends React.Component {
    render() {
            return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color: this.props.color, fontSize: 100 }}>
                    {/* directions_walk */}
                    {this.props.icon}
                </span>
                <p id="value">{this.props.value} {this.props.unit}</p>
                {this.props.icon === "local_drink" ? null :
                <input type="range" name="" id="" min={this.props.min} max={this.props.max} defaultValue={this.props.defaultValue} onInput={this.props.onInput} />
                }
            </div>
            );
    };
};

export default Box;