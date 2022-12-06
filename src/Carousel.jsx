import { Component } from "react";

// class components must extend Component
class Carousel extends Component {
  state = {
    active: 0,
  };

  // default props for if no props are passed in
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // update active item on carousel
  handleIndexClick = (e) => {
    this.setState({
      // + makes a str into a number, which we need to have the index as a number
      // dataset refers to all data- things on an object
      active: +e.target.dataset.index,
    });
  };
  // class components always have a render function
  render() {
    const { active } = this.state; // keep track of internal state
    const { images } = this.props; // props

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
