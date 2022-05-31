import { UseState } from 'react'
import Header from "./Components/Header";
import FeedbackList from './Components/FeedackList';
import FeedBackData from './data/FeedbackData';
import { useState } from 'react/cjs/react.development';
import FeedbackStats from './Components/FeedbackStats';
import FeedackForm from './Components/FeedackForm';

function App(){
  const [feedback, setFeedback ] = useState(FeedBackData)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    {
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }
    return (
      <>
        <Header/>
        <div className='bg-indigo-900 h-screen'>
          <FeedackForm />
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
        </div>
      </>
    );
}
export default App