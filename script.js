document.getElementById("gifSubmit").addEventListener("click", function(event) {
  //debugger;
  event.preventDefault();
  const value = document.getElementById("gifInput").value;
  if (value === "")
    return;
  //console.log(value);
  const url = "https://api.giphy.com/v1/gifs/search?" + "api_key=y67BNDXNL4YC9O8FhGZ1p3QcvSf8lOmt"
   + "&q=" + value + "&limit=5&offset=0&rating=PG-13&lang=en";
   fetch(url)
      .then((response) => {
        return response.json();
  }).then((myJson) => {
    let pics = "";

    for (let i=0; i < myJson.data.length; i++)
    {
    pics += "<div class =\"recieved\">";
    pics += "<img src=\"" + myJson.data[i].images.downsized_medium.url + "\"</div>";
    //pics +=  createImage(myJson.data[i].images.downsized_medium.url);
    //pics += "</div>";
    // if (i != myJson.data.length - 1)
    //   {
    //     pics += "<div class =\"container\">";
    //   }
    pics += "</div>";
    }

    document.getElementById("resultingpics").innerHTML = pics;
  })
  })

   function createImage(url)
   {
     img = document.createElement('img');
     img.src = url;

   }
   // function createImage(url)
   // {
   //   var img = new Image();
   //   img.src = url;
   //   content.appendChild(img);
   // }
