async function load1(){
    const response = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
    const  data= await response.json()
    var td1 = document.getElementById("td1")
    td1.innerHTML = data.features[0].properties.place
    var td2 = document.getElementById("td2")
    td2.innerHTML = data.features[0].properties.mag 
    var td3 = document.getElementById("td3")
    td3.innerHTML = data.features[1].properties.place
   var td4 = document.getElementById("td4")
   td4.innerHTML = data.features[1].properties.mag
   var td5 = document.getElementById("td5")
   td5.innerHTML = data.features[2].properties.place
   var td6 = document.getElementById("td6")
   td6.innerHTML = data.features[2].properties.mag
}
async function load2(){
    const response1 = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
    const data1 = await response1.json()
  var td7 = document.getElementById("td7")
  var td8 = document.getElementById("td8")
  var td9 = document.getElementById("td9")
  var td10 = document.getElementById("td10")
  var td11 = document.getElementById("td11")
  var td12 = document.getElementById("td12")
  var td13 = document.getElementById("td13")
  var td14 = document.getElementById("td14")
  var td15 = document.getElementById("td15")
  var td16 = document.getElementById("td16")
  var td17 = document.getElementById("td17")
  td7.innerHTML = data1.features[0].properties.place
  td8.innerHTML = data1.features[0].properties.mag
   var firstdate= data1.features[0].properties.time
   const date = new Date(firstdate)
   const formatteddata= date.toLocaleDateString()
   const formattedtime = date.toLocaleTimeString()
   td9.innerHTML = formatteddata
   td10.innerHTML = formattedtime
   td11.innerHTML = data1.features[1].properties.place
   td12.innerHTML = data1.features[1].properties.mag
   var seconddate = data1.features[1].properties.time
   const date1 = new Date(seconddate)
   const formatteddata1 =date1.toLocaleDateString()
   const formattedtime1 = date1.toLocaleTimeString()
   td13.innerHTML = formatteddata1
   td14.innerHTML = formattedtime1
   td15.innerHTML = data1.features[2].properties.place
   td16.innerHTML = data1.features[2].properties.mag
   var thirddate = data1.features[2].properties.time
   var date2 = new Date(thirddate)
   const formatteddate2= date2.toLocaleDateString() 
   const formattedtime2 = date2.toLocaleTimeString()
   td17.innerHTML = formatteddate2
   document.getElementById("td18").innerHTML = formattedtime2
   document.getElementById("td19").innerHTML = data1.features[3].properties.place
   document.getElementById("td20").innerHTML = data1.features[3].properties.mag
   var fourthtdate = data1.features[3].properties.time
   var date3 = new Date(fourthtdate)
const formatteddate3 = date3.toLocaleDateString()
const formattedtime3 = date3.toLocaleTimeString()
document.getElementById("td21").innerHTML = formatteddate3
document.getElementById("td22").innerHTML = formattedtime3


 
   




}