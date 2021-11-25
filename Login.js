/*
Author: Ramachandran Andayil
updated at: 

*/

import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import security from './security.png';
import { withSnackbar } from 'notistack';
import Police from './Police';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }
  clearclick = () =>
  {
    document.getElementById('usr').value = "";
    document.getElementById('pass').value = "";
  }
  handleclick =() =>{
    var usr= document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    if(usr.toString() == 'hod' && pass.toString() == "123")
    {
      this.props.enqueueSnackbar('Login Successful', { 
          variant: 'success',
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
       }
      );
      window.location.href = "http://localhost:3000/config";
    }
    else
    {
      this.props.enqueueSnackbar('Invalid Credentials', { 
          variant: 'error',
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
       }
      );
    }
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className='App'>
      <center>
          <br />
          <br />
        <br /><br /><br /><br />
      <div className="App-header" style={{width:"400px",height:"500px",borderRadius:"20px"}}> 
      <img src={security} width="120px" height="120px"/><br /><br />
      <TextField 
      required    
      id="usr"
      label="Username"
      defaultValue=""
      variant="outlined"
      style = {{color: 'white',borderColor: "blue"}}
      focused
      inputProps={{ style: { fontFamily: 'nunito', color: 'blue',borderColor: "blue"}}}
    /><br /><br />
    <TextField 
      required   
      id="pass"
      type="password"
      label="Password"
      defaultValue=""
      variant="outlined"
      focused
      inputProps={{ style: { fontFamily: 'nunito', color: 'blue',borderColor : 'red'}}}
    />

    <br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Login    
  </Button>
  <br /><br />
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
  <br /><br />
   <p style={{color:"blue"}}>Total Login<h3 style={{color:"red"}} >05</h3></p>
      </div>
       </center>
       <br />
    <br /><br /><br /><br />
    </div>
    );
  }
}

export default withSnackbar(Login);