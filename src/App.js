import './App.css';
import React from 'react';
import img_ from './images.jfif'
class App extends React.Component
{
  state ={ 
      person : {fullname:"ayoub ait ahmad",
      bio:"je m'appelle ayoub ait ahmad et je suis développeur full stack ",
      img:img_,
      profession:"développeur full stack ",
      show:true}
  }
  show_=()=>{
    if(this.state.person.show===true)
    {
      this.setState({
      person:{fullname:"",
      bio:"",
      img:img_,
      profession:"",
      show:false
      }
    });
   }else{
    this.setState({person : {fullname:"ayoub ait ahmad",
    bio:"je m'appelle ayoub ait ahmad et je suis développeur full stack ",
    img:img_,
    profession:"développeur full stack ",
    show:true}})
   }
  }
  componentDidMount()
  {
    console.log(this.state.person);
  }
  componentDidUpdate()
  {
    var q=0;
    const my_in_c=()=>{clearInterval(my_in)};
    const my_in =setInterval(()=>{q++;console.log(q);if(q==10){my_in_c()}},1000);
  }
  render()
  {
    
    return(<>
    <div className="container">
      <div className="card">
        <img src={this.state.person.img} alt="Person" className="card__image"/>
        <p className="card__name">{this.state.person.fullname}</p>
        <p>{this.state.person.bio}</p>
        <h2>{this.state.person.profession}</h2>
        <button onClick={this.show_}>toggles</button>
      </div>
    </div>
    </>
    ) 
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>ok function</h1>
//         </div>
//   );
// }

export default App;
