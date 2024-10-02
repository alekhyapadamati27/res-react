import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2025 Padamati Alekhya</p>
      </footer>
    </div>
  );
}

export default App;




//bgchange:

// import './App.css';
// import React, { useState } from 'react';

// function App() {
  
//   const [bgColor, setBgColor] = useState('lightblue'); 

 
//   const changeColor = () => {
    
//     setBgColor('darkblue');
//   };

  
//   const resetColor = () => {
//     setBgColor('brown'); 
//   };

//   return (
//     <div style={{ padding: '50px', backgroundColor: bgColor }}>
//       <h1 style={{ textAlign: 'center',color:'#fff',}}>lucky</h1>
//       <center>
//         <button onClick={changeColor} style={{ margin: '10px',backgroundColor:'blue',color:'#fff',height:'40px' }}>
//           Change Color
//         </button>
//         <button onClick={resetColor} style={{ margin: '10px',backgroundColor:'blue',color:'#fff',height:'40px'}}>
//           Reset Color
//         </button>
//       </center>
//     </div>
//   );
// }

// export default App;

//zoom in/out:

// import './App.css';
// import React, { useState } from 'react';

// function App() {
 
//   var [size, setSize] = useState({
//     width: 200,
//     height: 200
//   });

//   var increaseSize = () => {
//     setSize({
//       width: size.width + 10,
//       height: size.height + 10
//     });
//   };

//   var decreaseSize = () => {
//     if (size.width > 50 && size.height > 50) {
//       setSize({
//         width: size.width - 10,
//         height: size.height - 10
//       });
//     }
//   };

//   return (
//     <div>
//         <button onClick={decreaseSize} style={{marginLeft:'40%',position:'absolute',top:'15%'}}>-</button>
//         <img 
//           src="lucky.jpg" 
//           alt="luckyalekhya" 
//           style={{ width: size.width, height: size.height, marginLeft: '40%',position:'absolute',top:'25%' }} 
//         />
//         <button onClick={increaseSize} style={{ marginLeft: '50%',position:'absolute',top:'15%'}}>+</button>
//     </div>
//   );
// }

// export default App;

//generating a random number:

// import React, { Component } from 'react'
// export class App extends Component {
//   constructor(props){
//     super(props)
//     this.randValue=this.randValue.bind(this)
//   }
//   randValue=()=>{
//     this.forceUpdate();
//   }
//   render() {
//     return (
//       <div>
//       <h1>{parseInt(Math.random()*100)}</h1>
//       <button onClick={this.randValue}>Change</button>
//       </div>
//     )
//   }
// }

// export default App

//lists in reactjs:

// import React, { Component } from 'react'
// import './Header.css'
// export class App extends Component {
//   render() {
//     const myList=['Home','About','Logout']
//     const listItems=myList.map((item)=><li>{item}</li>)
//     return (
//       <div>
//        <ol>{listItems}</ol>
//       </div>
//     )
//   }
// }

// export default App

//tables:

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const students=[{name:'lucky',age:'20',place:'tenali'},{name:'rowdy',age:'21',place:'tenali'}]
//     return (
//       <div>
//         <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Place</th>
//         </tr>
//         {students.map((val,key)=>{
//           return <tr key={key}>
//             <td>{val.name}</td>
//             <td>{val.age}</td>
//             <td>{val.place}</td>
//           </tr>
//         })}
//        </table>
//       </div>
//     )
//   }
// }

//forms:

// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(){
//     super()
//     this.state={username:'',userName:'',color:''}
//   }
//   changeName=(e)=>{
//     this.setState({username:e.target.value})
//   }
//   submitName=(e)=>{
//     e.preventDefault();
//     if(this.state.username.trim()===''){
//       this.setState({userName:`enter valid information`,color:'darkred'})
//     }
//     else{
//       this.setState({userName:`you entered ${this.state.username}`,color:'darkgreen'})
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitName}>
//           <input type='text'placeholder='Username' onChange={this.changeName}/><br></br><br></br>
//           <input type='Submit' value='Submit'/>
//         </form>
//         <h4 style={{color:this.state.color}}>{this.state.userName}</h4>
//       </div>
//     )
//   }
// }

// export default App

//applying colors externally:

// import React, { Component } from 'react';
// import './Header.css';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       color: '',
//       u: '',
//       p: '',
//       alert: '' 
//     };
//   }

//   ch = (e) => {
//     this.setState({ username: e.target.value });
//   };

//   ph = (e) => {
//     this.setState({ password: e.target.value });
//   };

//   submitName = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;
    

//     if (username === '' || password === '') {
//       this.setState({ alert: 'Username and password are required!' });
//     } else {
//       this.setState({
//         u: username,
//         p: password,
//         alert: 'Form submitted successfully!'
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitName}>
//           <input type="text" placeholder="Username" onChange={this.ch} /><br /><br />
//           <input type="password" placeholder="Password" onChange={this.ph} /><br /><br />
//           <input type="submit" value="Submit" />
//           <p>Already have Account</p>
//           <button>Login</button>
//           <button>Register</button>
          
//           {this.state.alert && (
//             <div style={{ color: 'darkred', fontWeight: 'bold', textAlign:'center' }}>{this.state.alert}</div>
//           )}
//           <div className="down">
//             <p style={{ color: 'darkgreen', width: '75%', height: '10%', backgroundColor: '#fff'}}>
//               {this.state.u}
//             </p>
//           </div>
//           <div className="down1">
//             <p style={{ color: 'black', width: '75%', height: '10%', backgroundColor: '#fff' }}>
//               {this.state.p}
//             </p>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;



