import React from "react";
import { Renderer } from "expo-three";
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
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 2;
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xff6347 });
    const cube = new Mesh(geometry, material);
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
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};
export default App;
