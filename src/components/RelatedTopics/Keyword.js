
//
//  EXPORT CLASS - KEYWORD
//

export default class Keyword extends React.Component {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        const title = this.props.title;
        const type = this.props.type;
        const value = this.props.value;

        // Default class list
        var classList = 'keyword';

        // Check value and set color
        if(value < 25) {
            classList =  'keyword keyword--verylow';
        } else if (value < 50) {
            classList =  'keyword keyword--low';
        } else if (value < 75) {
            classList =  'keyword keyword--middle';
        } else if (value < 99) {
            classList =  'keyword keyword--high';
        } else {
            classList =  'keyword keyword--extraordinary';
        }

        return (
            <div className={classList}>
                <div className='keyword__left'>{value}</div>
                <div className='keyword__right'>
                    <div className='keyword__title'>Title: {title}</div>
                    <div className='keyword__type'>Type: {type}</div>
                </div>
            </div>
        )
    }
}

// Use this for dumb components
// export default const Keyword = ({ props }) => {
//     return (

//     );
// }

