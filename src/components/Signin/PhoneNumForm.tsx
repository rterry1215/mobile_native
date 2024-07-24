import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
interface SlideButtonComponentProps {
    data: () => void;
  }
  
const countries = [
    {
        num: "+1",
        name: "usa",
    },
    {
        num: "+45",
        name: "germany",
    },
    {
        num: "+78",
        name: "canada",
    },
];

const PhoneNumForm: React.FC<SlideButtonComponentProps> = ({data}) => {
    const navigation = useNavigation();

    const [selectedCountry, setSelectedCountry] = useState('+1');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isClicked, setIsChecked] = useState(false);
    const moveVerifiedPhone = () => {
        navigation.navigate("Verified Phone number");
    }
    const handleClick = () => {
        setIsChecked(true);
        data();
    }
    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setShowDropdown(false); // Hide the dropdown after selecting a country
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {isClicked ? (
                <Text style={{ fontSize: 14, color: '#444848', top: 20, padding: 20 }}>
                    Enter the OTP code sent to your mobile number.                </Text>
            ) : (
                <Text style={{ fontSize: 14, color: '#444848', top: 20, padding: 20 }}>
                    An OTP code will be sent to the number you provide below. Do not share your code with anyone.
                </Text>

            )
            }
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {isClicked ? (
                    < View style={{ width: 350, display: 'flex', flexDirection: 'row', gap: 8 }}>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#d1d1d1',
                                    borderRadius: 25,
                                    padding: 10,
                                    width: 91,
                                    height: 51,
                                    left: 10,
                                    top: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                            </TextInput>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#d1d1d1',
                                    borderRadius: 25,
                                    padding: 10,
                                    width: 91,
                                    height: 51,
                                    left: 10,
                                    top: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                            </TextInput>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#d1d1d1',
                                    borderRadius: 25,
                                    padding: 10,
                                    width: 91,
                                    height: 51,
                                    left: 10,
                                    top: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                            </TextInput>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#d1d1d1',
                                    borderRadius: 25,
                                    padding: 10,
                                    width: 91,
                                    height: 51,
                                    left: 10,
                                    top: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                            </TextInput>
                        </View>
                    </View>
                ) : (
                    <>
                        <View style={{ position: 'relative' }}>
                            <TouchableOpacity
                                onPress={toggleDropdown}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#d1d1d1',
                                    borderRadius: 25,
                                    padding: 10,
                                    width: 91,
                                    height: 51,
                                    left: 20,
                                    top: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ textAlign: 'right', left: 40 }}>{selectedCountry === '' ? 'Choose Country' : selectedCountry}</Text>
                            </TouchableOpacity>
                            {showDropdown && (
                                // <FlatList
                                //     data={countries}
                                //     keyExtractor={(item) => item.num}
                                //     renderItem={({ item }) => (
                                //         <TouchableOpacity onPress={() => handleCountrySelect(item.num)}>
                                //             <View
                                //                 style={{
                                //                     padding: 10,
                                //                     borderWidth: 1,
                                //                     width: 120,
                                //                     top: 26,
                                //                     left: 10,
                                //                     borderColor: '#B7B7B7',
                                //                     backgroundColor: selectedCountry === item.num ? '#d1d1d1' : '#fff',
                                //                 }}
                                //             >
                                //                 <Text style={{ marginLeft: 20 }}>{item.num}</Text>
                                //             </View>
                                //         </TouchableOpacity>
                                //     )}
                                // />
                                <></>
                            )}
                        </View>
                        <View style={{ width: 244, height: 51, top: 20, right: 30 }}>
                            <TextInput style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 50, padding: 15, color: '#1F2937' }} keyboardType="phone-pad"
                                placeholder="Enter your email" />
                        </View>
                    </>
                )}
            </View>
            <TouchableOpacity style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>

                <Text style={{ fontSize: 14, color: '#477EFF', top: 20, padding: 20, right: 10 }}>
                    Resend code
                </Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isClicked ? (
                    <TouchableOpacity onPress={moveVerifiedPhone} style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 250 }}
                    >
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleClick} style={{ backgroundColor: '#477EFF', borderRadius: 38, width: 351, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', top: 250 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>
                            Send code
                        </Text>

                    </TouchableOpacity>
                )}
            </View>
        </View >
    );
};

export default PhoneNumForm;
