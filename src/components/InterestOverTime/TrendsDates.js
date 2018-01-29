
//
//  IMPORT COMPONENTS
//

import TrendsDate from './TrendsDate.js';

//
//  EXPORT CLASS - TRENDS DATES
//

export default class TrendsDates extends React.Component {
    constructor(props) {
        super(props);
    };

    // Render
    render() {
        const trendsTimeLine = this.props.trendsTimeLine;
        const title = this.props.topic;
        const topic = this.props.topic;

        // Empty timeline array
        var timeline = [];

        // Loop trough and create dates
        for(var i = 0; i < trendsTimeLine.length; i++) {
            timeline.push(<TrendsDate key={trendsTimeLine[i].time} date={trendsTimeLine[i].formattedTime}/>);
        }

        // If timeline is empty
        if(timeline.length < 1) {
            timeline = <div className='trends__list'><p>Loading...</p></div>;
        }

        return (
            <div className='trends__timeline trends__timeline--grey trends__timeline--small'>
                <div className='trends__timeline-header'>
                    <h2>{title}</h2>
                </div>
                <div className='trends__timeline-content'>
                    {timeline}
                </div>
            </div>
        )
    }

}