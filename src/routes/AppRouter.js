import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Help from '../components/Help'
import Dock from '../components/Dock'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navigation/>
            <Help/>
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