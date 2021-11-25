import logo from './logo.svg';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer";
import React, { Component } from 'react';
import Bulb from 'react-bulb';
import ReactDOM from 'react-dom';
import { Message, Icon,Button,Popup, Modal,Header,Segment,TransitionablePortal } from 'semantic-ui-react';
import oillevel from './engine-oil-filled.png';
import oilpressure from './oil-pressure.png';
import oiltemp from './oil-temp.png';
import coollev from './coolant-level.png';
import cooltemp from './coolant-temp.png';
import fuellev from './fuel-tank.png';
import txnoil from './transmission.png';
import airclean from './air-cleaner.png';
import txnpress from './txn-pressure.png';
import { withSnackbar } from 'notistack';

class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s01: 0,s02: 0,s03: 0,s04: 0,s05: 0,s06: 0,
      eog:"black",
      eoo:"black",
      eor:"red",
      eopg:"black",
      eopo:"black",
      eopr:"red",
      eotg:"black",
      eoto:"black",
      eotr:"red",
      clg:"black",
      clo:"black",
      clr:"red",
      ctg:"black",
      cto:"black",
      ctr:"red",
      ftg:"black",
      fto:"black",
      ftr:"red",
      tolg:"black",
      tolo:"black",
      tolr:"red",
      acg:"black",
      aco:"black",
      acr:"red",
      topg:"black",
      topo:"black",
      topr:"red",
      coolopen:true,
      oilopen:true,
      engmodal:false,
    };
    this.oilref = React.createRef();
    this.coolantref = React.createRef();
    
  }

  handleOpen = () => this.setState({engmodal: true })

  handleClose = () => this.setState({engmodal: false })
  componentDidMount() {
  setInterval(() => {
      this.showMessage();
    }, 10000);
    setInterval(() => {
      this.setStatus();
    }, 20000);
  this.setState({
    s01: 0,s02: 0,s03: 0,s04: 0,s05: 0,s06: 0,
    eog:"black",
    eoo:"black",
    eor:"red",
    eopg:"black",
    eopo:"black",
    eopr:"red",
    eotg:"black",
    eoto:"black",
    eotr:"red",
    clg:"black",
    clo:"black",
    clr:"red",
    ctg:"black",
    cto:"black",
    ctr:"red",
    ftg:"black",
    fto:"black",
    ftr:"red",
    tolg:"black",
    tolo:"black",
    tolr:"red",
    acg:"black",
    aco:"black",
    acr:"red",
    topg:"black",
    topo:"black",
    topr:"red",
    coolopen:true,
    oilopen:true,
    engmodal:false,
  });
  }
  oilclick = () =>{
    if(this.state.oilopen == true){
      this.setState({oilopen:false});
    }
  }
  coolclick = () =>{
    if(this.state.coolopen == true){
      this.setState({coolopen:false});
    }
  }
showMessage = () =>{
  this.props.enqueueSnackbar('Txn Oil Presssure sensor not online ', { 
    variant: 'warning',
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
  },
 }
);
} 
setStatus = () =>{
  this.setState({coolopen:true});
  //this.setState({oilopen:true});
}
oilcauses = () =>
{
  this.setState({oilopen: false});
  alert("a) Gauge Faulty : Repair/Replace \nb) Sending Unit Faulty : Repair/Replace \nc) ROT and MOT Puncture : Repair/Replace \nd) Hoses Perished : Replace the hose \ne) Scavenging Pump Faulty : Repair/Replace \nf) Oil Coolers Leaking : Repair/Replace \ng) Lubrication Sys Leaking : Repair");
}
setRandomInt = () =>{
  const rand1 = 1 + Math.random() * (100 - 1);
  const rand2 = 1 + Math.random() * (100 - 1);
  const rand3 = 1 + Math.random() * (100 - 1);
  const rand4 = 1 + Math.random() * (100 - 1);
  const rand5 = 1 + Math.random() * (100 - 1);
  const rand6 = 1 + Math.random() * (100 - 1);
  // this.setState({
  //     s01:parseInt(rand1),
  //     s02:parseInt(rand2),
  //     s03:parseInt(rand3),
  //     s04:parseInt(rand4),
  //     s05:parseInt(rand5),
  //     s06:parseInt(rand6)
      
  //   });
  // this.setBulb(rand1,"l1");
  // this.setBulb(rand2,"l2");
  // this.setBulb(rand3,"l6");
  // this.setBulb(rand4,"r1");
  // this.setBulb(rand5,"r2");
  // this.setBulb(rand6,"r6");
}
setBulb = (val,sensor) => {
    if(val >=0 && val <=30){
        /* if(sensor == "l1") 
        {
            this.setState({l1g:"green",l1o:"black",l1r:"black"})
        }
        else if(sensor == "l2")
        {
            this.setState({l2g:"green",l2o:"black",l2r:"black"})
        }    
        else if(sensor == "l6")
        {
            this.setState({l6g:"green",l6o:"black",l6r:"black"})
        }
        else if(sensor == "r1")
        {
            this.setState({r1g:"green",r1o:"black",r1r:"black"})
        } 
        else if(sensor == "r2")
        {
            this.setState({r2g:"green",r2o:"black",r2r:"black"})
        } 
        else if(sensor == "r6")
        {
            this.setState({r6g:"green",r6o:"black",r6r:"black"})
        } 
        */
    }
    else if(val >30 && val <=80){
       /* if(sensor == "l1") 
        {
            this.setState({l1g:"black",l1o:"orange",l1r:"black"})
        }
        if(sensor == "l2") 
        {
            this.setState({l2g:"black",l2o:"orange",l2r:"black"})
        }
        if(sensor == "l6") 
        {
            this.setState({l6g:"black",l6o:"orange",l6r:"black"})
        }
        if(sensor == "r1") 
        {
            this.setState({r1g:"black",r1o:"orange",r1r:"black"})
        }
        if(sensor == "r2") 
        {
            this.setState({r2g:"black",r2o:"orange",r2r:"black"})
        }
        if(sensor == "r6") 
        {
            this.setState({r6g:"black",r6o:"orange",r6r:"black"})
        }
        
        */
    }
    else if(val >80 && val <=100){
       /* if(sensor == "l1") 
        {
            this.setState({l1g:"black",l1o:"black",l1r:"red"})
        }
        if(sensor == "l2") 
        {
            this.setState({l2g:"black",l2o:"black",l2r:"red"})
        }
        if(sensor == "l6") 
        {
            this.setState({l6g:"black",l6o:"black",l6r:"red"})
        }
        if(sensor == "r1") 
        {
            this.setState({r1g:"black",r1o:"black",r1r:"red"})
        }
        if(sensor == "r2") 
        {
            this.setState({r2g:"black",r2o:"black",r2r:"red"})
        }
        if(sensor == "r6") 
        {
            this.setState({r6g:"black",r6o:"black",r6r:"red"})
        }
        
    
    */
      }
}
  render(){

 
  return (
    <div className="App">
      <table>
       
        <tr>
          <td>
  <table>
  <tr>
  <td>
  <Message  style={{width:"220px"}} color="black" style={{backgroundColor:"red"}}>
    <Message.Content style={{backgroundColor:"red"}}>
    <img src={oillevel} width="80" height="80" />
    <Message.Header>Engine oil level</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
  ref = {this.oilref}
  id = "l1g"
    size={18}
    color={this.state.eog}
  /> &nbsp;
  <Bulb
  id = "l1-2"
    size={18}
    color={this.state.eoo}
  /> &nbsp;
  <Bulb
  id = "l1-3"
    size={18}
    color={this.state.eor}
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td>  
  <td>
  <Message style={{width:"220px"}} color="black" style={{backgroundColor:"red"}}>
    <Message.Content>
    <img src={oilpressure} width="80" height="80" />
    <Message.Header>Engine oil pressure</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
    size={18}
    color={this.state.eopg}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.eopo}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.eopr}
    
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  <td>
  <Message  style={{width:"220px"}} color="black" style={{backgroundColor:"red"}}>
    <Message.Content>
    <img src={oiltemp} width="80" height="80" />
    <Message.Header>Engine oil temp</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
  ref="l1g"
  id = "l1g"
    size={18}
    color={this.state.eotg}
  /> &nbsp;
  <Bulb
  id = "l1-2"
    size={18}
    color={this.state.eoto}
  /> &nbsp;
  <Bulb
  id = "l1-3"
    size={18}
    color={this.state.eotr}
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  </tr> 
  <tr>
  <td>
  <Popup
      id="coolant"
    open ={this.state.coolopen}
    inverted
    offset={[0, 50]}
    //style = {{borderRadius: 0,opacity: 0.7,padding: '2em'}}
    
    context={this.coolantref}>
<Popup.Content>
    <Icon name="setting loading" />  
    Topup or fill atleast 10 ltrs of coolant <br />
    <Button color='green'onClick={this.coolclick} content='Topup now' />
    </Popup.Content>
  </Popup> 
  <Message style={{width:"220px"}} color="black" style={{backgroundColor:"green"}}>
    <Message.Content>
    <img src={coollev} width="80" height="80" />
    
    <Message.Header>Coolant level</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
  
  color={this.state.clg}
    size={18}
    
  /> &nbsp;
  <Bulb
  color={this.state.clo}
    size={18}
    
  /> &nbsp;
  <Bulb
  color={this.state.clr}
    size={18}
    
  /> &nbsp;
  </center>
  </div> 
    </Message.Content>
  </Message>
  </td>  
  <td>
  <Message style={{width:"220px"}} color="black" style={{backgroundColor:"green"}}>
    <Message.Content>
    <img src={cooltemp} width="80" height="80" />
    <Message.Header>Coolant temp</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
  ref="l1g"
  id = "l1g"
    size={18}
    color={this.state.ctg}
  /> &nbsp;
  <Bulb
  id = "l1-2"
    size={18}
    color={this.state.cto}
  /> &nbsp;
  <Bulb
  id = "l1-3"
    size={18}
    color={this.state.ctr}
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  <td>
  <Message  style={{width:"220px"}} color="black" style={{backgroundColor:"orange"}}>
    <Message.Content>
      <img src={fuellev} width="80" height="80" />
    <Message.Header>Fuel tank level</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
    size={18}
    color={this.state.ftg}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.fto}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.ftr}
    
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  </tr> 
  <tr>
  <td>
  <Message  style={{width:"220px",backgroundColor:"brown"}} color="black" >
    <Message.Content>
    <img src={txnoil} width="80" height="80" />
    <Message.Header>Txn oil level</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
    size={18}
    color={this.state.tolg}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.tolo}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.tolr}
    
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td>  
  <td>
  <Message style={{width:"220px",backgroundColor:"blue"}} color="black" >
    <Message.Content>
    <img src={airclean} width="80" height="80" />
    <Message.Header>Air cleaner</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
  ref="l1g"
  id = "l1g"
    size={18}
    color={this.state.acg}
  /> &nbsp;
  <Bulb
  id = "l1-2"
    size={18}
    color={this.state.aco}
  /> &nbsp;
  <Bulb
  id = "l1-3"
    size={18}
    color={this.state.acr}
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  <td>
  <Message  style={{width:"220px",backgroundColor:"brown"}} color="black">
    <Message.Content>
    <img src={txnpress} width="80" height="80" />
    <Message.Header>Txn Oil Pressure</Message.Header><br />
    <div style={{backgroundColor:"#575757",borderRadius:"10px",height:"40px"}}>
<center>
  <Bulb
    size={18}
    color={this.state.topg}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.topo}
    
  /> &nbsp;
  <Bulb
    size={18}
    color={this.state.topr}
    
  /> &nbsp;
  </center>
  </div>
    </Message.Content>
  </Message>
  </td> 
  </tr> 
  </table>
          
          
          </td>
        <td>
        <table cellpadding="15">
          <tr>
            <td>
            <ReactSpeedometer
        width={250}
        height={160}
        maxValue={65}
        needleColor="white"
        style={{color:"white"}}
        textColor="white"
    customSegmentStops={[0, 20, 40, 65]}
    segmentColors={["red", "yellow", "green"]}
    value={this.state.s01}
    currentValueText = "Ltrs : ${value}"
    onClick ={this.oilclick}
  />
  <img src={oillevel} ref={this.oilref} width="30" height="30" />
            </td>
            <td>
        <ReactSpeedometer
        width={250}
        height={160}
        maxValue={10}
        needleColor="white"
        textColor="white"
        customSegmentStops={[0, 6, 8, 10]}
    segmentColors={["red", "yellow", "green"]}
    value={this.state.s02}
    currentValueText = "OIL PRES kg/cm² : ${value}"
  />   
  <img src={oilpressure} width="30" height="30" />
        </td>
        <td>
        <ReactSpeedometer
        width={250}
        height={160}
        maxValue={125}
        needleColor="white"
        textColor="white"
        customSegmentStops={[0,70, 100, 115,125]}
    segmentColors={["lightblue","green", "yellow", "red"]}
    value={this.state.s02}
    currentValueText = "°C : ${value}"
  /> 
  <img src={oiltemp} width="30" height="30" /> 
        </td>
          </tr>
          <tr>
          <td>
  <ReactSpeedometer
        width={250}
        height={160}
        maxValue={90}
        needleColor="white"
        textColor="white"
    customSegmentStops={[0, 35, 50, 90]}
    segmentColors={["red", "yellow", "green"]}
    value={this.state.s01}
    currentValueText = "Ltrs : ${value}"
  />
  <img src={coollev}  ref={this.coolantref}  width="30" height="30" />
        </td>
  <td>
  <ReactSpeedometer
        width={250}
        height={160}
        maxValue={125}
        needleColor="white"
        textColor="white"
    customSegmentStops={[0,70, 100, 115,125]}
    segmentColors={["lightblue","green", "yellow", "red"]}
    value={this.state.s01}
    currentValueText = "°C : ${value}"
  />
   <img src={cooltemp} width="30" height="30" />
  </td>
        <td>
        <ReactSpeedometer
        width={250}
        height={160}
        maxValue={100}
        needleColor="white"
        textColor="white"
        customSegmentStops={[0, 30, 80, 100]}
    segmentColors={["limegreen", "tomato", "firebrick"]}
    value={this.state.s03}
    currentValueText = "R2: ${value}"
  />   
 <img src={fuellev} width="30" height="30" />
        </td>
  
          </tr>
          <tr>
          <td>
        <ReactSpeedometer
        width={250}
        height={160}
        maxValue={100}
        needleColor="white"
        customSegmentStops={[0, 30, 80, 100]}
        value={this.state.s04}
        textColor="white"
        segmentColors={["limegreen", "tomato", "firebrick"]}
    currentValueText = "L6: ${value}"
  />   
  <img src={txnoil} width="30" height="30" />
        </td>
  <td>
  <ReactSpeedometer
        width={250}
        height={160}
        maxValue={65}
        needleColor="white"
        textColor="white"
    customSegmentStops={[0, 20, 40, 65]}
    segmentColors={["red", "yellow", "green"]}
    value={this.state.s01}
    currentValueText = "Ltrs : ${value}"
  />
   <img src={airclean} width="30" height="30" />
  </td>
        <td>
        <ReactSpeedometer
        width={250}
        height={160}
        maxValue={100}
        needleColor="white"
        textColor="white"
        
        customSegmentStops={[0, 30, 80, 100]}
    segmentColors={["limegreen", "tomato", "firebrick"]}
    value={this.state.s05}
    currentValueText = "R6: ${value}"
  />   
  <img src={txnpress} width="30" height="30" />
        </td>
          </tr>
        </table>
        
        </td>
        
        </tr>
      </table>
      <br /><br />
      <Popup
      id="engine-oil"
    open = {this.state.oilopen}
    inverted
    //style = {{borderRadius: 0,opacity: 0.7,padding: '2em'}}
    offset={[0, 50]}
    context={this.oilref}>
    <Popup.Content>
    <Icon name="setting loading" />  
    Topup or fill atleast 20 ltrs of engine oil <br />
    <Button color='green'onClick={this.oilclick} content='Topup now' />
    </Popup.Content>

  </Popup>
  <Popup
      id="engine-oil-desc"
    open = {this.state.oilopen}
    inverted
    //style = {{borderRadius: 0,opacity: 0.7,padding: '2em'}}
    offset={[0, 50]}
    context={this.oilref}>
    <Popup.Content>
    <Icon name="setting loading" />  
    Engine Oil level faulty <br /> <br />
    <Button color='green' onClick={this.oilcauses} content='Causes' />
    <Button color='blue' onClick={this.oilclick} content='Ignore' />
    </Popup.Content>

  </Popup>
  
      </div>
  );
}
}

export default withSnackbar(Temp);
