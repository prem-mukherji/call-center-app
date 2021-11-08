import React from 'react';
import Header from './components/Header/Header';
import SearchJob from './components/Job/SearchJob';
import Login from './components/Login/Login' ;
import JobForm from './components/Job/JobForm';
import './index.css';
import JobCard from './components/UI/JobCard/JobCard';
import { BlogCard } from './components/UI/FlipCard/JobCard2';
import FlipCard from './components/UI/FlipCard/FlipCard';



function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        {/* <JobForm /> */}
        {/* <SearchJob></SearchJob> */}
        <JobCard></JobCard>
        {/* <BlogCard message='Hi' /> */}
        {/* <FlipCard /> */}
      </main>
    </React.Fragment>
  );
}

export default App;
