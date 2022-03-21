import React,{Component} from 'react'
import './About.css';
import '../../../src/App.css';
class About extends Component{
  render(){
    return (
      <div>
        <h1 className='header'>About This Website</h1>
        <div className='img-container'>
        <img src={"./About.png"} className='image'/>
        </div>
        <div className='text-container'>
        <p>You don't use only one side of your brain at a time. Whether you're performing a logical or creative function, you're receiving input from both sides of your brain.
        </p>
        <p>
        I started blogging and affiliate marketing in 2010 when my first son was born and never looked back!
        </p>
        <p>
        I love surprises, dance parties with my kids and encouraging other moms to unapologetically go after their crazy dreams
        </p>
        </div>
      </div>
    );
  }
  
}
export default About;