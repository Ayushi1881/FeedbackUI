import { UseState } from 'react'
import Header from "./Components/Header";
import FeedbackList from './Components/FeedackList';
import FeedBackData from './data/FeedbackData';
import { useState } from 'react/cjs/react.development';


function App(){
  const [feedback, setFeedback ] = useState(FeedBackData)

    return (
      <>
        <Header/>
        <div className='bg-indigo-900 h-screen'>
        <FeedbackList feedback={feedback}/>
        </div>
      </>
    );
}
export default App