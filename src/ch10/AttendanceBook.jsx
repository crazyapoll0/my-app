
const students = [
    {
    id: 1,
    name: "김진수",
    },
    {
        id: 2,
        name: "강지수",
    },
    {
        id: 3,
        name: "레온하르트",
    },
    {
        id: 4,
        name: "잭스",
    },
    {
        id: 5,
        name: "에어리스",
    }
]

export default function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}



