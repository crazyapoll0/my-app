
import { useEffect, useRef, useState } from "react"

export default function Reservation(props) {
    // const [haveBreakfast, setHaveBreakfast] = useState(true);
    // const [numberOfGuest, setNumberOfGuest] = useState(2);

    const [formvalue, setFormValue] = useState(
        { haveBreakfast: true,
            numberOfGuest: 2}
        );

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${formvalue.haveBreakfast}, 방문객 수: ${formvalue.numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부 
            <input type="checkbox" 
            checked={formvalue.haveBreakfast} 
            name="haveBreakfast"
            onChange={(e)=> {
                const value = e.target.checked;
                const name = e.target.name;
                //formValue에는 여러 폼 요소의 값들이 들어있기 때문에 
                //다른 요소의 값들은 유지하면서,
                //state의 참조 값은 변경시켜 줘야 함 ==> 새 객체를 만들어서 할당
                setFormValue({...formvalue, [name]:value })
            }} />
            </label>
            <br />

            <label>
                방문객 수:
                <input type="number" 
            value={formvalue.numberOfGuest} 
            name="number"
            onChange={(e)=> {
                const value = e.target.value;
                const name = e.target.name;
                setFormValue({...formvalue, [name]:value })
            }} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

