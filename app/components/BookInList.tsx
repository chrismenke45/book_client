import { View, Text, StyleSheet, Image } from "react-native"
import Book from "../interfaces/Book";

interface Props {
    book: Book;
}

export default function BookInList(props: Props) {
    const { book } = props
    return (
        <View style={styles.listItem}>
            <Image
                source={{
                    uri: book.img,
                }}
            />
            <View>
                <Text>{book.title}</Text>
                <Text>{book.authors[0]}{book.authors.length > 1 && ", ..."}</Text>
            </View>
            <Text>{book.description}</Text>
            <Text>{book.pageCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});