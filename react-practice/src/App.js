// // // import React, { Component } from 'react';
// // import React from 'react';
// // import MyComponent from './MyComponent';

// // // class App extends Component {
// // //   // eslint-disable-next-line no-useless-constructor
// // //   constructor(props) {
// // //     super(props);
// // //   }

// // //   onClickBtn() {
// // //     console.log('button has been clicked');
// // //   }

// // //   render() {
// // //     return (
// // //       <div>
// // //         <MyComponent title='React' onButtonClicked={this.onClickBtn} />
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default App;

// // const App = () => {
// //   return (
// //     <div>
// //       <MyComponent title='Hello Jared!' />
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [color, setColor] = useState('black');

//   useEffect(() => {
//     const changeColorOnClick = () => {
//       if (color === 'black') {
//         setColor('red');
//       } else {
//         setColor('black');
//       }
//     };

//     document.addEventListener('click', changeColorOnClick);

//     return () => {
//       document.removeEventListener('click', changeColorOnClick);
//     };
//   }, [color]);

//   return (
//     <div>
//       <div
//         id='myDiv'
//         style={{
//           color: 'white',
//           width: '100px',
//           height: '100px',
//           position: 'absolute',
//           left: '50%',
//           top: '50%',
//           backgroundColor: color,
//         }}
//       >
//         This div can change color. Click on me!
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
};

export default App;
