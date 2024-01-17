import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styled } from "nativewind";
import Graph from "./components/Graph";

const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);

const Home = () => {
  return (
    <StyledSafeArea style={{ flex: 1 }}>
      <Graph />
    </StyledSafeArea>
  );
};

export default Home;
