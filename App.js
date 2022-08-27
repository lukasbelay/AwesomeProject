import React from "react";
import { Renderer, TextureLoader } from "expo-three";
import { View } from "react-native";
import { GLView } from "expo-gl";
import {
  Scene,
  PerspectiveCamera,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

const App = () => {
  const onContextCreate = async (gl) => {
    const Bruh = new TextureLoader().load(require("./assets/space.jpg"));
    const scene = new Scene();
    scene.background = Bruh;
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.x = 0;
    camera.position.y = 0;
    gl.canvas = {
      width: gl.width,
      height: gl.height,
    };
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.Width, gl.Height);
    const pointLight = new THREE.AmbientLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    scene.add(pointLight);

    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xff6447 });
    const cube = new Mesh(geometry, material);
    cube.position.y = 0;
    cube.position.x = 0;

    scene.add(cube);

    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  };

  return (
    <View>
      <GLView
        onContextCreate={onContextCreate}
        style={{ width: 400, height: "100%" }}
      />
    </View>
  );
};
export default App;
