import React from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Logo from './components/Logo';
import { MessageFeed, SendMessage } from './components/Routes';

export default class App extends React.Component {
  // Manages Tab View State
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Message' },
      { key: 'second', title: 'Feed' },
    ],
  };

  _renderTabBar = props => {
    return (
      <View style={styles.header}>
        <Logo />
        <TabBar {...props} style={styles.tabBar} />
      </View>
    );
  };

  render() {
    return (
      <TabView
        style={styles.tab}
        navigationState={this.state}
        renderScene={SceneMap({
          first: MessageFeed,
          second: SendMessage,
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        useNativeDriver
      />
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    paddingTop: 22,
  },
  tabBar: {
    backgroundColor: '#577AFB',
  },
  header: {
    backgroundColor: '#577AFB',
    flex: .3,
    alignSelf: 'stretch',
  }
});
