import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Home from "../screens/home";
import ReviewDetail from "../screens/ReviewDetail";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  );
}
