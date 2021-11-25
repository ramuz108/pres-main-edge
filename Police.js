import React, { Component ,useEffect, useState  }  from "react";
import './police.css';
import $ from 'jquery';

class Police extends React.Component{
  componentDidMount(){
    $('#traffic-default').on('click', function(){
      $('button').removeClass('active');
      $(this).addClass('active');
      $('.light').attr('class', 'light');
      $('#light-1').attr('class', 'light strobe blue');
      $('#light-2, #light-3, #light-4, #light-5').attr('class', 'light warn on');
      $('#light-6').attr('class', 'light strobe red delay');
    })
  }

    render(){

        return(

            <div class="lightbar" >
                <div id="light-1" class="light strobe blue">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                </div>
                <div id="light-2" class="light strobe blue">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                </div>
                <div id="light-3" class="light strobe blue">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                </div>
                <div id="light-4" class="light strobe red delay">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                </div>
                <div id="light-5" class="light strobe red delay">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                </div>
                <div id="light-6" class="light strobe red delay">
                  <div class="inner-light"></div>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
                  <span class="bulb"></span>
              
                </div>
              </div>
              
             
        );
        
    }
}
export default Police;
