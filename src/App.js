import Home from './components/Home/Home'
import About from './components/About/About'
import Favourite from './components/Favourite/Favourite'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import List from './components/List/List'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favourite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />}
          />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
