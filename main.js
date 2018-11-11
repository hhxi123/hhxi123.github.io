var pinx = 39.0997;
var piny = -94.5786;
var pop_density = [];
var data = [];

//main function
window.onload = function() {

  window.addEventListener("mouseover", divMove, false);

  L.mapquest.key = 'QZXfVqkFCHX7nVebfnJDNHN4rn5DVftf';
  //first mapquest key: vYcB2ukMaEGdV9xsGvmnIqMhlnL6dadU
  //second mapquest key: QZXfVqkFCHX7nVebfnJDNHN4rn5DVftf
// 'map' refers to a <div> element with the ID map
  map = L.mapquest.map('map', {
    center: [39.0997, -94.5786],
    layers: L.mapquest.tileLayer('map'),
    zoom: 5,
  });

  textMarker = L.mapquest.textMarker([39.0997, -94.5786], {
    text: 'Place Bomb Here',
    //subtext: pinx + ', ' + piny,
    position: 'right',
    type: 'circle',
    draggable: true,
    icon: {
      primaryColor: '#333333',
      secondaryColor: '#333333',
      size: 'sm'
    }
  }).addTo(map);
  console.log(textMarker);


  $.ajax({
      url: "pop_density.csv",
      async: false,
      success: function (csv) {
          data = $.csv.toObjects(csv);
          console.log(data);
      },
      dataType: "text",
      complete: function (data) {
          // call a function on complete

      }
  });
//   $.ajax({
//     type: 'GET',
//     url: 'pop_density.csv',
//     dataType: 'text',
//     success: function(data) {processData(data)},
//   });
// }
//
// function processData(text) {
//     var arrData = text.split(/\r\n|\n/);
//     var cols = arrData[0].split(',');
//
//     for (var i=1; i<arrData.length; i++) {
//         var data = arrData[i].split(',');
//         if (data.length == cols.length) {
//
//             var t = [];
//             for (var j=0; j<cols.length; j++) {
//                 t.push(cols[j]+":"+data[j]);
//             }
//             popDensTable.push(t);
//         }
//     }
//
//     console.log(popDensTable);
// }
}

var oldLatLng;

function divMove(e){
  var latitude = textMarker._latlng[Object.keys(textMarker._latlng)[0]];
  var longitude = textMarker._latlng[Object.keys(textMarker._latlng)[1]]
  if (textMarker.getLatLng() != oldLatLng) {
    pinx = e.clientx;
    piny = e.clientY;
    console.log(textMarker.getLatLng());
    document.getElementById('coords').innerHTML = '' +  latitude + ' ' + longitude;

    fetch('http://open.mapquestapi.com/geocoding/v1/reverse?key=' + L.mapquest.key +
      '&location=' + latitude + ','+ longitude + '&includeRoadMetadata=true&includeNearestIntersection=true')
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        console.log(data);
        var stateName = data["results"][0]["locations"][0]["adminArea3"];
        if(stateName.valueOf()==("AL")){
          stateName = "Alabama";
        }
        if(stateName.valueOf()==("AZ")){
          stateName = "Arizona";
        }
        if(stateName.valueOf()==("AR")){
          stateName = "Arkansas";
        }
        if(stateName.valueOf()==("CA")){
          stateName = "California";
        }
        if(stateName.valueOf()==("CO")){
          stateName = "Colorado";
        }
        if(stateName.valueOf()==("CT")){
          stateName = "Connecticut";
        }
        if(stateName.valueOf()==("DE")){
          stateName = "Delaware";
        }
        if(stateName.valueOf()==("FL")){
          stateName = "Florida";
        }
        if(stateName.valueOf()==("GA")){
          stateName = "Georgia";
        }
        if(stateName.valueOf()==("ID")){
          stateName = "Idaho";
        }
        if(stateName.valueOf()==("IL")){
          stateName = "Illinois";
        }
        if(stateName.valueOf()==("IN")){
          stateName = "Indiana";
        }
        if(stateName.valueOf()==("IA")){
          stateName = "Iowa";
        }
        if(stateName.valueOf()==("KS")){
          stateName = "Kansas";
        }
        if(stateName.valueOf()==("KY")){
          stateName = "Kentucky";
        }
        if(stateName.valueOf()==("LA")){
          stateName = "Louisiana";
        }
        if(stateName.valueOf()==("ME")){
          stateName = "Maine";
        }
        if(stateName.valueOf()==("MD")){
          stateName = "Maryland";
        }
        if(stateName.valueOf()==("MA")){
          stateName = "Massachusetts";
        }
        if(stateName.valueOf()==("MI")){
          stateName = "Michigan";
        }
        if(stateName.valueOf()==("MN")){
          stateName = "Minnesota";
        }
        if(stateName.valueOf()==("MS")){
          stateName = "Mississippi";
        }
        if(stateName.valueOf()==("MO")){
          stateName = "Missouri";
        }
        if(stateName.valueOf()==("MT")){
          stateName = "Montana";
        }
        if(stateName.valueOf()==("NE")){
          stateName = "Nebraska";
        }
        if(stateName.valueOf()==("NV")){
          stateName = "Nevada";
        }
        if(stateName.valueOf()==("NH")){
          stateName = "New Hampshire";
        }
        if(stateName.valueOf()==("NJ")){
          stateName = "New Jersey";
        }
        if(stateName.valueOf()==("NM")){
          stateName = "New Mexico";
        }
        if(stateName.valueOf()==("NY")){
          stateName = "New York";
        }
        if(stateName.valueOf()==("NC")){
          stateName = "North Carolina";
        }
        if(stateName.valueOf()==("ND")){
          stateName = "North Dakota";
        }
        if(stateName.valueOf()==("OH")){
          stateName = "Ohio";
        }
        if(stateName.valueOf()==("OK")){
          stateName = "Oklahoma";
        }
        if(stateName.valueOf()==("OR")){
          stateName = "Oregon";
        }
        if(stateName.valueOf()==("PA")){
          stateName = "Pennsylvania";
        }
        if(stateName.valueOf()==("RI")){
          stateName = "Rhode Island";
        }
        if(stateName.valueOf()==("SC")){
          stateName = "South Carolina";
        }
        if(stateName.valueOf()==("SD")){
          stateName = "South Dakota";
        }
        if(stateName.valueOf()==("TN")){
          stateName = "Tennessee";
        }
        if(stateName.valueOf()==("TX")){
          stateName = "Texas";
        }
        if(stateName.valueOf()==("UT")){
          stateName = "Utah";
        }
        if(stateName.valueOf()==("VT")){
          stateName = "Vermont";
        }
        if(stateName.valueOf()==("VA")){
          stateName = "Virginia";
        }
        if(stateName.valueOf()==("WA")){
          stateName = "Washington";
        }
        if(stateName.valueOf()==("WV")){
          stateName = "West Virginia";
        }
        if(stateName.valueOf()==("WI")){
          stateName = "Wisconsin";
        }
        if(stateName.valueOf()==("WY")){
          stateName = "Wyoming";
        }
        console.log(stateName);
        var i;
        var x, count = 0;
        for (x in data) {
          count++;
        }
        for(i=0;i<count;i++){
          console.log(data[i]["STATE_OR_REGION"]);
          if(stateName.equalsIgnoreCase(data[i]["STATE_OR_REGION"])){
            console.log(stateName + " Population: " + data[i]["2010_POPULATION"]);
          }
        }
        document.getElementById('state').innerHTML = stateName;
        oldLatLng = textMarker.getLatLng();
    })
  }
}

$("#Detonate").click(detonate);

function detonate(lat, lng){
  fetch('http://open.mapquestapi.com/geocoding/v1/reverse?key=' + L.mapquest.key +
    '&location=' + latitude + ','+ longitude + '&includeRoadMetadata=true&includeNearestIntersection=true').then(function(data) {
        return data.json();
    })

}
