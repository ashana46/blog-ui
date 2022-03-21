import React, { Component } from 'react';
import {BlogItem} from './BlogItem';
import './Blogs.css';
import '../../App.css';
class Blogs extends Component{


  handleClick=(url)=>{
    console.log(url);
    window.location.assign(`/blog/${url}`);
  }

  render(){
    return(
      <div className="blog-list">
        {BlogItem.map((item,index)=>{
            return(
              // <Link to={`/blog/${item.url}`} className="btn btn-dark btn-sm my-1 card text-center"  key={index}>
              // <div>
              // <img src="http://placehold.it/50x50" width='40%'/>
              //   <p className="blog-title">{item.title}</p>
              // </div>
              // </Link>
              <div className="card text-center" onClick={()=>this.handleClick(item.url)} key={index}>
              <img src="https://mocah.org/uploads/posts/569221-backlit-beach.jpg" width='40%' height='150px'/>
                <p className="blog-title">{item.title}</p>
              </div>
            )
          })}
      </div>
    );
  }
}
export default Blogs;
