import React, {
  StyleSheet,
  Navigator,
  ListView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import autobind from 'autobind-decorator'

const { width, height } = Dimensions.get('window')

const tableData = [
  {
    avatar: require('./images/avatar_catch.jpg'),
    bg: require('./images/haha_bg.jpeg'),
    title: 'Love mountain.',
    author: 'Allen Wang'
  },
  {
    avatar: require('./images/avatar_IcesZKi5_400x400.jpeg'),
    bg: require('./images/live_free.png'),
    title: 'New graphic design - LIVE FREE',
    author: 'Cole'
  },
  {
    avatar: require('./images/avatar_LlCpvQc2_400x400.jpg'),
    bg: require('./images/lonely_traveler.jpg'),
    title: 'Summer sand',
    author: 'Daniel Hooper'
  },
  {
    avatar: require('./images/avatar_MiDNqbJa_400x400.jpeg'),
    bg: require('./images/wallpaper.jpg'),
    title: 'Seeking for signal',
    author: 'Noby-Wan Kenobi'
  }
]

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const NavigationBarRouteMapper = {
  LeftButton (route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={this.props.navigator.pop}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          返回
        </Text>
      </TouchableOpacity>
    )
  },

  Title (route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  },

  RightButton (route, navigator, index, navState) {
    console.log(this)
    return (
      <TouchableOpacity
        onPress={this._onToggleSlideMenu}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          🍔
        </Text>
      </TouchableOpacity>
    )
  }
}

export const title = '16 - SlideMenu'
export const description = '下拉菜单'

@autobind
export default class SlideMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(tableData)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Navigator
          debugOverlay={false}
          style={styles.appContainer}
          initialRoute={{
            title: 'Everyday Moments'
          }}
          renderScene={(route, navigator) => (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          )}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: NavigationBarRouteMapper.LeftButton.bind(this),
                Title: NavigationBarRouteMapper.Title.bind(this),
                RightButton: NavigationBarRouteMapper.RightButton.bind(this)
              }}
              style={styles.navBar}
            />
          }
        />
      </View>
    )
  }

  _renderRow (rowData, sectionID, rowID) {
    return (
      <Image style={styles.itemContainer} key={rowID} source={rowData.bg} >
        <View style={styles.user}>
          <Text>{rowData.title}</Text>
        </View>
      </Image>
    )
  }

  _onToggleSlideMenu () {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  itemContainer: {
    flex: 1,
    resizeMode: 'cover',
    width, // 一定加上width，不然image resizemode 会有问题
    height: 250
  },
  user: {
    marginTop: 20
  },
  navBar: {
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  navBarText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    fontSize: 14,
    color: '#eeeeee'
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA'
  }
})
