import { useEffect, useState } from "react"

export default function NameForm(props) {
    const [value, setValue] = useState('');

    const handleChange = (e) => { 
        setValue(e.target.value.toUpperCase);        
}


const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault();
}

useEffect(() => {
    if (value.includes('ㅋㅋ')) { 
            setValue('');
            alert("'ㅋㅋ'라는 키워드를 입력할 수 없습니다.");
        } 
}, [value]);

    return (
        <form onSubmit={handleSubmit}>
            <label>이름 : <input type="text" value={value} onChange={handleChange}/></label> 
            <button>제출</button>
        </form>
    )
}