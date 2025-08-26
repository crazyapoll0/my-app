import { useRef } from "react";

function TextInputWIthFocusButton(props) {
    const inputElm = useRef(null);

    const onButtonClick = () => {
        // `current`는 마운트된 input element를 가리킴 
        inputElm.current.focus();

    };

    return (
        <>
        <input ref={inputElm} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default TextInputWIthFocusButton;