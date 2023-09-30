// import React from 'react';
// import './Everything.css';

// function Graph(){
//     return(
//         // <!--container for the webpage-->
//         <div class="webPage" id="graphPage">
//             {/* <!-- create menu for add --> */}
//             {/* <div class="popup" id="addPop">
//                 <h1>Add An Event</h1>
//                 <div class="wrapper">
//                     <h2 class="popupTxt">Sunday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>

//                 <h2 class="popupTxt">Monday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>

//                 <h2 class="popupTxt">Tuesday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>
                
//                 <h2 class="popupTxt">Wednesday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>

//                 <h2 class="popupTxt">Thursday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>

//                 <h2 class="popupTxt">Friday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>

//                 <h2 class="popupTxt">Saturday</h2>
//                 <div class="quantity-counter">
//                     <button id="counter-decrement" class="decrement">-</button>
//                     <input id="counter-value" class="value" type="number" value="0"></input>
//                     <button id="counter-increment" class="increment">+</button>
//                 </div>
//                 </div>
//             </div> */}

//             {/* <!--floating options to open edit menu--> */}
//             {/* <div class="fab">
//                 <img class="options" title="Edit Events" src="../icons/fab/fab/edit-icon.png"></img>
//             </div>
//             <div class="box">
//                 <a class="item item1" title="Add Event" id="obj1">
//                     <img class="options" src="../icons/fab/fab/plus-icon.png"></img>
//                 </a>
//                 <a href="" class="item item2" title="Remove Event" id="obj2">
//                     <img class="options" src="../icons/fab/fab/minus-icon.png"></img>
//                 </a>
//             </div> */}

//             {/* <!-- script to increment/decrement popup --> */}
//             {/* <script>
//                 var counterValue = document.querySelector(".value");
//                 var counterIncrement = document.querySelector(".increment");
//                 var counterDecrement = document.querySelector(".decrement");
//                 var count = 0;

//                 this.counterIncrement.addEventListener('click', () ={'>'} {
//                     this.count++
//                     this.counterValue.setAttribute("value", count);
                    
//                 });

//                 this.counterDecrement.addEventListener('click', () => {
//                     if (!(this.count<=0)){
//                         this.count--
//                     }
//                     this.counterValue.setAttribute("value", count);
//                 });


//             </script> */}


//             {/* <!--graph title--> */}
//             <h1 id="functionTitle">Your Availability</h1>

//                 {/* <!-- container for graph --> */}
//                 <div id="container">
//                     {/* <!HTML canvas to draw out the chart> */}
//                         <canvas id="myChart"></canvas>
//                 </div>

//                 {/* <!--Source CDN for Chart.js library--> */}
//                 <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

//                 {/* <!--Source CDN for color palette plugin--> */}
//                 <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-colorschemes"></script>
//                 <script src="https://unpkg.com/chartjs-plugin-colorschemes"></script>

//                 {/* <!--create the chart--> */}
//                 <script>
//                     /** create a constant with the html canvas element **/
//                     const ctx = document.getElementById('myChart');

//                     // default dataset for the test version (pre-DB)
//                     const db = [12, 19, 3, 5, 2, 10, 3];

//                     /** create a new chart, supply the canvas to draw on and 
//                      * instantiate the chart with bar chart values (this includes
//                      * type, labels, data points, and options)
//                      * 
//                      * this is the generic way to create a chart with Chart.js, but
//                      * there are many different charts you can create.
//                      */
//                     Chart.defaults.backgroundColor = '#bdeac2';
//                     Chart.defaults.font.size = 16;

//                     new Chart(ctx, {

//                         //specify the type of chart
//                         type: 'line',
//                         //specify the data and char stuff in general 
//                         data: {
//                             labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
//                             datasets: [{
//                                 label: 'Number of Events',
//                                 data: db,
//                                 borderWidth: 5,
//                                 borderColor: '#000000',
//                                 pointBackgroundColor: '#000000',
//                                 fill: true
//                             }]
//                         },

//                         /*COLOR PALETTE
//                         * #fae6d7
//                         * #A3C9A8
//                         * #84B59F
//                         * #50808E
//                         */

//                         //customize/style the chart
//                         options: {
//                             maintainAspectRatio: false,
//                             responsive: true,
//                             tension: .3,
//                             scales: {
//                                 y: {
//                                     beginAtZero: true,
//                                     grid: {
//                                         display: false
//                                     },
//                                     font: {
//                                         family: 'Sunny'
//                                     }
//                                 },
//                                 x: {
//                                     grid: {
//                                         display: false
//                                     }
//                                 }
//                             },
//                             plugins: {
//                                 legend: {
//                                     labels: {
//                                         font: {
//                                             family: 'Sunny',
//                                             size: '20px',

//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     });



//                 </script>

//                 {/* <!--script for fab--> */}
//                 {/* <script>
//                     document.querySelector('.fab').addEventListener('click',
//                         function (e) {
//                             document.querySelector('.box').classList.toggle('box-active');
//                         }
//                     );
//                 </script> */}

//                 {/* <!--script for fab: add--> */}
//                 {/* <script>
//                     document.querySelector('#obj1').addEventListener('click',
//                         function (e) {
//                             // make the popup for adding visible
//                             const pop = document.querySelector('#addPop');
//                             pop.classList.toggle('popup-active');
//                         }
//                     );
//                 </script> */}
//                 {/* <!home page w/ graph maybe weekly distribution of productivity vs. relax time> */}
//         </div>

//     )
// };

// export default Graph;