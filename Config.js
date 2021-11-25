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
import oillevel from './engine-oil-filled.png';
import oilpressure from './oil-pressure.png';
import oiltemp from './oil-temp.png';
import coollev from './coolant-level.png';
import cooltemp from './coolant-temp.png';
import fuellev from './fuel-tank.png';
import txnoil from './transmission.png';
import airclean from './air-cleaner.png';
import txnpress from './txn-pressure.png';
import { Input } from 'semantic-ui-react';
class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false 
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
   document.location.href = "http://localhost:3000/dash";
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className='App'>
      <center>
    <table cellSpacing="15">
    <tr>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={oillevel} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Eng oil level</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update   
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>
        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={oilpressure} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Eng oil pressure</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update 
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={oiltemp} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Eng oil temp</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
     Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        
    </tr>
    <tr>
    <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={coollev} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Coolant level</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={cooltemp} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Coolant temp</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={fuellev} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Fuel tank level</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update   
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
    </tr>
    <tr>
    <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={txnoil} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Txn oil level</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}>
      <img src={airclean} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Air cleaner</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
     Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
        <td>
        <center> 
      <div className="App-header" style={{width:"300px",height:"440px",borderRadius:"20px",backgroundColor:"brown"}}> 
      <img src={txnpress} width="40px" height="40px"/><br />
      <h3 style={{color:"white"}}>Txn oil pressure</h3>
      <Input
        label={{ tag: true, content: 'Green',color:"green"}}
        labelPosition='right'
        placeholder='Min'
    />
    <br />
    
    <Input
    label={{ tag: true, content: 'Green',color:"green"}}
    labelPosition='right'
    placeholder='Max'
/>
    <br /><br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Min'
/>
    <br />
    <Input
    label={{ tag: true, content:'yellow',color:"yellow"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Min'
/><br />
<Input
    label={{ tag: true, content:'red',color:"red"}}
    labelPosition='right'
    placeholder='Max'
/><br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Update    
  </Button>
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
      </div>
      </center>

        </td>
    </tr>
    </table><br /><br /><br />
    <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Dahboard    
  </Button> &nbsp;
  <Button variant="contained"  color="secondary" >
    Clear all
</Button>
    </center>
      
    </div>
    );
  }
}

export default withSnackbar(Config);