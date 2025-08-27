const scaleNames = {
    c : "섭씨",
    f : "화씨"
}

export default function TemperatureInput(props) {
    //props.scale == 'c' || 'f'
    return (
    <fieldset>
        <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
        <input value={props.Temperature} onChange={(e) => {
            props.onTemperaturChange(e.target.value)
        }} />    
    </fieldset>
)}