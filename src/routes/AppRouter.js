import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <div className=''>
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter