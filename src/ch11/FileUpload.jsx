import { useEffect, useRef, useState } from "react"

export default function FileUpload(props) {
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const idx = file?.name.lastIndexOf('.');
        const ext = file?.name.substring(idx+1);
        if(ext == 'png') {
            alert("'png 파일은 업로드 할 수 없습니다.")
            setFile(null);
            if(inputRef.current) inputRef.current.value = '';
        } 

    }, [file]);

    const handleChange = (e) => {
        setFile(e.target.files[0])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(file.name + "" + file.size + "Byte ");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" ref={inputRef} onChange={handleChange} />
            <button>제출</button>
        </form>
    )
}