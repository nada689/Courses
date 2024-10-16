import { Component } from 'react';

export default class Class extends Component {

    state = {
      products: [],
      inputVal: "",
      searchedResult: [],
    };

  // Fetch products once the component mounts
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  }

  // Update the search results when inputVal changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputVal !== this.state.inputVal) {
      const result = this.state.products.filter((product) =>
        product.title.toLowerCase());
      this.setState({
        searchedResult: result,
      });
    }
  }

  // Handle input change
  handleInputChange = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  render() {
    return (
      <>
        <label htmlFor="search" hidden></label>
        <input
          type="search"
          id="search"
          placeholder="Search here ... "
          onChange={this.handleInputChange}
        />
        <hr />
        <ul>
          {this.state.searchedResult.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
