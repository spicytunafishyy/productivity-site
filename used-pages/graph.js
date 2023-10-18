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


/* -----------------SCRIPT TO MODIFY COUNTERS IN "REMOVE EVENT" POPUP---------------------- */


/******************** SUNDAY *********************/
var CV1 = document.querySelector("#CV1");
var CI1 = document.querySelector("#CI1");
var CD1 = document.querySelector("#CD1");
var C1 = 0;

this.CI1.addEventListener('click', () => {
    C1++
    this.CV1.setAttribute("value", C1);

});

this.CD1.addEventListener('click', () => {
    if (!(this.C1 <= 0)) {
        this.C1--
    }
    this.CV1.setAttribute("value", C1);
});

/******************** MONDAY *********************/
var CV2 = document.querySelector("#CV2");
var CI2 = document.querySelector("#CI2");
var CD2 = document.querySelector("#CD2");
var C2 = 0;

this.CI2.addEventListener('click', () => {
    C2++
    this.CV2.setAttribute("value", C2);

});

this.CD2.addEventListener('click', () => {
    if (!(this.C2 <= 0)) {
        this.C2--
    }
    this.CV2.setAttribute("value", C2);
});

/******************** TUESDAY *********************/
var CV3 = document.querySelector("#CV3");
var CI3 = document.querySelector("#CI3");
var CD3 = document.querySelector("#CD3");
var C3 = 0;

this.CI3.addEventListener('click', () => {
    C3++
    this.CV3.setAttribute("value", C3);

});

this.CD3.addEventListener('click', () => {
    if (!(this.C3 <= 0)) {
        this.C3--
    }
    this.CV3.setAttribute("value", C3);
});

/******************** WEDNESDAY *********************/
var CV4 = document.querySelector("#CV4");
var CI4 = document.querySelector("#CI4");
var CD4 = document.querySelector("#CD4");
var C4 = 0;

this.CI4.addEventListener('click', () => {
    C4++
    this.CV4.setAttribute("value", C4);

});

this.CD4.addEventListener('click', () => {
    if (!(this.C4 <= 0)) {
        this.C4--
    }
    this.CV4.setAttribute("value", C4);
});

/******************** THURSDAY *********************/
var CV5 = document.querySelector("#CV5");
var CI5 = document.querySelector("#CI5");
var CD5 = document.querySelector("#CD5");
var C5 = 0;

this.CI5.addEventListener('click', () => {
    C5++
    this.CV5.setAttribute("value", C5);

});

this.CD5.addEventListener('click', () => {
    if (!(this.C5 <= 0)) {
        this.C5--
    }
    this.CV5.setAttribute("value", C5);
});

/******************** FRIDAY *********************/
var CV6 = document.querySelector("#CV6");
var CI6 = document.querySelector("#CI6");
var CD6 = document.querySelector("#CD6");
var C6 = 0;

this.CI6.addEventListener('click', () => {
    C6++
    this.CV6.setAttribute("value", C6);

});

this.CD6.addEventListener('click', () => {
    if (!(this.C6 <= 0)) {
        this.C6--
    }
    this.CV6.setAttribute("value", C6);
});

/******************** SATURDAY *********************/
var CV7 = document.querySelector("#CV7");
var CI7 = document.querySelector("#CI7");
var CD7 = document.querySelector("#CD7");
var C7 = 0;

this.CI7.addEventListener('click', () => {
    C7++
    this.CV7.setAttribute("value", C7);

});

this.CD7.addEventListener('click', () => {
    if (!(this.C7 <= 0)) {
        this.C7--
    }
    this.CV7.setAttribute("value", C7);
});

/******************************************************************/
