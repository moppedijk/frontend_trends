
//
//  IMPORT DEPENDENCIES
//

import axios from 'axios';

//
//  IMPORT COMPONENTS
//

import TrendsList from './TrendsList.js';
import TrendsTimeline from './TrendsTimeline.js';
import TrendsDates from './TrendsDates.js';

//
//  EXPORT CLASS - INTEREST OVER TIME
//

export default class InterestOverTime extends React.Component {
    constructor(props) {
        super(props);

        // Bind form handlers
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);

        // Define begin state
        this.state = {
            timeline1: [],
            timeline2: [],
            startTime: '2016-01-01',
            endTime: this.getCurrentDate()
        }
    };

    // Component did mount
    componentDidMount() {

        // When component mounts get data
        this.getData();
    }

    // Get trends data
    getData() {
        this.getInterestOverTime('ReactJS', 'timeline1');
        this.getInterestOverTime('AngularJS', 'timeline2');
    }

    // Get current dat and format
    getCurrentDate() {
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDay() + 1;

        if(month < 10) {
            month = '0' + month;
        }

        if(day < 10) {
            day = '0' + day;
        }

        return year + '-' + month + '-' + day;
    }

    //  Get interest over time 
    getInterestOverTime(keyword, stateName) {

        // Call API
        axios.get('/api/interestOverTime', {
            params: {
                keyword: keyword,
                endTime: this.state.endTime,
                startTime: this.state.startTime
            }
        }).then(res => {
                const result = JSON.parse(res.data.content);
                const timelineData = result.default.timelineData;

                // Create timeline state bases on stateName
                var obj = {};
                    obj[stateName] = timelineData;

                // Set state
                this.setState( obj );
            });
    }

    // On form submit handler
    onFormSubmit(e) {
        // Get data from API
        this.getData();

        // Set new default state
        this.setState({
            timeline1: [],
            timeline2: []
        });

        // Prevent default HTML behaviour
        e.preventDefault();
    }

    // On change startime input
    onChangeStartTime(e) {
        this.setState({
            startTime: e.target.value
        })
    }

    // On change endtime input
    onChangeEndTime(e) {
        this.setState({
            endTime: e.target.value
        })
    }

    // Calculate avarage based on timeline (trend) values
    calculateAvarage(trendsTimeLine) {
        var count = 0;
        var total = trendsTimeLine.length + 1;

        // Loop trough and add up
        for(var i = 0; i < trendsTimeLine.length; i++) {
            count = count + parseInt(trendsTimeLine[i].value);
        }

        // Return avarage
        return Math.floor(count / total);
    }

    // Render
    render() {
        const timeline1 = this.state.timeline1;
        const timeline2 = this.state.timeline2;
        const timeline1Avarage = this.calculateAvarage(timeline1);
        const timeline2Avarage = this.calculateAvarage(timeline2);
        const endTime = this.state.endTime;
        const startTime = this.state.startTime;

        return (
            <div className='trends'>
                <h1>Frontend Trends</h1>
                <div className='trends__left'>
                    <p>Using this tool trends in frontend web application frameworks can be spotted and analyzed.</p>
                </div>
                <div className='trends__right'>
                    {/* Rewrite to <Form /> component */}
                    <form className='form' onSubmit={this.onFormSubmit} >
                        <div className='form__input'>
                            <label>Start Time:</label>
                            <input type='text' value={startTime} onChange={this.onChangeStartTime} />
                        </div>
                        <div className='form__input'>
                            <label>End Time:</label>
                            <input type='text' value={endTime} onChange={this.onChangeEndTime} />
                        </div>
                        <div className='form__submit'>
                            <input type='submit' value='Search' />
                        </div>
                    </form>
                </div>
                <div className='trends__container'>
                    <TrendsDates topic='Datum' trendsTimeLine={timeline1} />
                    <TrendsTimeline topic='ReactJS' avarage={timeline1Avarage} startTime={startTime} endTime={endTime} trendsTimeLine={timeline1} />
                    <TrendsTimeline topic='AngularJS' avarage={timeline2Avarage} startTime={startTime} endTime={endTime} trendsTimeLine={timeline2} />
                </div>
            </div>
        );
    }
}