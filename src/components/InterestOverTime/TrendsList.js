
//
//  EXPORT CLASS - TRENDS LIST
//

export default class TrendsList extends React.Component {
    constructor(props) {
        super(props);
    };

    // Render
    render() {
        const value = this.props.data.value;

        // Default class list
        var classList = 'trends__list';

        // Check value and set color
        if(value < 25) {
            classList =  'trends__list trends__list--verylow';
        } else if (value < 50) {
            classList =  'trends__list trends__list--low';
        } else if (value < 75) {
            classList =  'trends__list trends__list--middle';
        } else if (value < 99) {
            classList =  'trends__list trends__list--high';
        } else {
            classList =  'trends__list trends__list--extraordinary';
        }

        return (
            <div className={classList}>
                <p className='trends__value'>{value}</p>
            </div>
        )
    }
}