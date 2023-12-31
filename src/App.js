import React              from 'react';
import { Route, Routes }  from 'react-router-dom'; 
import Home               from './pages/Home';
import About              from './pages/About';
import Page404            from './pages/Page404';
import './App.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <Routes>
          <Route exact  path="/"      element={<Home />}    />
          <Route        path="/about" element={<About />}   />
          
          <Route        path="*"      element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;