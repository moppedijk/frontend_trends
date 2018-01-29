
//
//  IMPORT DEPENDENCIES
//

import { HashRouter } from 'react-router-dom';

//
//  IMPORT COMPONENTS
//

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

//
//  ADD CSS
//

import './css/style.css';

//
//  DEFINE APP
//

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

//
//  RENDER REACT DOM
//

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
