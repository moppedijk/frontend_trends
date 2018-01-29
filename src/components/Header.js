
//
//  IMPORT DEPENDENCIES
//

import { Link } from 'react-router-dom';

//
//  EXPORT CLASS - HEADER
//

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        return (
            <header className='header'>
                <nav className='nav'>
                    <ul className='nav__ul'>
                        <li className='nav__li'><Link to='/'>Interest over time</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
