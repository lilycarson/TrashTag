let lat;
let lon;


function positionMap(){
    var myLocation = document.getElementById("Location").value;


    let url = 'https://api.tomtom.com/search/2/geocode/' + myLocation + '.json?key=Dz3Ei5WzQ1UJ7MoGZ2lHAr4dU3CX7jFx';
    console.log(url);
    $.ajax({

        type: "GET",
        dataType: 'json',
        url: url,
        success: function success(result) {

            lat = result.results[0].position.lat;
            lon = result.results[0].position.lon;


            map.setView([result.results[0].position.lat, result.results[0].position.lon], 8);


        }
    })
}



function getCoords (address) {
    let url = 'https://api.tomtom.com/search/2/geocode/' + address + '.json?key=Dz3Ei5WzQ1UJ7MoGZ2lHAr4dU3CX7jFx';
    //console.log(url);
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: url,
        success: function success(result) {

            lat = result.results[0].position.lat;
            lon = result.results[0].position.lon;
        }
    })
}






