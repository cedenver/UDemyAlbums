import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return(
        <View>
            <Header headerText='Albums'/>
            <AlbumList/>
        </View>
    );
}

AppRegistry.registerComponent('UDemyAlbums',()=> App);


//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('UDemyAlbums', () => App);
