import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'


import Cardapio from './components/cardapio/GeneralMex';
import Index from './components/index/Home';
import Sobre from './components/Sobre/Sobre';

export default props =>
    <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/cardapio" component={Cardapio} />
        <Route path="/sobre" component={Sobre} />
        <Redirect from='*' to="/" />
    </Switch>
