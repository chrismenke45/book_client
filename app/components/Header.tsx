import { View, Button, Text, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native";


export default function Header() {
    const navigate = useNavigate()

    return (
        <View style={styles.header}>
            <Button title='My Books' onPress={() => navigate("/")}/>
            <Text>Book App</Text>
            <Button title='Search Books' onPress={() => navigate("/search")} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});