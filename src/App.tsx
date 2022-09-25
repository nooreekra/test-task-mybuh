import React from 'react';
import './App.css'
import { Crumbs } from './components/breadcrumbs/Crumbs';
import { Header } from './components/header/Header';
import { ViewingSale } from './components/sales/ViewingSale';

const data = {
  "doc_number": 128523,
  "doc_date": "02.06.2021",
  "date_create": "12.07.2022",
  "date_edit": "17.07.2022",
  "state_id": 1,
  "sf": {
    "doc_number": 185,
    "doc_date": "02.06.2021"
  },
  "operation": {
    "doc_number": 185,
    "doc_date": "02.06.2021"
  },
  "file": '',
  "esf": null,
  "invoice": null
}

function App() {

  return (
    <div className='App'>
      <Header />
      <Crumbs />
      <ViewingSale data={data} />
    </div>
  )
}
export default App;
