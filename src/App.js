import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';
import {Page} from './extensions/Page';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './home/Home';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        
        <Nav></Nav>

        <main className="w3-padding-medium">

          <Switch>

            <Page exact path="/" component={Home} title="Teaching Code"></Page>

            <Page path="*" component={NotFound} title="Page Not Found"></Page>
            
          </Switch>

        </main>

        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
