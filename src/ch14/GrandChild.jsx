import useStore from "../store";

export default function GrandChild({}) {
    const {theme, toggleTheme} = useStore();
    return(
        <div className={`container ${theme === 'light' ? 'dark' : 'light'}`}>
            <p>GrandChild 컴포넌트 입니다.</p>
            <button onClick={toggleTheme}>테마 전환</button>
        </div>
    )
}