import { useEffect, useState } from "react"


export default function FruitSelect(props) {
    const [value, setValue] = useState(['apple','banana','grape','watermelon']);

    const handleChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions);
        const values = selectedOptions.map((op) => op.value);
        setValue(values);
    }

    const handleSubmit = (e) => {
        alert('선택한 과일: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>과일을 선택하세요 :
                <select multiple={true} value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button>제출</button>
        </form>
    )
}