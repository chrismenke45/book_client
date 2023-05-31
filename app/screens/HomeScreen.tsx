import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Book from '../interfaces/Book';
import BookInList from '../components/BookInList';

const books: Book[] = [
    {
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        id: "0",
        pageCount: 171,
        img: "yee",
        description: "Old Sport, Jay Gatsby throws parties to try and reconnect with an old flame. In doing so he oversteps social boundries and chaos ensues."

    }
]

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            {books.map(book => {
                return <BookInList book={book} />
            })}
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