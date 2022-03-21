import React,{Component} from 'react'
class Blog extends Component{
  
  state={
    content:{
      title:"",
      items:[]
    }
  }

  componentDidMount(){
    this.getBlog(window.location.pathname.replace("/blog/",""));
  }

  getBlog = async(url)=>{
    const object= {
      "title":"THE RIGHT BRAINED HOMEMAKER",
      "items":[{
        "image":"https://wallpaperaccess.com/full/368766.jpg",
        "question":"Left & Right brain .. Whats the difference?",
        "answer":"Your brain is divided into two halves, or hemispheres. Within each half, particular regions control certain functions.The two sides of your brain look very much alike, but there’s a huge difference in how they process information. Despite their contrasting styles, the two halves of your brain don’t work independently of each other.Different parts of your brain are connected by nerve fibers. If a brain injury severed the connection between sides, you could still function. But the lack of integration would cause some impairment."
      },
      {
        "image":"https://mocah.org/uploads/posts/569221-backlit-beach.jpg",
      "question":"Left & Right brain .. Whats the difference?",
      "answer":"Your brain is divided into two halves, or hemispheres. Within each half, particular regions control certain functions.The two sides of your brain look very much alike, but there’s a huge difference in how they process information. Despite their contrasting styles, the two halves of your brain don’t work independently of each other.Different parts of your brain are connected by nerve fibers. If a brain injury severed the connection between sides, you could still function. But the lack of integration would cause some impairment."
        
      }
    ]
    };
    this.setState({content:object});
  }

  clicked(){
    console.log(this.state.content);
  }

  render(){
    return (
      <div className="blog-content-page" onClick={()=>this.clicked()}>
        <h1 className='header'>{this.state.content.title}</h1>
        {this.state.content.items.map((item, index) => (
          <div key={index}>
            <div className="blog-content-image">
              <img src={item.image} className="image" style={{width:'100%' ,height:'100%'}}/>
            </div>
            <div className="blog-content-question">
              <p><b>Question : {item.question}</b></p>
            </div>
            <div className="blog-content-answer">
              <p><b>Answer : </b> {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
}
export default Blog;
