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

class Mini extends React.Component {
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
       
        <table cellpadding="15">
          <tr>
            <td>
            <ReactSpeedometer
        width={450}
        height={260}
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
        width={450}
        height={260}
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
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <br /><br /><br /><br />   
        <Button circular color="red" size="huge" onClick={()=> document.location.href="http://localhost:3000/dash1"} icon="arrow right" />
        </td>
        </tr >
        <tr>
     
        <td>
        <ReactSpeedometer
        width={450}
        height={260}
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
          
          <td>
  <ReactSpeedometer
        width={450}
        height={260}
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
 
        </tr >
    
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

export default withSnackbar(Mini);
