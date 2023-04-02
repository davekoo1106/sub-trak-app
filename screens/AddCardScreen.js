import { useLayoutEffect, useState } from 'react';
import { TextInput, View, Text, Button, Modal, Pressable, Alert} from 'react-native';


export default function AddCardScreen({ navigation }) {

    //Setting a new variable state and calling it modalVisible. 
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);

    return (
        <View className="flex-1 mt-5">
            <View>
                <Text className="m-2 text-gray-500">Cardholder Name</Text>
                <TextInput 
                    className="bg-gray-200 h-10 m-2 rounded-md"
                />
            </View>
            <Text className="m-2 text-gray-500">Card Number</Text>
            <TextInput
                keyboardType="number-pad"
                className="flex-column bg-gray-200 h-10 m-2 rounded-md"
            />
            <View className="flex-row justify-center mt-1">
                <View className="pr-6">
                    <Text className="m-2 text-gray-500">Expiry Date</Text>
                    <TextInput 
                    keyboardType="number-pad"
                    placeholder='mm/yy'
                    className="bg-gray-200 w-44 h-10 m-2 rounded-md"
                    />
                </View>
                <View>
                    <Text className="m-2 text-gray-500">CVV</Text>
                    <TextInput 
                    keyboardType="number-pad"
                    className="bg-gray-200 w-44 h-10 m-2 rounded-md"
                    />
                </View>
            </View>

            {/* Creating a pressable tag so that it can be presseed. When it is pressed we set it so that a modal will appear */}
            <View className="flex-1 items-center">
                <View className="flex-1 mt-10 w-80">
                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <View className>
                            <Button 
                            title='Add Card'
                            color={'#4146ff'}
                            onPress={() => setModalVisible(true)}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
            {/* When the modal is clicked it will show an alert that states that the card has been added  */}
            <View>
                <Modal
                    visible={modalVisible}
                    animationType='fade'
                    // onClick={addNewCard}
                    onShow={() => {
                    Alert.alert('Card has been added');
                    setModalVisible(!modalVisible);
                    navigation.navigate("Add Card", {
                        loopImage: 2  
                    });
                }}>
                </Modal>
            </View>
        </View>
    )

}