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
    camera.position.z = 10;
    camera.position.x = 0;
    camera.position.y = 0;
    gl.canvas = {
      width: gl.width,
      height: gl.height,
    };
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.Width, gl.Height);
    renderer.setPixelRatio(gl.devicePixelRatio);
    const pointLight = new THREE.AmbientLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    scene.add(pointLight);
    const moonTexture = new TextureLoader().load(require("./assets/moon.jpg"));
    let moon = new THREE.Mesh(
      new THREE.SphereGeometry(2, 64, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
      })
    );
    scene.add(moon);
    let Clock = new THREE.Clock();
    const render = () => {
      requestAnimationFrame(render);
      let time = Clock.getElapsedTime();
      moon.position.x = Math.cos(time) * 10;
      moon.position.y = Math.sin(time) * 10;
      moon.position.z = Math.tan(time) * 10;
      moon.rotation.y += 0.1;
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
