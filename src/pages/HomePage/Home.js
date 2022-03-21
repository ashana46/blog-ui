import React ,{Fragment} from 'react';
import Blogs, {  } from '../../components/blogs/Blogs';
import './Home.css';
const Home = () => {
  return (
    <Fragment>
      <h1 className="header">ALWAYS ON THE GO !!!</h1>
      <Blogs/>
    </Fragment>
  )
}

export default Home;