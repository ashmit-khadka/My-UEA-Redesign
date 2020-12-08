import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../components/Home'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navigation/>
            <div className='content'>
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter