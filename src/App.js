// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IngestData from './components/IngestData';
import CreateAudience from './components/CreateAudience';
import CampaignList from './components/CampaignList';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <h1>CRM Application</h1>
        <Switch>
          <Route path="/ingest-data" component={IngestData} />
          <Route path="/create-audience" component={CreateAudience} />
          <Route path="/campaigns" component={CampaignList} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={() => <div>Welcome to CRM</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
