const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  if (location.trim() === "")
    return (messageOne.textContent = "Location should provided!");

  fetch(`/weather?address=${location}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
});
