import { useState } from "react";

// 사용자 정의 훅: useCounter, 초기 카운트 값을 받아서 count 상태와 증가/감소 함수 반환
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    // 카운트 증가 함수=> 이전 상태 값을 안전하게 가져오기 위해 함수형 업데이트 사용
    const increaseCount = () => setCount((count) => count + 1);

    // 카운트 감소 함수=> 0 이하로 내려가지 않도록 Math.max 사용
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // count 상태와 조작 함수들을 배열로 반환
    return [count, increaseCount, decreaseCount];
}

export default useCounter; 