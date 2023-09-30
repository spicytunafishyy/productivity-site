/* -----------------SCRIPT TO MODIFY COUNTERS IN "ADD EVENT" POPUP---------------------- */
/* Note: Code is redundant for all 7 days. Try to find a more efficient solution.*/


/******************** SUNDAY *********************/
var counterValue1 = document.querySelector("#cv1");
var counterIncrement1 = document.querySelector("#ci1");
var counterDecrement1 = document.querySelector("#cd1");
var count1 = 0;

this.counterIncrement1.addEventListener('click', () => {
    count1++
    this.counterValue1.setAttribute("value", count1);

});

this.counterDecrement1.addEventListener('click', () => {
    if (!(this.count1 <= 0)) {
        this.count1--
    }
    this.counterValue1.setAttribute("value", count1);
});

/******************** MONDAY *********************/
var counterValue2 = document.querySelector("#cv2");
var counterIncrement2 = document.querySelector("#ci2");
var counterDecrement2 = document.querySelector("#cd2");
var count2 = 0;

this.counterIncrement2.addEventListener('click', () => {
    count2++
    this.counterValue2.setAttribute("value", count2);

});

this.counterDecrement2.addEventListener('click', () => {
    if (!(this.count2 <= 0)) {
        this.count2--
    }
    this.counterValue2.setAttribute("value", count2);
});

/******************** TUESDAY *********************/
var counterValue3 = document.querySelector("#cv3");
var counterIncrement3 = document.querySelector("#ci3");
var counterDecrement3 = document.querySelector("#cd3");
var count3 = 0;

this.counterIncrement3.addEventListener('click', () => {
    count3++
    this.counterValue3.setAttribute("value", count3);

});

this.counterDecrement3.addEventListener('click', () => {
    if (!(this.count3 <= 0)) {
        this.count3--
    }
    this.counterValue3.setAttribute("value", count3);
});

/******************** WEDNESDAY *********************/
var counterValue4 = document.querySelector("#cv4");
var counterIncrement4 = document.querySelector("#ci4");
var counterDecrement4 = document.querySelector("#cd4");
var count4 = 0;

this.counterIncrement4.addEventListener('click', () => {
    count4++
    this.counterValue4.setAttribute("value", count4);

});

this.counterDecrement4.addEventListener('click', () => {
    if (!(this.count4 <= 0)) {
        this.count4--
    }
    this.counterValue4.setAttribute("value", count4);
});

/******************** THURSDAY *********************/
var counterValue5 = document.querySelector("#cv5");
var counterIncrement5 = document.querySelector("#ci5");
var counterDecrement5 = document.querySelector("#cd5");
var count5 = 0;

this.counterIncrement5.addEventListener('click', () => {
    count5++
    this.counterValue5.setAttribute("value", count5);

});

this.counterDecrement5.addEventListener('click', () => {
    if (!(this.count5 <= 0)) {
        this.count5--
    }
    this.counterValue5.setAttribute("value", count5);
});

/******************** FRIDAY *********************/
var counterValue6 = document.querySelector("#cv6");
var counterIncrement6 = document.querySelector("#ci6");
var counterDecrement6 = document.querySelector("#cd6");
var count6 = 0;

this.counterIncrement6.addEventListener('click', () => {
    count6++
    this.counterValue6.setAttribute("value", count6);

});

this.counterDecrement6.addEventListener('click', () => {
    if (!(this.count6 <= 0)) {
        this.count6--
    }
    this.counterValue6.setAttribute("value", count6);
});

/******************** SATURDAY *********************/
var counterValue7 = document.querySelector("#cv7");
var counterIncrement7 = document.querySelector("#ci7");
var counterDecrement7 = document.querySelector("#cd7");
var count7 = 0;

this.counterIncrement7.addEventListener('click', () => {
    count7++
    this.counterValue7.setAttribute("value", count7);

});

this.counterDecrement7.addEventListener('click', () => {
    if (!(this.count7 <= 0)) {
        this.count7--
    }
    this.counterValue7.setAttribute("value", count7);
});

/******************************************************************/
