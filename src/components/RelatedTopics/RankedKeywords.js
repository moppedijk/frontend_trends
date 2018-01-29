
//
//  IMPORT COMPONENTS
//

import Keyword from './Keyword.js';

//
//  EXPORT CLASS - RANKED KEYWORDS
//

export default class RankedKeywords extends React.Component {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        const rankedList = this.props.rankedList.rankedKeyword;

        // Empty keywords array
        var keywords = [];

        // Loop trough and create keywords
        for(var i = 0; i < rankedList.length; i++) {
            const topic = rankedList[i].topic;
            const title = topic.title;
            const type = topic.type;
            const value = rankedList[i].value;

            keywords.push(<Keyword key={'keyword_' + i} title={title} type={type} value={value} />);
        }

        return (
            <div className='relatedtopics__keyword'>
                {keywords}
            </div>
        )
    }
}