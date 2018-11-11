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
        if(stateName.equals( "AL")){
          stateName = "Alabama";
        }
        if(stateName.equals("AZ")){
          stateName = "Arizona";
        }
        if(stateName.equals("AR")){
          stateName = "Arkansas";
        }
        if(stateName.equals("CA")){
          stateName = "California";
        }
        if(stateName.equals("CO")){
          stateName = "Colorado";
        }
        if(stateName.equals("CT")){
          stateName = "Connecticut";
        }
        if(stateName.equals("DE")){
          stateName = "Delaware";
        }
        if(stateName.equals("FL")){
          stateName = "Florida";
        }
        if(stateName.equals("GA")){
          stateName = "Georgia";
        }
        if(stateName.equals("ID")){
          stateName = "Idaho";
        }
        if(stateName.equals("IL")){
          stateName = "Illinois";
        }
        if(stateName.equals("IN")){
          stateName = "Indiana";
        }
        if(stateName.equals("IA")){
          stateName = "Iowa";
        }
        if(stateName.equals("KS")){
          stateName = "Kansas";
        }
        if(stateName.equals("KY")){
          stateName = "Kentucky";
        }
        if(stateName.equals("LA")){
          stateName = "Louisiana";
        }
        if(stateName.equals("ME")){
          stateName = "Maine";
        }
        if(stateName.equals("MD")){
          stateName = "Maryland";
        }
        if(stateName.equals("MA")){
          stateName = "Massachusetts";
        }
        if(stateName.equals("MI")){
          stateName = "Michigan";
        }
        if(stateName.equals("MN")){
          stateName = "Minnesota";
        }
        if(stateName.equals("MS")){
          stateName = "Mississippi";
        }
        if(stateName.equals("MO")){
          stateName = "Missouri";
        }
        if(stateName.equals("MT")){
          stateName = "Montana";
        }
        if(stateName.equals("NE")){
          stateName = "Nebraska";
        }
        if(stateName.equals("NV")){
          stateName = "Nevada";
        }
        if(stateName.equals("NH")){
          stateName = "New Hampshire";
        }
        if(stateName.equals("NJ")){
          stateName = "New Jersey";
        }
        if(stateName.equals("NM")){
          stateName = "New Mexico";
        }
        if(stateName.equals("NY")){
          stateName = "New York";
        }
        if(stateName.equals("NC")){
          stateName = "North Carolina";
        }
        if(stateName.equals("ND")){
          stateName = "North Dakota";
        }
        if(stateName.equals("OH")){
          stateName = "Ohio";
        }
        if(stateName.equals("OK")){
          stateName = "Oklahoma";
        }
        if(stateName.equals("OR")){
          stateName = "Oregon";
        }
        if(stateName.equals("PA")){
          stateName = "Pennsylvania";
        }
        if(stateName.equals("RI")){
          stateName = "Rhode Island";
        }
        if(stateName.equals("SC")){
          stateName = "South Carolina";
        }
        if(stateName.equals("SD")){
          stateName = "South Dakota";
        }
        if(stateName.equals("TN")){
          stateName = "Tennessee";
        }
        if(stateName.equals("TX")){
          stateName = "Texas";
        }
        if(stateName.equals("UT")){
          stateName = "Utah";
        }
        if(stateName.equals("VT")){
          stateName = "Vermont";
        }
        if(stateName.equals("VA")){
          stateName = "Virginia";
        }
        if(stateName.equals("WA")){
          stateName = "Washington";
        }
        if(stateName.equals("WV")){
          stateName = "West Virginia";
        }
        if(stateName.equals("WI")){
          stateName = "Wisconsin";
        }
        if(stateName.equals("WY")){
          stateName = "Wyoming";
        }
        console.log(stateName);

        for (i=0;i<data.length;i++){
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
