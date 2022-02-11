import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
const [timesPetted, setTimesPetted] = useState(0);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "not hungry"}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disable={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you"}
      />
            <Button
        onPress={() => {
          setTimesPetted(timesPetted + 1);
        }}
        title={"Pet me!"}
      />
      <Text>
        I have been petted {timesPetted} times!
      </Text>
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.topContainer}>
      <TextInput style={{height: 50}}
      placeholder="Type here to translate!"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  )
}

const Cafe = () => {
  return (
    <>
      <Cat name="Cat1" />
      <Cat name="Cat3" />
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default PizzaTranslator;
