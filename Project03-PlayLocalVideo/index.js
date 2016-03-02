import React, {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native'

import GoBack from '../GoBack'

const {width} = Dimensions.get('window')

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='

const video = [
  {image: 'videoScreenshot01', title: 'Introduce 3DS Mario', source: 'Youtube - 06:32'},
  {image: 'videoScreenshot02', title: 'Emoji Among Us', source: 'Vimeo - 3:34'},
  {image: 'videoScreenshot03', title: 'Seals Documentary', source: 'Vine - 00:06'},
  {image: 'videoScreenshot04', title: 'Adventure Time', source: 'Youtube - 02:39'},
  {image: 'videoScreenshot05', title: 'Facebook HQ', source: 'Facebook - 10:20'},
  {image: 'videoScreenshot06', title: 'Lijiang Lugu Lake', source: 'Allen - 20:30'}
]

export const title = '03 - PlayLocalVideo'
export const description = '播放本地视频'
export default class PlayLocalVideo extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <VideoList/>
        <GoBack {...this.props}/>
      </View>
    )
  }
}

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
        <Image
          source={require('./images/videoScreenshot01.png')}
          style={styles.image}>
          <Text>afdasdf</Text>
        </Image>
      </View>
    )
  }
}

class VideoPlay extends React.Component {
  render () {
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  itemContainer: {
    flex: 1
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain'
  }
})
