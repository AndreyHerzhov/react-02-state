import React, { Component } from "react";
import './ColorPicker.css'

class ColorPicker extends Component {
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Pircker</h2>
                <div>
                    {this.props.options.map(({ label, color}) => (
                        <button 
                        key={label}
                        className="ColorPicker__option"
                        style={{backgroundColor: color}}
                        ></button>
                    ))}
                </div>
            </div>
        )
    }
}

 

export default ColorPicker;