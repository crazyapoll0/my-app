import ReactDOM from 'react-dom/client';
import './index.css';
import UserStatus from './ch07/UserStatus';
import TextInputWIthFocusButton from './ch07/TextInputWIthFocusButton';
import Accomodate from './ch07/Accomodate';
import Confirmbutton from './ch08/ConfirmButton';
import LandingPage from './ch09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LandingPage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
