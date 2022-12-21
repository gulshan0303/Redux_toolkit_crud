import React from 'react'
import {Route,Routes} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
const App = () => {
  return (
    <>
      <div className="container">
         <Routes>
             <Route exact path='/' element ={<Post/>}/>
             <Route path='/create' element ={<CreatePost/>}/>
         </Routes>
      </div>
    </>
  )
}

export default App