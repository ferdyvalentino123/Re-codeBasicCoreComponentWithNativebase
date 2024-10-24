import { Button as NBButton, Text } from "native-base";

// Functional Component with props
const Button = (props) => {
  return (
    <NBButton
      onPress={props.onPress}
      borderRadius="full"
      bg="gray.300"
      px={6}
      py={3}
    >
      <Text fontSize="md" fontWeight="bold" textTransform="uppercase" color="black">
        {props.text}
      </Text>
    </NBButton>
  );
};

export default Button;

