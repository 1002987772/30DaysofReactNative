import React, {
  StyleSheet,
  // Dimensions,
  ListView,
  Image,
  Text,
  View
} from 'react-native'

import GoBack from '../GoBack'
import autobind from 'autobind-decorator'
import { BlurView } from 'react-native-blur'

// const { width, height } = Dimensions.get('window')

export const title = '05 - CarouselEffect'
export const description = '轮播图效果'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const imageList = [
  {image: require('./images/bodyline.png'), text: '001'},
  {image: require('./images/darkvarder.png'), text: '002'},
  {image: require('./images/dudu.jpg'), text: '003'},
  {image: require('./images/hello.jpg'), text: 'Hello there, i miss u.'},
  {image: require('./images/hhhhh.jpg'), text: '005'},
  {image: require('./images/IMG_1517.png'), text: '006'},
  {image: require('./images/wave.jpg'), text: '007'},
  {image: require('./images/wave.jpg'), text: '007'}
]

@autobind
export default class CarouselEffect extends React.Component {
  state = {
    dataSource: ds.cloneWithRows(imageList)
  };

  render () {
    return (
      <Image style={styles.container} source={require('./images/blue.png')} resizeMode='stretch'>
        <BlurView style={styles.container} blurType='light'>
          <View style={styles.listContainer}>
            <View style={styles.listContent}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                horizontal={true}
                showsVerticalScrollIndicator={true}
              />
            </View>
          </View>
          <GoBack {...this.props}/>
        </BlurView>
      </Image>
    )
  }

  _renderRow (rowData, rowID) {
    return (
      <View key={rowID} style={styles.imageItem}>
        <Image source={rowData.image} style={styles.image} resizeMode='cover'>
          <BlurView style={styles.textContainer} blurType='light'>
            <Text style={styles.text}>{rowData.text}</Text>
          </BlurView>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  listContent: {
    height: 450
  },
  imageItem: {
    position: 'relative',
    marginLeft: 20,
    width: 300,
    height: 400,
    borderRadius: 7,
    overflow: 'hidden'
  },
  image: {
    width: 300,
    height: 400
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 300,
    height: 60,
    overflow: 'hidden',
    paddingLeft: 15
  },
  text: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 40
  }
})
