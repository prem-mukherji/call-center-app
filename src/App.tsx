import React from 'react';
import Header from './components/Header/Header';
import JobForm from './components/Job/JobForm';
import Login from './components/Login/Login' ;
import './index.css';



function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <JobForm />
      </main>
    </React.Fragment>
  );
}

export default App;
