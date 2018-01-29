
//
//  IMPORT DEPENDENCIES
//

import { Link } from 'react-router-dom';

//
//  IMPORT COMPONENTS
//

import TrendsList from './TrendsList.js';

//
//  EXPORT CLASS - TRENDS TIMELINE
//

export default class TrendsTimeline extends React.Component {
    constructor(props) {
        super(props);
    };

    // Render
    render() {
        const trendsTimeLine = this.props.trendsTimeLine;
        const topic = this.props.topic;
        const startTime = this.props.startTime;
        const endTime = this.props.endTime;
        const avarage = this.props.avarage;

        // Empty timeline array
        var timeline = [];

        // Loop trough and create trends list with timeline data
        for(var i = 0; i < trendsTimeLine.length; i++) {
            timeline.push(<TrendsList key={trendsTimeLine[i].time} data={trendsTimeLine[i]} />);
        }

        // If timeline is empty
        if(timeline.length < 1) {
            timeline = <div className='trends__list'><p>Loading...</p></div>;
        }

        return (
            <div className='trends__timeline trends__timeline--grey'>
                <div className='trends__timeline-header trends__timeline-header--center'>
                    <h2>{topic} - Avarage score: {avarage}</h2>
                    <Link to={'/related-topics/' + topic + '/' + startTime + '/' + endTime}>Related topics</Link>
                </div>
                <div className='trends__timeline-content trends__timeline-content--center'>
                    {timeline}
                </div>
            </div>
        )
    }

}