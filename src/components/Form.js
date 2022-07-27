import React, {Component} from "react"
import shortid from "shortid"

class Form extends Component {
    state = {
        name: '',
        nick: '',
        experience: 'senior'
    }

    nameInputId = shortid.generate()
    nickInputId = shortid.generate()
    

    handleChange = event => {
        const { name, value } = event.target
    
        this.setState({
          [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)

        this.reset()
    }

    reset = () => {
        this.setState({ name: '', nick: ''})
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId} >
                Name 
                <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.handleChange}
                id={this.nameInputId} 
                >
                   
              </input>
            </label>
            <label htmlFor={this.nickInputId} >
                Nick 
                <input 
                type="text" 
                name="nick"
                value={this.state.nick} 
                onChange={this.handleChange}
                id={this.nickInputId}   
                >
                
              </input>
            </label>

            <p>Your level</p>
            <label>
                    Junior:
                    <input type="radio" 
                    name="experience" 
                    value="junior"
                    onChange={this.handleChange}
                    checked={this.state.experience === "junior"}
                    ></input>
            </label>
            <label>
                    Middle:
                    <input type="radio"
                     name="experience"
                     value="middle"
                     onChange={this.handleChange}
                     checked={this.state.experience === "middle"}
                     ></input> 
            </label>
            <label>
                    Senior:
                    <input type="radio" 
                    name="experience" 
                    value="senior"
                    onChange={this.handleChange}
                    checked={this.state.experience === "senior"}
                    ></input>     
            </label>
           
          

            <button type="submit">Send</button>
          </form>
        )
    }
}

export default Form