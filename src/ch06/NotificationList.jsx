import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

// 타이머 변수 (컴포넌트 밖에서 선언해서 여러 메서드에서 공유)
var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 상태 초기화: 현재 보여지고 있는 알림 리스트
        this.state= {
            notifications: [],
        };
    }

     // 컴포넌트가 처음 화면에 렌더링된 직후 실행됨
    componentDidMount() {
        const { notifications } = this.state;

        // 1초마다 새로운 알림을 하나씩 추가
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer); // 모든 알림이 추가되면 타이머 중단
            }
        }, 1000);
    }

    // 컴포넌트가 사라질 때 실행됨 (메모리 누수 방지)
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;

