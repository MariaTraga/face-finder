import React,{Component} from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
// import Clarifai, { FACE_DETECT_MODEL } from 'clarifai';



const particleOptions={
  "particles": {
    "number": {
        "value": 190,
        "density": {
            "enable": false
        }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
          "speed": 4,
          "size_min": 0.3
      }
    },
    "color":{
      "value":"#745da2"
    },
    "line_linked": {
        "enable": false,
    },
    "move": {
        "random": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
        // "onhover": {
        //     "enable": true,
        //     "mode": "bubble"
        // },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
        },
        "repulse": {
            "distance": 400,
            "duration": 4
        }
    }
  }
}

const initialState = {
  input:'',
  imageURL:'',
  boxes:[],
  route:'signin',
  isSignedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  } 
}

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) =>{
    this.setState(
      {user:{
          id:data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      }
    )
  }

  // componentDidMount(){

  //   // const myFunc = async () => {
  //   //     try{
  //   //       const response = await fetch('127.0.0.1:3000/');
  //   //       let responseJson = await response.json();
  //   //       console.log(responseJson);
  //   //     }
  //   //     catch(err){
  //   //       console.log(err);
  //   //     }
  //   // }

  //   // myFunc();

  //   fetch('http://127.0.0.1:3000/')
  //   .then(response => response.json())
  //   .then((data)=>console.log(data));
  // }

  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }

  onPictureSubmit = () =>{
    this.setState({imageURL:this.state.input,boxes:[]});
    fetch('http://127.0.0.1:3000/imageurl',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        input:this.state.input
      })
    })
    .then(response=>response.json())
    .then(response=> {
      if(response){
        fetch('http://127.0.0.1:3000/image', {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
              id:this.state.user.id
          })
        })
        .then(response=>response.json())
        .then(count =>{
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
        .catch(err=>console.log('Error fetching the API.'))
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err=>{
      console.log(err);
      // this.displayFaceBox([]);
    });
  }

  calculateFaceLocation = (data) =>{
    const boundingBoxes= [];
    const clarifaiFacesRegions = data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    clarifaiFacesRegions.map(region=>{
      const boundingBoxRegions=region.region_info.bounding_box;
      boundingBoxes.push(
        {
          leftColumn: boundingBoxRegions.left_col * width,
          topRow: boundingBoxRegions.top_row * height,
          rightColumn: width - (boundingBoxRegions.right_col * width),
          bottomRow: height - (boundingBoxRegions.bottom_row * height)
        }
      );
    })
    return boundingBoxes;
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes:boxes});
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState(initialState);
      return;
    }
    else if(route==='home'){
      this.setState({isSignedIn:true});  
    }
    else{
      this.setState({isSignedIn:false});
    }

    this.setState({route:route});
  }

  render(){
    const {isSignedIn,route,boxes,imageURL} = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions}
        />

        <NavigationBar>
          <Logo/>
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        </NavigationBar>
        
        {route==='home'?
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/> 
            <FaceRecognition boxes={boxes} imageURL={imageURL}/>
          </div>
          :(
            route==='signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )          
        }
      </div>
    );
  }
  
}

export default App;
