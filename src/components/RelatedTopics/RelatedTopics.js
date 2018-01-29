
//
//  IMPORT DEPENDENCIES
//

import axios from 'axios';

//
//  IMPORT COMPONENTS
//

import RankedKeywords from './RankedKeywords.js';

//
//  EXPORT CLASS - RELATED TOPICS
//

export default class RelatedTopics extends React.Component {
    constructor(props) {
        super(props);

        // Define begin state
        this.state = {
            topic: props.match.params.topic,
            startTime: props.match.params.startTime,
            endTime: props.match.params.endTime,
            rankedList: []

        }
    }

    // Component did mount
    componentDidMount() {

        // Call API
        axios.get('/api/relatedTopics', {
            params: {
                keyword: this.state.topic,
                endTime: this.state.endTime,
                startTime: this.state.startTime
            }
        }).then(res => {
                const result = JSON.parse(res.data.content);
                const rankedList = result.default.rankedList;

                // Update state with results
                this.setState({
                    rankedList: rankedList
                })
            });
    }

    render() {
        const rankedList = this.state.rankedList;

        // Empty related topics array
        var relatedTopics = [];

        // Loop trough and create ranked keywords
        for(var i = 0; i < rankedList.length; i++) {
            relatedTopics.push(<RankedKeywords key={'ranked_' + i} rankedList={rankedList[i]}/>);
        }

        // If related topic arrat is empty
        if(relatedTopics.length < 1) {
            relatedTopics = <p>Loading keywords...</p>;
        }

        return (
            <div className='relatedtopics'>
                <h1>Related topics of: {this.state.topic}</h1>
                <div className='relatedtopics__container'>
                    {relatedTopics}
                </div>
            </div>
        );
    }
}
