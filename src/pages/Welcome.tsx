import React, { useState } from "react";
import { View } from "react-native";
import FontComponent from "../components/Signup/FontComponent";
import SlideButtonComponent from "../components/Signup/SlideButtonComponent";
import WelComponent from "../components/Signup/WelComponent"; // Import the NewComponent

const Welcome: React.FC = () => {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleShift = () => {
        setShowNewComponent(true); // Set showNewComponent to true when the button is moved to the right
    };

    return (
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: -90 }}>
            <View style={{}}>
                {showNewComponent ? <WelComponent /> : <FontComponent />}
            </View>
            {!showNewComponent && ( // Conditionally render the SlideButtonComponent based on showNewComponent
                <View style={{}}>
                    <SlideButtonComponent data={handleShift} />
                </View>
            )}
        </View>
    );
};

export default Welcome;
