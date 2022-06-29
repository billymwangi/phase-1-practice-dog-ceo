// console.log('%c HI', 'color: firebrick')
let breedNames = []
function getImage() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then((response)=> {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        for (let i = 0; i < data.message.length; i++) {
          let imageDiv = document.getElementById("dog-image-container");
          let image = document.createElement("img");
          image.id = "img";
          imageDiv.appendChild(image);
          img.src = data.message[i];
        }
      });
  }
getImage()

function getBreed() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response)=> {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        for (breed in data.message) {
            let nameDiv = document.getElementById("dog-breeds");
            let list = document.createElement("li");
            list.innerText = breed;
            nameDiv.appendChild(list);
            breedNames.push(breed);
            list.addEventListener("click", () => {
              list.style.color = "blue";
            });
          }
      });
  }
getBreed()

