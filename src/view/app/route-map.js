import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'
import Home from '../home/App.js'
import  Head from '../../component/header/header.js'
import List from '../list/list.js'
import About from '../about/about.js'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Head></Head>
                    <Route path='/home' component={Home} />
                    <Route path='/list' component={List} />
                    <Route path='/about' component={About} />
                </div>
                {/*<Route path='/' component={Head}>*/}


                    {/*/!*<Redirect from="/home" to="/" />*!/*/}
                {/*</Route>*/}
            </BrowserRouter>
        );
    }
}

export default App;
