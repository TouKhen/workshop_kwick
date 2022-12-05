let user_list = document.querySelector("#user-list");

//  http://greenvelvet.alwaysdata.net/kwick/api/user/logged/937f70baa51c2511419d36373285f27f
var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "5bbff36533d38bd89719c1ecf633e801=DEFAULT%7C0%7C2M3TMlgUx3gTlaarYzHIdD28l8q9FTcNubt55%2BUGpAo%3D%7C7456bf61db3500c8bb7b3bc38082a470ce4a2ad3; PHPSESSID=5bbff36533d38bd89719c1ecf633e801"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

let json = fetch(
  "http://greenvelvet.alwaysdata.net/kwick/api/user/logged/937f70baa51c2511419d36373285f27f",
  requestOptions
)
  .then((response) => response.json())
  .then(function (result) {
    console.log(result);
  })
  .catch((error) => console.log("error", error));
