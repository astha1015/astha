import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Views/Home'
import Experience from './Views/Experience'
import Education from './Views/Education'
import Project from './Views/Project'
import Publication from './Views/Publication'

function App() {
  return (
    
      <Router>

        <div className="App">
          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
          <Header name='Astha Sharma'/>
          </div>
          <div className='w-full items-center '>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/experience'>
                <Experience></Experience>
              </Route>
              <Route path='/education'>
                <Education></Education>
              </Route>
              <Route path='/project'>
                <Project></Project>
              </Route>
              <Route path='/publication'>
                <Publication></Publication>
              </Route>
            </Switch>
          </div>   

          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white text-center text-xs p-3 fixed bottom-0 w-full">
            <Footer />
          </div>
        </div>

      </Router>
      
  );
}

export default App;
