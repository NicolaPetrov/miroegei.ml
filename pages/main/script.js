function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }

const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `<h2>${temp}°C</h2>`;
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});



const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});

const btn1 = document.getElementById("btn");
const container1 = document.getElementById("container1");

btn.addEventListener("click", () => {
    createNotification();
});

function dev_tools(){
    alert("FOR SYSTEM ADMINISTRATION PRESS 'S' FOR DEV OPTIONS PRESS 'D'")

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 83) {
            window.location.href = "https://miroegei.ml/dev-options"
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 68) {
            window.location.href = "https://nicola.association.bg/system"
        }
    });
}

function myFunction() {
    
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("faq").style.visibility = "hidden"

  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert("FOR BETTER EXPERIENCE OPEN THE SITE FROM A COMPUTER");
  }else{
  }

  function like(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  