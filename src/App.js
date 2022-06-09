import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Header from "./Components/Header";
import FeedbackList from './Components/FeedackList';
import FeedBackData from './data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedackForm from './Components/FeedackForm';

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
      <>
        <Header/>
        <div className='bg-indigo-900 h-screen'>
          <FeedackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
        </div>
      </>
    );
}
export default App