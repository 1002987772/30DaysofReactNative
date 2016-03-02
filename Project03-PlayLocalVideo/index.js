import React, {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import autobind from 'autobind-decorator'
import VideoPlay from './VideoPlay'
import GoBack from '../GoBack'

const {width} = Dimensions.get('window')

const video = [
  {image: require('./images/videoScreenshot01.png'), video: './emoji', title: 'Introduce 3DS Mario', source: 'Youtube - 06:32'},
  {image: require('./images/videoScreenshot02.png'), video: './emoji', title: 'Emoji Among Us', source: 'Vimeo - 3:34'},
  {image: require('./images/videoScreenshot03.png'), video: './emoji', title: 'Seals Documentary', source: 'Vine - 00:06'},
  {image: require('./images/videoScreenshot04.png'), video: './emoji', title: 'Adventure Time', source: 'Youtube - 02:39'},
  {image: require('./images/videoScreenshot05.png'), video: './emoji', title: 'Facebook HQ', source: 'Facebook - 10:20'},
  {image: require('./images/videoScreenshot06.png'), video: './emoji', title: 'Lijiang Lugu Lake', source: 'Allen - 20:30'}
]

export const title = '03 - PlayLocalVideo'
export const description = '播放本地视频'
export default class PlayLocalVideo extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <VideoList {...this.props}/>
        <GoBack {...this.props}/>
      </View>
    )
  }
}

@autobind
class VideoList extends React.Component {
  constructor () {
    super()

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(video)
    }
  }

  render () {
    return (
      <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </ScrollView>
    )
  }

  _renderRow (rowData, rowID) {
    return (
      <View key={rowID} style={styles.itemContainer}>
        <TouchableHighlight onPress={() => this._playVideo(rowData)}>
          <View>
            <Image
              source={rowData.image}
              style={styles.image}>
              <Image style={styles.playBtn} source={require('./images/playBtn.png')}/>
            </Image>
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>{rowData.title}</Text>
              <Text style={styles.imageTime}>{rowData.source}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  _playVideo (rowData) {
    this.props.navigator.push({
      title: rowData.title,
      component: VideoPlay,
      passProps: {
        video: rowData.video,
        navigator: this.props.navigator
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  itemContainer: {
    flex: 1,
    position: 'relative'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playBtn: {

  },
  textContainer: {
    width,
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageTitle: {
    fontFamily: 'Avenir Next',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
    backgroundColor: 'transparent',
    marginBottom: 5
  },
  imageTime: {
    color: '#999999'
  }
})
