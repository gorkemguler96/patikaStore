import React from 'react';
import { View, Text, FlatList, Image} from "react-native";
import styles from './Card.style'
import data from '../../data.json'

function Card(props) {

    const renderItem = ({ item }) => (
       <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.imgURL}}/>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.price}>{item.price}</Text>
           <Text style={styles.stok}>{item.inStock ? null : "Stokta Yok"}</Text>
       </View>
    );

    return (
        <View>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Card;
