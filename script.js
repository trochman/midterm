

function initMap() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var geocoord1 = {
          lat: position.coords.latitude, 
          lng: position.coords.longitude 
        };
      }
    );
    

  $.getJSON( "map.json",
  function(jsonData) {

 //rename this vairable below     
       geocoord1 = {
          lat: 38.3554817,
          lng: -122.5596772
      };
                        
  const map1 = new google.maps.Map(
    
  document.getElementById("map"), {
    zoom: 11,
    center: geocoord1,
    
  }) 

  markers = [];

  for ( var dta=0; dta < jsonData.length; dta++ )
{
                      var geocoord1 = {
                          lat: jsonData[dta].lat,
                          lng: jsonData[dta].lng
                      };
                      markers[dta] = new google.maps.Marker(
                          {
                              position: geocoord1,
                              map: map1,
                              title: jsonData[dta].title,
                              custom_property: jsonData[dta].description
                          }
  
                      );    
                      
                      markers[dta].addListener(
                        'click',
                        function() {
                            var info1 = new google.maps.InfoWindow(
                                { content: this.custom_property }
                            );

                            info1.open(map1, this);
                        }
                    );}



var markers = new google.maps.Marker({
  position: geocoord1,
  map: map1,
  title: 'Here I am!'
}
                        );

                      


}               
               );
               
                
            }       
    
          }
window.initMap = initMap;
