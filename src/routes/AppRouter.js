import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Help from '../components/Help'
import Shortcuts from '../components/Shortcuts'
import Dock from '../components/Dock'
import Search from '../components/Search'
import Status from '../components/Status'
import Accessibility from '../components/Accessibility'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navigation/>
            <Help/>
            <Status/>
            <Search/>
            <Accessibility/>
            <Shortcuts/>
            
            <div className='content'>
                <Dock/>

                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter