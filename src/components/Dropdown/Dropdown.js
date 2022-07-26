import React, {Component} from "react";
import './Dropdown.css'

class Dropdown extends Component {
    state = {
        visible: true,
    }

    toggle = () => {
        this.setState(PrevState => ({
            visible: !PrevState.visible
        }))
    }

    show = () => {
        this.setState({visible: true})
    }

    hide = () => {
        this.setState({visible: false})
    }
     
    render() {
        return (
            <div className="Dropdown">
                <button type="button" 
                        className="Dropdown__toggle"
                        onClick={this.toggle}
                >
                     {this.state.visible ? 'Hide' : 'Show'}
                </button>
                
                {this.state.visible && 
                    (<div className="Dropdown__menu">Dropping menu</div>)
                }
                
            </div>
        )
    }
}

export default Dropdown;