import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggeIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggeIn(true);
    };

    const onClickLogout = () => {
        setIsLoggeIn(false);
    };

    return (
        <div>
            <Toolbar 
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}/>
        <div style={{padding:16}}>김진수와 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;
