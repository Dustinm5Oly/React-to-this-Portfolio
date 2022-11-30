import React, {useState} from 'react';
import Nav from './components/pages/Nav';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Page from './components/pages/Page';
import './App.css';

function App() {
  const [pages] = useState ([
    {name: "About Me"},
    {name: "Portfolio"},
    {name: "Contact Me"},
    {name: "Resume"}
  ]);

  const [currentPage, setCurrentPage] = useState (pages[0])

  return (
    <div>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}>

        </Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}>

        </Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
