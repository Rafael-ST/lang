import { View, Text, StyleSheet, Image, useWindowDimensions, ImageSourcePropType  } from 'react-native'

type OnboardingItemProps = {
    item: {
      image: ImageSourcePropType;  // Tipo de imagem (pode ser URI ou um arquivo estático)
      title: string;
      description: string;
    };
  }

export default function OnboardingItem({item}: OnboardingItemProps){
    const {width} = useWindowDimensions()
    return (
        <View style={[styles.container, {width}]}>
            {/* <Text>{item.title}</Text> */}
            <Image source={item.image} style={[styles.image]}/>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 350,
        height: 480,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})