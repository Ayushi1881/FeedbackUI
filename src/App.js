
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import FeedbackList from './Components/FeedackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedackForm from './Components/FeedackForm';
import AboutIconLink from './Components/AboutIconLink';
import  AboutPages  from './pages/AboutPages';
import {FeedbackProvider} from './context/FeedbackContext'

function App(){
  
  
    return (
      <FeedbackProvider>

      <Router>
        <Header/>
        <div className='bg-stone-900 h-screen'>
          <Routes>
          <Route exact path='/' element={
            <>
                      <FeedackForm />
                      <FeedbackStats />
                      <FeedbackList />
            </>
          }>
          </Route>

          <Route path='/about' element={<AboutPages />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
      </FeedbackProvider>
    )
}
export default App