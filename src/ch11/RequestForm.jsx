import { useEffect, useState } from "react"

export default function RequestForm(props) {
    const [value, setValue] = useState('요청사항을 입력하세요.');

    const handleChange = (e) => {
        setValue(e.target.value.toUpperCase);
    }

    const handleSubmit = (e) => {
        alert('입력한 요청사항: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>요청사항 : <textarea value={value} onChange={handleChange}/></label> 
            <button>제출</button>
        </form>
    )
}