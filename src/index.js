import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function App(props) {
//   return (
//     <>
//       <h1>{props.greetings}, {props.name}</h1>
//     </>
//   );
// }

// function withGreetings(WrappedComponent) {
//   return function (greetings) {
//     return function (props) {
//       return (
//         <>
//           <WrappedComponent greetings={greetings} {...props} />
//           <p>Este párrafo bien con el HOC withGreetings</p>
//         </>
//       )
//     }
//   }
// }

// const AppWithGreetings = withGreetings(App);
// const AppWithGreetingsHello = AppWithGreetings('Hello');
// const AppWithGreetingsHi = AppWithGreetings('Hi');
// const AppWithGreetingsWhatsUp = AppWithGreetings('Whats up');

// ReactDOM.render(
//   <>
//     <AppWithGreetingsHello name="Sebastian" />
//     <AppWithGreetingsHi name="Jose" />
//     <AppWithGreetingsWhatsUp name="Leonardo" />
//   </>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);