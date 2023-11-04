window.onload = () => {
  console.log("passou!!!");
  let testeEntityAdded = false;

  const el = document.querySelector("[gps-new-camera]");

  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testeEntityAdded) {
      alert(
        `Pegue a primeira posicao: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      const entity = document.querySelector("a-entity");
      entity.setAttribute("scale", {
        x: 9,
        y: 9,
        z: 9,
      });
      entity.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude + 0.001,
        longitude: e.detail.position.longitude,
      });
      document.querySelector("a-scene").append(entity);
    }
    testeEntityAdded = true;
  });
};
