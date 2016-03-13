import React, {
  AppRegistry,
  StyleSheet,
  ScrollView,
  StatusBar,
  ListView,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native'

import autobind from 'autobind-decorator'
import checkUpdate from './checkUpdate'
import SplashScreen from '@remobile/react-native-splashscreen'

const projects = [
  require('./Project01-SimpleStopWatch'),
  require('./Project02-CustomFont'),
  require('./Project03-PlayLocalVideo'),
  require('./Project04-SnapChatMenu'),
  require('./Project05-CarouselEffect'),
  require('./Project06-FindMyLocation'),
  require('./Project07-PullToRefresh'),
  require('./Project08-RandomGradientColorMusic'),
  require('./Project09-ImageScroller'),
  require('./Project10-VideoBackground'),
  require('./Project11-ClearTableViewCell'),
  require('./Project12-LoginAnimation'),
  require('./Project13-AnimateTableViewCell'),
  require('./Project14-EmojiSlotMachine'),
  require('./Project15-AnimatedSplash'),
  require('./Project16-SlideMenu'),
  require('./Project17-TumblrMenu'),
  require('./Project18-LimitCharacters')
]

class ThreetyDaysofReactNative extends React.Component {
  componentDidMount () {
    checkUpdate()
    SplashScreen.hide()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <Navigator
          style={styles.container}
          initialRoute={{title: '30DaysofReactNative', component: ProjectList}}
          renderScene={(route, navigator) => {
            return <route.component navigator={navigator} {...route.passProps}/>
          }}
          configureScene={(router, routeStack) => {
            if (router.SceneConfigs) {
              return router.SceneConfigs
            }
            return Navigator.SceneConfigs.PushFromRight
          }}
        />
      </View>
    )
  }
}

@autobind
class ProjectList extends React.Component {
  static propTypes = {
    navigator: React.PropTypes.object
  };

  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(projects)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.titleBarText}>30DaysofReactNative</Text>
        </View>
        <ScrollView style={styles.content}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </ScrollView>
      </View>
    )
  }

  _renderRow (project, index) {
    return (
      <View key={index}>
        <TouchableHighlight onPress={() => this._onPressRow(project)}>
          <View style={styles.row}>
            <Text style={styles.rowTitleText}>
              {project.title}
            </Text>
            <Text style={styles.rowDetailText}>
              {project.description}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator}/>
      </View>
    )
  }

  _onPressRow (project) {
    this.props.navigator.push({
      title: project.title,
      component: project.default
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  titleBar: {
    height: 60,
    backgroundColor: '#05A5D1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleBarText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    color: '#ffffff'
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15
  },
  rowTitleText: {
    color: '#ea4c89',
    fontSize: 17,
    fontWeight: '500'
  },
  rowDetailText: {
    fontSize: 13,
    color: '#888888',
    lineHeight: 20,
    paddingLeft: 37
  }
})

AppRegistry.registerComponent('ThreetyDaysofReactNative', () => ThreetyDaysofReactNative)
