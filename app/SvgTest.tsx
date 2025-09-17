import { View } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

export default function SvgTest() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Svg height="200" width="200">
        {/* Big red circle */}
        <Circle cx="100" cy="100" r="80" stroke="black" strokeWidth="2.5" fill="red" />
        {/* Blue square */}
        <Rect x="30" y="30" width="140" height="140" stroke="blue" strokeWidth="2" fill="transparent" />
      </Svg>
    </View>
  );
}
