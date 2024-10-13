const container = document.createElement("div");
container.classList = "container";

const divTwo = document.createElement("div");
divTwo.classList = "div-two";

const button = document.createElement("button");
button.classList = "btn";
button.textContent = "Поиск";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введите название города";
input.classList = "input-text";

divTwo.append(input, button);
container.append(divTwo);
document.body.append(container);

async function weather() {
  try {
    console.log(input.value);
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=815d8d58ed8249439da161543241210&q=${input.value}`
    );

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "fenchData";

    const h1 = document.createElement("h1");
    h1.classList = "title";
    h1.textContent = `${data.location.name}`;

    const h2 = document.createElement("h2");
    h2.textContent = `Температура: ${data.current.temp_c}°C`;

    const p = document.createElement("p");
    p.classList = "paragraph";
    p.textContent = `Ветер: ${data.current.wind_kph} км/ч`;

    const p2 = document.createElement("p");
    p2.classList = "paragraph";
    p2.textContent = `Влажность: ${data.current.humidity} %`;

    div.append(h1, h2, p2, p);
    document.body.append(div);
  } catch (error) {
    console.error("Error");
  }
}

button.addEventListener("click", () => {
  weather();
});
