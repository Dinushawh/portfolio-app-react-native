import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Home";
import Navigator from "../Routes/routes";
const screens = {
  Home: {
    screen: Home,
  },
  Aboutme: {
    screen: Aboutme,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
