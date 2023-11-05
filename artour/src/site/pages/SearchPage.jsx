// import "https://aframe.io/releases/1.3.0/aframe.min.js";
// import "https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js";
// import "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
// import "../../js/basic.js";
// import model from "../../assets/map_point/scene.gltf";
function SearchPage() {
  return (
    <div>
      {/* <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
        renderer="antialias: true; alpha: true"
      >
        <a-assets>
          <a-assets-item id="ponto" src={model}></a-assets-item>
        </a-assets>
        <a-camera gps-new-camera="gpsMinDistance: 10"></a-camera>
        <a-entity gps-new-entity-place="longitude: -49.536828911911755; latitude:-27.048853909536568;">
          <a-gltf-model src={model}></a-gltf-model>
        </a-entity>
      </a-scene> */}
    </div>
  );
}

export default SearchPage;
