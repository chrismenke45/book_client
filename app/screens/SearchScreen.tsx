import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});