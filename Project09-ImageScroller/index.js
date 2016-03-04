import React, {
  StyleSheet,
  Dimensions,
  Image,
  View
} from 'react-native'

import resolveAssetSource from 'resolveAssetSource'
import autobind from 'autobind-decorator'
import GoBack from '../GoBack'
import { BlurView } from 'react-native-blur'

import ImageBaseScroller from './ImageBaseScroller'

const { width, height } = Dimensions.get('window')

export const title = '09 - ImageScroller'
export const description = '图片滚动'

const source = require('./images/Steve.png')
const image = resolveAssetSource(source)

@autobind
export default class ImageScroller extends React.Component {
  render () {
    return (
      <Image style={styles.container} source={source} resizeMode='cover'>
        <BlurView style={styles.blurContainer} blurType='dark'>
          <View style={styles.imageContainer}>
            {image.width &&
              <ImageBaseScroller
                image={source}
                width={image.width}
                height={image.height}
                size={{width, height}}
                style={[styles.imageCropper, {width, height}]}
              />
            }
          </View>
        </BlurView>
        <GoBack {...this.props}/>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  imageCropper: {
    flex: 1,
    alignSelf: 'center'
  }
})
