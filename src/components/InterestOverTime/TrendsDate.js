
//
//  EXPORT CLASS - TRENDS DATE
//

export default class TrendsDate extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const date = this.props.date;

        return (
            <div className='trends__list'>
                <p className='trends__value'>{date}</p>
            </div>
        )
    }

}