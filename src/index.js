import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.querySelector('#root')
);


// import { StrictMode } from "react";
// import { createRoot } from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );