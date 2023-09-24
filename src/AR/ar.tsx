declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["a-scene"]: any;
      ["a-entity"]: any;
      ["a-camera"]: any;
    }
  }
}

export default function Ar({ latitude, longitude }: ArProps) {
  // const distance: any = "hello!!"
  // window.addEventListener('load', () => {
  //   const entity = document.querySelector('a-entity');
  //   entity?.addEventListener('gps-entity-place-update-position', (event) => {
  //     console.log(event)
  //   })
  // })
  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-entity
          id="distance"
          gltf-model="./../assets/pin.glb"
          rotation="0 180 0"
          scale="0.3 0.3 0.3"
          gps-entity-place={"latitude: " + latitude + "; longitude:" + longitude}
        ></a-entity>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
}

type ArProps = {
  latitude?: string;
  longitude?: string;
};
