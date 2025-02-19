import React from "react";
import ProgressBar from "./components/percentage";
import Form from "./components/Form";
import TimerButton from "./components/TimerButton";
import LazyLoading from "./components/LazyLoading";
import SubmitForm from "./components/SubmitForm";
import Nothing from "./components/nothing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Component from "./components/Component";



 function App() {
  
  return (
    
      <div>
      {/* <ProgressBar /> */}
      {/* <Form /> */}
      {/* <TimerButton />       */}
      {/* <LazyLoading /> */}
      {/* <Router>
      <Routes>
        <Route path='/' element={<SubmitForm />} />
        <Route path='/results' element={<Nothing />} />
      </Routes>
    </Router> */}
    <Component />
      </div>
    
  );
}

export default App;