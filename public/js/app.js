const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");
const message3 = document.querySelector("#message-3");
const message4 = document.querySelector("#message-4");
const message5 = document.querySelector("#message-5");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  message1.textContent = "Loading..!!";

  message2.textContent = "";
  message3.textContent = "";
  message4.textContent = "";
  message5.textContent = "";

  fetch(`http://localhost:5000/weather?address=${location}`)
    .then(response => {
      response
        .json()
        .then(data => {
          if (data.error) {
            message1.textContent = data.error;
          } else {
            message1.textContent = `Location: ${data.Location}`;
            message2.textContent = `Latitude: ${data.Latitude}`;
            message3.textContent = `Longitude: ${data.Longitude}`;
            message4.textContent = `Rain Probability: ${data.Rain_Probability}`;
            message5.textContent = `Temperature: ${data.Temperature}`;
            console.log(data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});
