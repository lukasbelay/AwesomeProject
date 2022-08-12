import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import {
  AmbientLight,
  SphereGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";

const App = () => {
  const onContextCreate = async (gl) => {
    const scene = new scene();
  };
};

return (
  <View>
    <GLView onContextCreate={onContextCreate} />
  </View>
);

export default App;
