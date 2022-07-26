import React, { Component } from "react";
import './ColorPicker.css'

class ColorPicker extends Component {
    state = {
        activeOptionIndex: 1 
    }

    makeOptionClassName = (index) => {
        const optionClasses = ["ColorPicker__option"]

        if (index === this.state.activeOptionIndex) {
            optionClasses.push('ColorPicker__option--active')
        }
        return optionClasses.join(' ')
    }
    
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Pircker</h2>
                <div>
                    {this.props.options.map(({ label, color}, index) => {
                    const optionClassName =  this.makeOptionClassName(index)    
                        return (
                            <button 
                            key={label}
                            className={optionClassName}
                            style={{
                                backgroundColor: color,

                            }}
                            ></button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

 

export default ColorPicker;