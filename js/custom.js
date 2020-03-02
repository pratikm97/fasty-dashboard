  var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontFamily = 'akkurat-Bold';

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1mar", "1mar", "1mar",  "1mar", "1mar ",  "1mar", "1mar"],
        datasets: [{
            label: 'TOTAL SENT', // Name the series
            data: [700,600,700,500,400,650], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
             pointHoverRadius: 6,
                pointRadius: 4,
},

             { 
             label: 'TOTAL RECEIVED', // Name the series
            data: [2000,1500,1400,1300,1100,1500], // Specify the data values array
            fill: false,
            borderColor: '#543c96', // Add custom color border (Line)
            backgroundColor: '#543c96', // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
             pointHoverRadius: 6,
                pointRadius: 4,
        },
        { 
             label: 'TOTAL IN PROGRESS', // Name the series
            data: [1000,800,900,1200,800,750], // Specify the data values array
            fill: false,
            borderColor: '#40bfcc', // Add custom color border (Line)
            backgroundColor: '#40bfcc', // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
             pointHoverRadius: 6,
                pointRadius: 4,
        }


      ]},

    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false,
       
         scales: {
    xAxes: [{
      gridLines: {
        display: false
      },

      ticks: {
          beginAtZero:true,
          fontColor: '#939598',
          defaultFontFamily: 'akkurat-Bold',
          fontSize: 12,
          tickMarkLength:5,
       }

    }],
    yAxes: [{
      gridLines: {
          defaultFontFamily: 'akkurat-Bold',
          fontSize: 12,
        color: "#e1e1e1",
        border: [1, 5],
        drawBorder: false,
        
      },

      ticks: {
  beginAtZero:true,
          fontColor: '#939598',
          defaultFontFamily: 'akkurat-Bold',
        tickMarkLength:5,
      }
     
    }]
  },
    tooltips: {
       mode: 'point',
      cornerRadius: 1,
      caretSize: 8,
      xPadding: 20,
      yPadding: 20,
      backgroundColor: '#000000',
      titleFontStyle: 'normal',
      titleMarginBottom: 10,
      titleSpacing:10,
    }
    }
    
});
  // chart js end



  jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {right:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
   
    data: {
    // labels: [
    //     'sent',
    //     'recieved',
    //     'Inprogress'
    // ], 
      datasets:[{
          backgroundColor: [ "#5f2b6b" ,"#44d5c2",  "#2d83c5" ],
          borderWidth: 1,
          // donutWidth: 2,
         data: [28, 20, 52 ]
        }]
    }, 
    options: {
      cutoutPercentage: 90,
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 

    }

     
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("recpt");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
});



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'recpt') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.setAttribute('class', 'recpt');
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

 
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'recpt') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement1() {
  var li = document.createElement("li");
  li.setAttribute('class', 'add-list');
  var inputValue = document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL1").appendChild(li);
  }
  document.getElementById("myInput1").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

$(document).on('click', '.close', function () {
    $(this).parents('li').css('display' , 'none');
});
