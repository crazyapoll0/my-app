import useStore from "../store";
import GrandChild from "./GrandChild";

export default function Child({}) {
    const {theme} = useStore();
    return (
    <div className={`container ${theme === 'light' ? 'dark' : 'light'}`}>
            <p>Child 컴포넌트 입니다.</p>
            <GrandChild />
        </div>
    )
}