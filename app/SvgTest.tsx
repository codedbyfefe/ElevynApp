import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function SvgTest() {
  return (
    <View>
      <Svg height="100" width="100">
        <Path
          d="M10 80 C 40 10, 65 10, 95 80"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      </Svg>
    </View>
  );
}
