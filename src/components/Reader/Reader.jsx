import { Component } from "react";

export class Reader extends Component{
  state = {
    publicationIndex: 0
  }

  handleClick(value) {
    
    this.setState({
      publicationIndex: this.state.publicationIndex + value
    })
    console.log(this.props.items.length)
  }
  render(){
    console.log(this.props.items[this.state.publicationIndex].title)
    const currentItem = this.props.items[this.state.publicationIndex]
    return(
        <div>
          {/* <!-- Разметка компонента <Controls> --> */}
          <section>
            <button type="button" onClick={() => this.handleClick(-1)}>Назад</button>
            <button type="button" onClick={() => this.handleClick(1)}>Вперед</button>
          </section>

          {/* <!-- Разметка компонента <Progress> --> */}
          <p>{this.state.publicationIndex + 1}/{this.props.items.length}</p>

          {/* <!-- Разметка компонента <Publication> --> */}
          <article>
            <h2>{currentItem.title}</h2>
            <p>
            {this.props.items[this.state.publicationIndex].text}
            </p>
          </article>
        </div>
    )
  }
}