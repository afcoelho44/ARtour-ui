const url = "http://localhost:8080/api/establishment/all";

let establishments = [];
function getEstablishment() {
  axios
    .get(url)
    .then((response) =>
      response.data.forEach((establishment) => {
        establishments.push(establishment);
      })
    )
    .catch((erro) => console.log(erro));
}
window.onload = () => {
  getEstablishment();
  console.log(establishments);

  let testeEntityAdded = false;

  const entityScale = {
    x: 9,
    y: 9,
    z: 9,
  };

  // const camera = document.querySelector("[gps-new-camera]");
  console.log("ate aqui eu chego");
  // camera.addEventListener("gps-camera-update-position", (e) => {
  //   console.log("oi ana");
  //   if (!testeEntityAdded) {
  //     alert(
  //       `Pegue a primeira posicao: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
  //     );

      const scene = document.querySelector("a-scene");

      establishments.forEach((establishment) => {
        addEstablishmentInMap(/*adiciona */ establishment /*na*/, scene);
        console.log(establishment.name + " adicionado na cena");
      });
    }
    //testeEntityAdded = true;
  // });

  function addEstablishmentInMap(establishment, scene) {
    const entity = document.createElement("a-entity");
    entity.setAttribute("gps-new-entity-place", {
      latitude: establishment.latitude,
      longitude: establishment.longitude,
    });
    entity.setAttribute("scale", entityScale);
    scene.append(entity);
  }
// };
