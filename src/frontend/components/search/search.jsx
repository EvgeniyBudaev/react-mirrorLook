import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchProduct} from '../../redux/actions/actions'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.searchProduct(this.state.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
          />
          <span>
          <button>GO</button>
        </span>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchProduct
}

export default connect(null, mapDispatchToProps)(Search)
