import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import IndexPage from './components/pages/IndexPage';
import MainPage from './components/pages/MainPage'
import SummaryPage from './components/pages/SummaryPage'
import ErrorPage from './components/pages/ErrorPage'
import ChartsPage from './components/pages/ChartsPage'

import Navbar from './components/ui/Navbar'

import './style/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ IndexPage } />
          <Route path="/main" component={ MainPage } />
          <Route path="/summary" component={ SummaryPage } />
          <Route path="/charts" component={ ChartsPage } />
          <Route component={ ErrorPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
