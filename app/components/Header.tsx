import { View, Button, Text, StyleSheet } from "react-native"


export default function Header() {
    return (
        <View style={styles.header}>
            <Button title='My Books' />
            <Text>Book App</Text>
            <Button title='Search Books' />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});