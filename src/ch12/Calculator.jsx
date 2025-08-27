import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

 //화씨를 입력받아서 섭씨로 변환해주는 계산 함수 
    function toCelsius(fahreheit) {
        return ((fahreheit - 32) * 5) / 9;
    }

    //섭씨를 입력받아서 화씨로 변환해주는 계산 함수
    function toFahreheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        //매개변수 temperature가 숫자가 아닌경우 ==> input == NaN  
        if (Number.isNaN(input)) {
            return "";
        }
        const output = convert(input);
        const result = Math.round(output * 1000) / 1000;
        return result.toString();
    }

export default function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handlerCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handlerFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f')
    }
   
    const celsius =
        scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahreheit =
        scale === 'c' ? tryConvert(temperature, toFahreheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                Temperature={celsius}
                onTemperaturChange={handlerCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                Temperature={fahreheit}
                onTemperaturChange={handlerFahrenheitChange}
            />
            <Boiling celsius={parseFloat(celsius)} />
        </div>
    )
}

function Boiling(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}