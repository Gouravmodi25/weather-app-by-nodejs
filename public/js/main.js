const submitBtn = document.querySelector("#submitBtn");
const cityInput = document.querySelector("#cityInput");
const cityName = document.querySelector("#cityName");
const tempSpan = document.querySelector("#temp span");
const temp_status = document.querySelector("#temp_status");
const dataHide = document.querySelector(".middle_layer");
const getInfo = async function (e) {
  e.preventDefault();
  let cityVal = cityInput.value;
  if (cityVal === "") {
    cityName.innerText = "Please Write  City Name Before Search";
    dataHide.classList.add("data_hide");
  } else {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8901131decf8af281fae54f7e2c8c25d`;
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      const data_obj = [data];
      cityName.innerText = `${data_obj[0].name},${data_obj[0].sys["country"]}`;
      tempSpan.innerText = Math.round(data_obj[0].main.temp);
      const temp_mood = data_obj[0].weather[0].main;
      dataHide.classList.remove("data_hide");
      console.log(temp_mood);
      if (temp_mood == "Clear") {
        temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>`;
      } else if (temp_mood == "Rain") {
        temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color: #74C0FC;"></i>`;
      } else if (temp_mood == "Clouds") {
        temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #fdfdfd;"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>`;
      }
    } catch (err) {
      cityName.innerText = "Please Write  City Name Before Search";
      dataHide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
