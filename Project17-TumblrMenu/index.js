import React, {
  StyleSheet,
  ListView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

import autobind from 'autobind-decorator'
import GoBack from '../GoBack'
import { BlurView } from 'react-native-blur'
import Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import Tabs from 'react-native-tabs'

const {width} = Dimensions.get('window')

const listData = [
  {avatar: require('./images/718835727.png'), name: 'Hugo', pic: require('./images/1-hjGpOnCIu4sP7H4V2sdFcA.png')},
  {avatar: require('./images/89w7SbqD_400x400.png'), name: 'MengTo', pic: require('./images/22266727550_5decf72626_o.jpg')}
]

export const title = '17 - TumblrMenu'
export const description = 'Tumblr菜单'

@autobind
export default class TumblrMenu extends React.Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(listData)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          name='edit'
          style={styles.content}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />

        <Tabs
          selected={'edit'}
          style={{backgroundColor: 'darkslateblue'}}>
          <Icon name='ios-home' style={styles.tab}/>
          <Icon name='ios-search-strong' style={styles.tab}/>
          <View style={styles.tabEditContainer} onSelect={this._onPress}>
            <Icon name='edit' style={[styles.tab, styles.tabEdit]}/>
          </View>
          <Icon name='chatbubble-working' style={styles.tab}/>
          <Icon name='person' style={styles.tab}/>
        </Tabs>

        <BlurView blurType='dark' style={styles.mark}>
          <Animatable.View ref={'text'}><Text>Text</Text></Animatable.View>
          <Animatable.View ref={'photo'}><Text>Photo</Text></Animatable.View>
          <Animatable.View ref={'quote'}><Text>Quote</Text></Animatable.View>
          <Animatable.View ref={'link'}><Text>Link</Text></Animatable.View>
          <Animatable.View ref={'chat'}><Text>Chat</Text></Animatable.View>
          <Animatable.View ref={'audio'}><Text>Audio</Text></Animatable.View>
        </BlurView>
        <GoBack {...this.props}/>
      </View>
    )
  }

  _renderRow (rowData, sectionID, rowID) {
    return (
      <View style={styles.itemContainer} key={rowID}>
        <View style={styles.itemHeader}>
          <View style={styles.itemAvatar}>
            <Image style={styles.itemAvatar} source={rowData.avatar}/>
          </View>
          <Text style={styles.itemName}>{rowData.name}</Text>
        </View>
        <Image style={styles.itemImage} source={rowData.pic} resizeMode='cover'/>
      </View>
    )
  }

  _onPress () {
    console.log('true')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2C43'
  },
  content: {
    marginTop: 60
  },
  itemContainer: {
    marginTop: 20
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
    width,
    backgroundColor: 'white',
    padding: 10
  },
  itemAvatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20
  },
  itemName: {
    flex: 1,
    fontFamily: 'Avenir Next',
    lineHeight: 30,
    color: 'black'
  },
  itemImage: {
    width,
    height: 250
  },
  tab: {
    fontSize: 25,
    color: '#bbbbbb'
  },
  tabEditContainer: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#4F95C4'
  },
  tabEdit: {
    color: '#333333'
  },
  mark: {
    position: 'absolute',
    top: 0,
    left: -1000
  }
})
