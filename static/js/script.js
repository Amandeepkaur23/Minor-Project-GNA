// Select URL on the basis of your requirements

const urlIPv4 = 'https://api.ipify.org?format=json'; // Returns ipv4 address
const urlIPv6 = 'https://api64.ipify.org?format=json'; // Returns ipv6 address




fetch(urlIPv4).then(function (response) {
  return response.json();
}).then(function (data) {
  document.getElementById('ip-address').innerHTML = "My Pubilic Ip: <br>" + data.ip;
  console.log(data);
  
  const urlForMoreInfo = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FpKvMGKIja9WSy9r5DoCwxFuIWUJe&ipAddress=${data.ip}`;
  let information;

  fetch(urlForMoreInfo).then(function(response){
    // information = response.json();
    return response.json();
  }).then(function(res){
      // Posting data with AJAX/JQuery without reloading the page
      $(document).ready(function () {
        $.post("/", res,
          function (datas, status) {
            console.log(datas);
        });
      });
      // information = JSON.parse(res);
      information = res;
      console.log(information);
      console.log("Done!")
  }).catch(function(){
    console.log("Error Occured!")
  });

  

}).catch(function () {
  console.log("Booo");
});


// Code Ends Here