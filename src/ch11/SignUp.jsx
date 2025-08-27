import { useState } from "react"

export default function SignUP(props) {
    const [formValue, setFormValue] = useState({
        name: "",
        gender: "남자",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (e) => {
        alert(`이름: ${formValue.name}, 성별: ${formValue.gender}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : &nbsp;
                <input type="text"
                    value={formValue.name}
                    name="name"
                    onChange={handleChange} />
            </label>
            <br></br><br></br>
            <label>
                성별 : &nbsp;
                <select value={formValue.gender}
                    name="gender"
                    onChange={handleChange}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label> &nbsp;
            <button>제출</button>
        </form>
    )
}