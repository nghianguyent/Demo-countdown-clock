import React from 'react';
import CounterTimer from './counterTimer/CounterTimer.jsx';
import './Clock.css'
import LoadingScreen from './../LoadingScreen/LoadingScreen.jsx';
import Delay from 'react-delay';
const dayToMilisecond = 1000 * 60 * 60 * 24;
const minuteToMilisecond = 1000 * 60;
const hourToMilisecond = 1000 * 60 * 60;
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(2021, 5, 1, 0, 0, 0),
            startDate: new Date(2021, 4, 1, 0, 0, 0),
            countDownTimer: new Date(),
            currentDate: new Date(),
            fullDate: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: -1,
        };
    };

    componentDidMount() {
        this.setTime = setInterval(() => this.countDown(), 1000);
    };
    componentWillUnmount() {
        clearInterval(this.setTime);
    };
    countDown() {
        this.setState({
            fullDate: (this.state.date.getTime() - this.state.startDate.getTime())/ dayToMilisecond,
        });
        if (this.state.date.getTime() - this.state.currentDate.getTime() >= 0){
            this.setState({
                countDownTimer: new Date(this.state.date.getTime() - this.state.currentDate.getTime()),
                currentDate: new Date(),
            });
            this.setState({
                days: Math.floor(this.state.countDownTimer.getTime()  / dayToMilisecond),
                hours: Math.floor(this.state.countDownTimer.getTime() / hourToMilisecond % 24),
                minutes: Math.floor(this.state.countDownTimer.getTime() / minuteToMilisecond %  60),
                seconds: Math.floor(this.state.countDownTimer.getTime() / 1000 % 60)
            });
        } else {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
        };
    }
    render() {
        return (
        <> 
        { this.state.seconds !== -1 ? 
            <div className="countdown-timer" >
                <h2>Count Down To Talk Show</h2>
                <h4>Fcode Birthday will come in {this.state.date.toDateString()} </h4>
                <div className="clock-container " >
                    <CounterTimer 
                        currentDate={this.state.days} 
                        fullDate={this.state.fullDate}
                        unit="Days" 
                    />
                    <CounterTimer 
                        currentDate={this.state.hours} 
                        fullDate={24}
                        unit="Hours"
                    />
                    <CounterTimer 
                        currentDate={this.state.minutes} 
                        fullDate={60}
                        unit="Minutes" 
                    />
                    <CounterTimer 
                        currentDate={this.state.seconds} 
                        fullDate={60}
                        unit="Seconds" 
                    />
                </div>
            </div> 
        :   <LoadingScreen />    
        }
        </>
        );
    };
};



export default Clock;