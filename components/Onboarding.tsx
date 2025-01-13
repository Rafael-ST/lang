import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'

import slides from '../slides'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'


import { useRef, useState } from 'react'

import type { ViewToken } from 'react-native';



export default function Onboarding(){
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slideref = useRef(null)

    const viewableItemsChanged = useRef(({  viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index ?? 0); // Use '?? 0' para fallback seguro
        }
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return(
        <View style={{flex: 3}}>
            <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item}/>}
             horizontal
             showsHorizontalScrollIndicator
             pagingEnabled
             bounces={false}
             keyExtractor={item => item.id}
             onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                useNativeDriver: false,
             })}
             scrollEventThrottle={32}
             onViewableItemsChanged={viewableItemsChanged}
             viewabilityConfig={viewConfig}
             ref={slideref}
             />
             <Paginator data={slides}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})