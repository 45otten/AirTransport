// preloader
let preloader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

//switch values

document.getElementById("switch-value").onclick = function () {
  let value1 = document.getElementById("value-to-shift-1").value;
  let value2 = document.getElementById("value-to-shift-2").value;
  document.getElementById("value-to-shift-1").value = value2;
  document.getElementById("value-to-shift-2").value = value1;
};

//toggle pathway

let toggle_pathway = document.getElementById("toggle-pathway");
let pathway = document.getElementById("pathway");

toggle_pathway.addEventListener("change", function () {
  if (toggle_pathway.checked) {
    pathway.classList.remove("hidden");
  } else {
    pathway.classList.add("hidden");
  }
});

//Show transport map

let showmap_1 = document.getElementById("cab_map_1");
let togglemap_1 = document.getElementById("show_map_1");

togglemap_1.addEventListener("click", function () {
  if (showmap_1.classList.contains("hidden")) {
    showmap_1.classList.remove("hidden");
    togglemap_1.textContent = "Hide Map";
    togglemap_1.style.color = "yellow";
  } else {
    showmap_1.classList.add("hidden");
    togglemap_1.textContent = "Show Map";
    togglemap_1.style.color = "";
  }
});

let showmap_2 = document.getElementById("cab_map_2");
let togglemap_2 = document.getElementById("show_map_2");

togglemap_2.addEventListener("click", function () {
  if (showmap_2.classList.contains("hidden")) {
    showmap_2.classList.remove("hidden");
    togglemap_2.textContent = "Hide Map";
    togglemap_2.style.color = "yellow";
  } else {
    showmap_2.classList.add("hidden");
    togglemap_2.textContent = "Show Map";
    togglemap_2.style.color = "";
  }
});

//search by flight
let flightRadio = document.getElementById("flightID_radio");
let flightID = document.getElementById("flightID");

flightRadio.addEventListener("change", function () {
  if (flightRadio.checked) {
    flightID.classList.remove("hidden");
  }
});
let airPortRadio = document.getElementById("airPort");
let airPortPage = document.getElementById("airPort_nav");

airPortRadio.addEventListener("change", function () {
  if (airPort.checked) {
    flightID.classList.add("hidden");
  }
});
let toggleFlight = document.getElementById("showFlightRecipt");
let flightRecipt = document.getElementById("flightRecipt");

toggleFlight.addEventListener("click", function () {
  if (flightRecipt.classList.contains("hidden")) {
    flightRecipt.classList.remove("hidden");
    flightRecipt.classList.add("flex");
  } else {
    flightRecipt.classList.remove("flex");
    flightRecipt.classList.add("hidden");
  }
});
let togglecab = document.getElementById("showcabRecipt");
let cabRecipt = document.getElementById("cabRecipt");

togglecab.addEventListener("click", function () {
  if (cabRecipt.classList.contains("hidden")) {
    cabRecipt.classList.remove("hidden");
    cabRecipt.classList.add("flex");
  } else {
    cabRecipt.classList.add("hidden");
    cabRecipt.classList.remove("flex");
  }
});

//Flights Forms

let flightsTabToggle = document.getElementById("toggleflights");
let atTabToggle = document.getElementById("toggleAirtransports");
let bookingTabToggle = document.getElementById("togglemybooking");
let statusTabToggle = document.getElementById("toggleflightstatus");
let flightsTab = document.getElementById("flights");
let atTab = document.getElementById("airTransports");
let bookingTab = document.getElementById("myBookingRecipt");
let statusTab = document.getElementById("flightStatus");

function hideAllTabs() {
  flightsTab.classList.add("hidden");
  atTab.classList.add("hidden");
  bookingTab.classList.add("hidden");
  statusTab.classList.add("hidden");
}

function deactivateAllToggles() {
  flightsTabToggle.classList.remove("active");
  atTabToggle.classList.remove("active");
  bookingTabToggle.classList.remove("active");
  statusTabToggle.classList.remove("active");
}

function showTab(tabToggle, tabContent) {
  tabToggle.classList.add("active");
  tabContent.classList.remove("hidden");
  tabContent.classList.add("translateEffect");
}

flightsTabToggle.addEventListener("click", function () {
  hideAllTabs();
  deactivateAllToggles();
  showTab(flightsTabToggle, flightsTab);
});

atTabToggle.addEventListener("click", function () {
  hideAllTabs();
  deactivateAllToggles();
  showTab(atTabToggle, atTab);
});

bookingTabToggle.addEventListener("click", function () {
  hideAllTabs();
  deactivateAllToggles();
  showTab(bookingTabToggle, bookingTab);
});

statusTabToggle.addEventListener("click", function () {
  hideAllTabs();
  deactivateAllToggles();
  showTab(statusTabToggle, statusTab);
});
let islMapToggle = document.getElementById("islMapToggle");
let lhrMapToggle = document.getElementById("lhrMapToggle");
let krhMapToggle = document.getElementById("krhMapToggle");
let mulMapToggle = document.getElementById("mulMapToggle");
let fgMapToggle = document.getElementById("fgMapToggle");
let pshMapToggle = document.getElementById("pshMapToggle");


let islMap = document.getElementById("islMap");
let krhMap = document.getElementById("krhMap");
let mulMap = document.getElementById("mulMap");
let lhrMap = document.getElementById("lhrMap");
let fgMap = document.getElementById("fgMap");
let pshMap = document.getElementById("pshMap");

function toggleAirportLocation(cityMapToggle, cityMap) {
  if (cityMap.classList.contains("hidden")) {
    cityMap.classList.remove("hidden");
    cityMap.classList.add("flex");
    cityMapToggle.textContent = "Hide Location";
    cityMapToggle.style.color = "red";
  } else {
    cityMap.classList.remove("flex");
    cityMap.classList.add("hidden");
    cityMapToggle.textContent = "Show Location";
    cityMapToggle.style.color = '';
  }
}

islMapToggle.addEventListener('click', function () {
  toggleAirportLocation(islMapToggle, islMap);
});
krhMapToggle.addEventListener('click', function () {
  toggleAirportLocation(krhMapToggle, krhMap);
});
mulMapToggle.addEventListener('click', function () {
  toggleAirportLocation(mulMapToggle, mulMap);
});
lhrMapToggle.addEventListener('click', function () {
  toggleAirportLocation(lhrMapToggle, lhrMap);
});
fgMapToggle.addEventListener('click', function () {
  toggleAirportLocation(fgMapToggle, fgMap);
});
pshMapToggle.addEventListener('click', function () {
  toggleAirportLocation(pshMapToggle, pshMap);
});
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

let reverseAnimation=document.querySelector('.slide-up');

reverseAnimation.addEventListener('mouseenter',function(){
  reverseAnimation.style.animationDirection = 'normal';
  reverseAnimation.style.animationPlayState = 'running';
})

reverseAnimation.addEventListener('mouseleave', function(){
  reverseAnimation.style.animationDirection = 'reverse';
})
//carTwoModel

let pickUpDateValue = document.getElementById('pickUpDateValue');
let pickUpTimeValue = document.getElementById('pickUpTimeValue');
let pickUpDate = document.getElementById('pickUpDate');
let pickUpTime = document.getElementById('pickUpTime');
let checkMarkOne = document.getElementById('checkMarkOne');
let checkOne = document.querySelector('.checkOne');

pickUpDateValue.addEventListener('change', function() {
  pickUpDate.textContent = pickUpDateValue.value;
});

pickUpTimeValue.addEventListener('change', function() {
  pickUpTime.textContent = pickUpTimeValue.value;
});

