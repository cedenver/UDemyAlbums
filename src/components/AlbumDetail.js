import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {

    const {album} = props;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} 
                        source={{uri: album.image}} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} 
                    source={{uri: album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress = {()=> onPressed(props.album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const onPressed = (url) =>{
    Linking.openURL(url)
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent : 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex:1,
        width:null
    }
};

export default AlbumDetail;