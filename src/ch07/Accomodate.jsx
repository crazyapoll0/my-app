import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    // 상태: 정원이 가득 찼는지 여부
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 매 렌더링마다 실행되는 useEffect (의존성 배열 없음)
    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called.");
        console.log(`isFull:${isFull}`);
    });

    // count 값이 변할 때마다 isFull 상태 업데이트
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button> &nbsp;&nbsp;&nbsp;
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다<div className=""></div></p>}
        </div>
    );
}

export default Accomodate;