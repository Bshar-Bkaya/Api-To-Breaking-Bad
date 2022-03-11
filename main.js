// main variables
let selectActors = document.querySelector(".info .header .actors");
let nameActor = document.querySelector(".info .header .name");
let nickname = document.querySelector(".info .nickname");
let image = document.querySelector(".info .image");
let birthday = document.querySelector(".info .birthday");

// Get API
async function getApi() {
  const response = await fetch("https://www.breakingbadapi.com/api/characters");
  const data = await response.json();

  // data.map((actor) => {
  //   selectActors.innerHTML += `<option value="">${actor.name}</option>`;
  // });

  //  /// in another way ///
  //loop to add actor name to select option
  selectActors.innerHTML = `<select>${data.map((actor) => {
    return `<option>${actor.name}</option>`;
  })}
    </select>`;

  // Set default info
  nameActor.innerText = data[0].name;
  nickname.innerText = data[0].nickname;
  image.src = data[0].img;
  birthday.innerText = "Birthday: " + data[0].birthday;

  // Get Info To Actor On Change
  selectActors.addEventListener("change", () => {
    nameActor.innerText = selectActors.value;
    nickname.innerText = data[selectActors.selectedIndex].nickname;
    image.src = data[selectActors.selectedIndex].img;
    birthday.innerText =
      "Birthday: " + data[selectActors.selectedIndex].birthday;
  });
}

getApi();
