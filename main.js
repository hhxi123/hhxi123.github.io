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
    zoom: 10,
  });

  var options = {
    elt: document.getElementById('map'),       // ID of map element on page
    zoom: 10,                                  // initial zoom level of the map
    latLng: { lat: 39.7439, lng: -105.0200 },  // center of map in latitude/longitude
    mtype: 'map',                              // map type (map, sat, hyb); defaults to map
    bestFitMargin: 0,                          // margin offset from map viewport when applying a bestfit on shapes
    zoomOnDoubleClick: false                    // disable map from zooming in when double-clicking
  };

// construct an instance of MQA.TileMap with the options object
  window.map = L.mapquest.TileMap(options);

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

  textMarker2 = L.mapquest.textMarker([39.0997, -94.5786], {
    text: '',
    //subtext: pinx + ', ' + piny,
    position: 'right',
    type: 'circle',
    draggable: false,
    icon: {
      primaryColor: '#ff0000',
      secondaryColor: '#ff0000',
      size: 'lg'
    }
  }).addTo(map);


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
  var longitude = textMarker._latlng[Object.keys(textMarker._latlng)[1]];
  if (textMarker.getLatLng() != oldLatLng) {
    textMarker2.setLatLng(textMarker.getLatLng());

    pinx = e.clientx;
    piny = e.clientY;
    console.log(textMarker.getLatLng());
    document.getElementById('coords').innerHTML = '' +  latitude + ' ' + longitude;

    fetch('https://open.mapquestapi.com/geocoding/v1/reverse?key=' + L.mapquest.key +
      '&location=' + latitude + ','+ longitude + '&includeRoadMetadata=true&includeNearestIntersection=true')
    .then(function(data) {
        return data.json();
    })
    .then(function(content) {
        console.log(content);
        var stateName = content["results"][0]["locations"][0]["adminArea3"];
        if(stateName ==("AL")){
          stateName = "Alabama";
        }
        if(stateName == ("AZ")){
          stateName = "Arizona";
        }
        if(stateName == ("AR")){
          stateName = "Arkansas";
        }
        if(stateName == ("CA")){
          stateName = "California";
        }
        if(stateName == ("CO")){
          stateName = "Colorado";
        }
        if(stateName == ("CT")){
          stateName = "Connecticut";
        }
        if(stateName == ("DE")){
          stateName = "Delaware";
        }
        if(stateName == ("FL")){
          stateName = "Florida";
        }
        if(stateName == ("GA")){
          stateName = "Georgia";
        }
        if(stateName == ("ID")){
          stateName = "Idaho";
        }
        if(stateName == ("IL")){
          stateName = "Illinois";
        }
        if(stateName == ("IN")){
          stateName = "Indiana";
        }
        if(stateName == ("IA")){
          stateName = "Iowa";
        }
        if(stateName == ("KS")){
          stateName = "Kansas";
        }
        if(stateName == ("KY")){
          stateName = "Kentucky";
        }
        if(stateName == ("LA")){
          stateName = "Louisiana";
        }
        if(stateName == ("ME")){
          stateName = "Maine";
        }
        if(stateName == ("MD")){
          stateName = "Maryland";
        }
        if(stateName == ("MA")){
          stateName = "Massachusetts";
        }
        if(stateName == ("MI")){
          stateName = "Michigan";
        }
        if(stateName == ("MN")){
          stateName = "Minnesota";
        }
        if(stateName == ("MS")){
          stateName = "Mississippi";
        }
        if(stateName == ("MO")){
          stateName = "Missouri";
        }
        if(stateName == ("MT")){
          stateName = "Montana";
        }
        if(stateName == ("NE")){
          stateName = "Nebraska";
        }
        if(stateName == ("NV")){
          stateName = "Nevada";
        }
        if(stateName == ("NH")){
          stateName = "New Hampshire";
        }
        if(stateName == ("NJ")){
          stateName = "New Jersey";
        }
        if(stateName == ("NM")){
          stateName = "New Mexico";
        }
        if(stateName == ("NY")){
          stateName = "New York";
        }
        if(stateName == ("NC")){
          stateName = "North Carolina";
        }
        if(stateName == ("ND")){
          stateName = "North Dakota";
        }
        if(stateName == ("OH")){
          stateName = "Ohio";
        }
        if(stateName == ("OK")){
          stateName = "Oklahoma";
        }
        if(stateName == ("OR")){
          stateName = "Oregon";
        }
        if(stateName == ("PA")){
          stateName = "Pennsylvania";
        }
        if(stateName == ("RI")){
          stateName = "Rhode Island";
        }
        if(stateName == ("SC")){
          stateName = "South Carolina";
        }
        if(stateName == ("SD")){
          stateName = "South Dakota";
        }
        if(stateName == ("TN")){
          stateName = "Tennessee";
        }
        if(stateName == ("TX")){
          stateName = "Texas";
        }
        if(stateName == ("UT")){
          stateName = "Utah";
        }
        if(stateName == ("VT")){
          stateName = "Vermont";
        }
        if(stateName == ("VA")){
          stateName = "Virginia";
        }
        if(stateName == ("WA")){
          stateName = "Washington";
        }
        if(stateName == ("WV")){
          stateName = "West Virginia";
        }
        if(stateName == ("WI")){
          stateName = "Wisconsin";
        }
        if(stateName == ("WY")){
          stateName = "Wyoming";
        }
        //console.log(stateName);
        // var i;
        // var x, count = 0;
        // for (x in data) {
        //   count++;
        // }
        // console.log(count)
        for(i=0;i<data.length;i++){
          if(stateName == (data[i]["STATE_OR_REGION"])){
            console.log(stateName + " 2010 Population: " + data[i]["2010_POPULATION"]);
          }
        }
        document.getElementById('state').innerHTML = stateName;
        oldLatLng = textMarker.getLatLng();
      });
  }
}

$("#Detonate").click(detonate);

function detonate(lat, lng){
  fetch('https://open.mapquestapi.com/geocoding/v1/reverse?key=' + L.mapquest.key +
    '&location=' + latitude + ','+ longitude + '&includeRoadMetadata=true&includeNearestIntersection=true').then(function(data) {
        return data.json();
    })

}
