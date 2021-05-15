import React from 'react';
import CounterTimer from './counterTimer/CounterTimer.jsx';
import './Clock.css'

const dayToMilisecond = 1000 * 60 * 60 * 24;
const minuteToMilisecond = 1000 * 60;
const hourToMilisecond = 1000 * 60 * 60;
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(2021, 4, 18, 0, 0, 0),
            startDate: new Date(2021, 4, 10, 23, 59, 59),
            countDownTimer: new Date(),
            currentDate: new Date(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    };

    componentDidMount() {
        this.setTime = setInterval(() => this.countDown(), 1000);
    };
    componentWillUnmount() {
        clearInterval(this.setTime);
    };
    countDown() {
        debugger;
        if (this.state.date.getTime() - this.state.currentDate.getTime() >= 0){
            this.setState({
                countDownTimer: new Date(this.state.date.getTime() - this.state.currentDate.getTime()),
                currentDate: new Date(),
            });
            this.setState({
                days: Math.floor(this.state.countDownTimer.getTime()  / dayToMilisecond),
                hours: parseInt(Math.floor(this.state.countDownTimer.getTime() / hourToMilisecond % 24)),
                minutes: parseInt(Math.floor(this.state.countDownTimer.getTime() / minuteToMilisecond %  60)),
                seconds: parseInt(Math.floor(this.state.countDownTimer.getTime() / 1000 % 60))
            });
            console.log(this.state.countDownTimer.getDate());
        } else {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
        };
    };
    
    render() {
        return (
            <div className="countdown-timer">
                <h2>Count Down To Talk Show</h2>
                <h4>The talk shows will begin in {this.state.date.toDateString()} </h4>
                <div className="clock-container ">
                    <CounterTimer 
                        currentDate={this.state.days} 
                        startDate={this.state.startDate.getDate()} 
                        lastDate={this.state.date.getDate()} 
                        unit="Day" 
                    />
                    <CounterTimer 
                        currentDate={this.state.hours} 
                        startDate={this.state.startDate.getHours()} 
                        lastDate={this.state.date.getHours()} 
                        unit="Hours" 
                    />
                    <CounterTimer 
                        currentDate={this.state.minutes} 
                        startDate={this.state.startDate.getMinutes()} 
                        lastDate={this.state.date.getMinutes()} 
                        unit="Minutes" 
                    />
                    <CounterTimer 
                        currentDate={this.state.seconds} 
                        startDate={this.state.startDate.getSeconds()} 
                        lastDate={this.state.date.getSeconds()} 
                        unit="Seconds" 
                    />
                </div>
            </div>
        );
    };
};



export default Clock;