import React from "react";          //React 라이브러리 불러오기

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

// 클래스 컴포넌트 정의 (단일 알림을 렌더링)
class Notification extends React.Component {
    constructor(props) {
        super(props);               // 부모 클래스의 props 초기화

        this.state = {};            // 현재는 state 사용 안 함
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div>
                {this.state.notification.map((notification) => {
                    return (
                        <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}/>
                    );
                })}
                </div>
        );
    }
}

// 외부에서 이 컴포넌트를 사용할 수 있게 export
export default Notification;
