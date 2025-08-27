
import useStore from "../store";
import Child from "./Child";

export default function Parent({}) {
    const {theme} = useStore();

    return (
        <div className={`container ${theme === 'light' ? 'dark' : 'light'}`}>
            <p>Parent 컴포넌트 입니다.</p>
            <Child />
        </div>
    )
}