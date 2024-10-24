
import { HStack, VStack, IconButton, Image, View } from "native-base";

// Functional Component with props
const Header = (props) => {
  return (
    <HStack bg="#AA0002" justifyContent="space-between" p={4}>
      <IconButton
        icon={
          <Image
            source={require("../assets/menu.png")}
            alt="menu"
            style={{ width: 18, height: 18 }}
          />
        }
        onPress={() => props.drawer.current.openDrawer()}
      />
      <HStack space={4} alignItems="center">
        <Image
          source={require("../assets/facebook.png")}
          alt="facebook"
          style={{ width: 36, height: 16, resizeMode: "contain" }}
        />
        <Image
          source={require("../assets/youtube.png")}
          alt="youtube"
          style={{ width: 36, height: 16, resizeMode: "contain" }}
        />
        <Image
          source={require("../assets/twitter.png")}
          alt="twitter"
          style={{ width: 36, height: 16, resizeMode: "contain" }}
        />
        <Image
          source={require("../assets/search.png")}
          alt="search"
          style={{ width: 36, height: 16, resizeMode: "contain" }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
