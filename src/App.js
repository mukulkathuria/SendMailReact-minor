import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MailForm from './Components/Mail/mailform';
import Confirmation from './Components/Confirmation/confirmation';

const App = () =>{
  return (
    <BrowserRouter>
      <Route exact path='/' component={MailForm} />
      <Route exact path='/thankyou' component={Confirmation} />
    </BrowserRouter>
  );
}

export default App;
