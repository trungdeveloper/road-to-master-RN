import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Home from "../screens/home";
import OnBoarding from "../screens/OnBoarding";
import ReviewDetail from "../screens/ReviewDetail";
import { getStorageData } from "../utils";

const Stack = createNativeStackNavigator();
const isStarted = getStorageData("isAppStarted", true);

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isStarted && <Stack.Screen name="OnBoarding" component={OnBoarding} />}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  );
}
