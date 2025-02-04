import { View, Text, StyleSheet } from 'react-native'

interface PaginatorProps {
    data: unknown[];
}

export default function Paginator({data}:PaginatorProps){
    return(
        <View style={{flexDirection: 'row', height: 64}}>
            
                {data.map((_, i) => {
                    return <View style={[styles.dot, {width: 10}]} key={i.toString()}/>;
                })}
            
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8
    }
})