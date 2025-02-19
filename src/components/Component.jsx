
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const RamComponent = () => <div className="p-4 text-xl">Student: Ram</div>;

const IdComponent = () => {
  const { id } = useParams();
  return <div className="p-4 text-xl">Ids : {id}</div>;
};

function Component() {
  return (
    <Router>
      <Routes>
        <Route path="/Ram" element={<RamComponent />} />

        <Route path="/ids/:id" element={<IdComponent />} />
      </Routes>
    </Router>
  );
}

export default Component;