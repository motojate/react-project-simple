
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './layouts/Layout';

const App = () => {
	return (
		<div className='App'>
  
			<BrowserRouter>
				<Routes>
        <Route element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
          </Route>
         </Routes>
			</BrowserRouter>

		</div>
	);
};

export default App;