import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react'
import Header from "./Components/Header";
import FeedbackList from './Components/FeedackList';
import FeedBackData from './data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedackForm from './Components/FeedackForm';
import AboutIconLink from './Components/AboutIconLink';
import  AboutPages  from './pages/AboutPages';

function App(){
  const [feedback, setFeedback ] = useState(FeedBackData)
  const addFeedback=(newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
    return (
      <Router>
        <Header/>
        <div className='bg-stone-900 h-screen'>
          <Routes>
          <Route exact path='/' element={
            <>
                      <FeedackForm handleAdd={addFeedback} />
                      <FeedbackStats feedback={feedback}/>
                      <FeedbackList feedback={feedback}
                      handleDelete={deleteFeedback} />
            </>
          }>
          </Route>

          <Route path='/about' element={<AboutPages />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    )
}
export default App