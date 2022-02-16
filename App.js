import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  ScrollView,
} from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [timesPetted, setTimesPetted] = useState(0);
  return (
    <ScrollView>
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
      <Text>I have been petted {timesPetted} times!</Text>
    </ScrollView>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.topContainer}>
      <TextInput
        style={{ height: 50 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Cat1" />
      <Cat name="Cat3" />
    </>
  );
};

const ScrollViewExample = () => {
  return (
    <ScrollView maximumZoomScale={5} minimumZoomScale={0.5}>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>Scrolling down</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>What's the best</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>Framework around?</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 80 }}>React Native</Text>
    </ScrollView>
  );
};

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Cameron" },
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
          { key: "aCameron" },
          { key: "aDevin" },
          { key: "aDan" },
          { key: "aDominic" },
          { key: "aJackson" },
          { key: "aJames" },
          { key: "aJoel" },
          { key: "aJohn" },
          { key: "aJillian" },
          { key: "aJimmy" },
          { key: "aJulie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
      sections={[
        {title: 'Pineapple', data: ['Devin', 'Dan', 'Dominic']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy']},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      keyExtractor={(item, index) => index}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  bigFont: {
    fontSize: 96,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default SectionListBasics;
