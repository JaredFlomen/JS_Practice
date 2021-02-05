// import React, { Component } from 'react';
import React from 'react';
import MyComponent from './MyComponent';

// class App extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }

//   onClickBtn() {
//     console.log('button has been clicked');
//   }

//   render() {
//     return (
//       <div>
//         <MyComponent title='React' onButtonClicked={this.onClickBtn} />
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  return (
    <div>
      <MyComponent title='Hello Jared!' />
    </div>
  );
};

export default App;
