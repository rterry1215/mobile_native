import React, { useRef } from "react";
import { View, TouchableOpacity, Text, Image, PanResponder, Animated } from "react-native";

interface SlideButtonComponentProps {
  data: () => void;
}

const SlideButtonComponent: React.FC<SlideButtonComponentProps> = ({ data }) => {
  const NarrowImage = require('../public/chevron.forward.png');
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const slideRange = 270; // Define the range of movement within the parent View
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      // Update the slideAnimation value based on the gesture movement within the defined range
      if (gestureState.dx >= 0 && gestureState.dx <= slideRange) {
        slideAnimation.setValue(gestureState.dx);
        // Adjust the opacity based on the text's position within the range
        const opacity = 1 - (gestureState.dx / slideRange);
        fadeAnimation.setValue(opacity);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      // Perform the slide animation based on the gesture release
      if (gestureState.dx > 100) {
        // Perform the slide to the right
        Animated.timing(slideAnimation, {
          toValue: slideRange, // Adjust the value based on the width of the slide range
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          // Call the handleShift function after the slide animation is complete
          data();
        });
      } else {
        // Reset the slide animation
        Animated.timing(slideAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, overflow: 'hidden' }}>
        <Animated.View
          style={{
            transform: [{ translateX: slideAnimation }],
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 6
          }}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity style={{ borderRadius: 50, backgroundColor: 'white', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={NarrowImage} />
          </TouchableOpacity>
          <Animated.Text style={{ color: 'white', fontSize: 14, marginLeft: 140, opacity: fadeAnimation }}>
            Slide to continue
          </Animated.Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default SlideButtonComponent;
