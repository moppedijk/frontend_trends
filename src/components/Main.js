
//
//  IMPORT DEPENDENCIES
//

import { Route, Switch } from 'react-router-dom';

//
//  IMPORT COMPONENTS
//

import InterestOverTime from './InterestOverTime/InterestOverTime.js';
import RelatedTopics from './RelatedTopics/RelatedTopics.js';

//
//  EXPORT CLASS - MAIN
//

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        return (
            <main className='main'>
                <Switch>
                    <Route exact path='/' component={InterestOverTime} />
                    <Route path='/related-topics/:topic/:startTime/:endTime' component={RelatedTopics} />
                </Switch>
            </main>
        );
    }
}
