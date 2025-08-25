import Comment from "./Comment";

const comments = [
    {
        name: "김진수",
        comment: "안녕하세요, 김진수 입니다."
    },
    {
        name: "강지수",
        comment: "리액트 스프링 부트 보다 할만해요~",
    },
    {
        name: "김진수",
        comment: "저는 리액트 이미 다 했어서^^;;."
    },
    {
        name: "강지수",
        comment: "아 예~ 잘나셨네~",
    }
];




function CommentList(props) {
    return ( 
        <div>
            {comments.map((comment)=> {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;