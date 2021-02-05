// import React, { Component } from 'react';
import React from 'react';

// class MyComponent extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { title, onButtonClicked } = this.props;
//     return (
//       <div>
//         <h1>{title}</h1>
//         <button onClick={onButtonClicked}>Click Me!</button>
//       </div>
//     );
//   }
// }

// export default MyComponent;

const MyComponent = props => {
  return <div>{props.title}</div>;
};

export default MyComponent;
