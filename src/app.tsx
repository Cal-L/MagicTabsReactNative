import * as React from "react";
const LottieView = require("lottie-react-native");
import { StyleSheet, View, Animated, Dimensions } from "react-native";
const windowSize = Dimensions.get("window");

interface Props {}

interface State {
  scrollProgress: Animated.Value;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      scrollProgress: new Animated.Value(0)
    };
  }

  renderNavBar(): JSX.Element {
    const { scrollProgress } = this.state;
    return (
      <View style={styles.navBarContainer}>
        <View style={styles.navBar}>
          <View style={styles.navBarIcon}>
            <LottieView
              style={styles.fill}
              source={require("../animations/smiley.json")}
              progress={
                scrollProgress.interpolate({
                  inputRange: [
                    -windowSize.width / 2,
                    0,
                    windowSize.width,
                    windowSize.width * 1.5
                  ],
                  outputRange: [1, 0.9, 0.1, 0]
                  //extrapolate: 'clamp',
                }) as any
              }
              speed={1}
            />
          </View>
          <View style={styles.navBarIcon}>
            <LottieView
              style={styles.fill}
              source={require("../animations/chart.json")}
              progress={
                scrollProgress.interpolate({
                  inputRange: [
                    -windowSize.width / 2,
                    0,
                    windowSize.width,
                    windowSize.width * 1.5
                  ],
                  outputRange: [1, 0.9, 0.1, 0]
                  //extrapolate: 'clamp',
                }) as any
              }
              speed={1}
            />
          </View>
        </View>
        <View style={styles.navBarIndicatorContainer}>
          <Animated.View
            style={[
              styles.navBarIndicator,
              {
                backgroundColor: "#6bd69b",
                opacity: scrollProgress.interpolate({
                  inputRange: [0, windowSize.width],
                  outputRange: [1, 0]
                  //extrapolate: 'clamp',
                }),
                transform: [
                  {
                    translateX: scrollProgress.interpolate({
                      inputRange: [0, windowSize.width],
                      outputRange: [0, 80]
                      //extrapolate: 'clamp',
                    })
                  }
                ]
              }
            ]}
          />
          <Animated.View
            style={[
              styles.navBarIndicator,
              {
                backgroundColor: "#7468e1",
                opacity: scrollProgress.interpolate({
                  inputRange: [0, windowSize.width],
                  outputRange: [0, 1]
                  //extrapolate: 'clamp',
                }),
                transform: [
                  {
                    translateX: scrollProgress.interpolate({
                      inputRange: [0, windowSize.width],
                      outputRange: [0, 80]
                      //extrapolate: 'clamp',
                    })
                  }
                ]
              }
            ]}
          />
        </View>
        <View style={styles.navBarSeparator} />
      </View>
    );
  }

  renderScrollView(): JSX.Element {
    return (
      <Animated.ScrollView
        style={styles.scrollView}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: this.state.scrollProgress
                }
              }
            }
          ],
          {
            useNativeDriver: true
          }
        )}
      >
        <View
          style={[
            styles.page,
            {
              backgroundColor: "#6bd69b"
            }
          ]}
        />
        <View
          style={[
            styles.page,
            {
              backgroundColor: "#7468e1"
            }
          ]}
        />
      </Animated.ScrollView>
    );
  }

  render() {
    const navBar = this.renderNavBar();
    const scrollView = this.renderScrollView();

    return (
      <View style={styles.container}>
        {navBar}
        {scrollView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill: {
    flex: 1
  },
  navBarContainer: {
    paddingTop: 20
  },
  navBar: {
    height: 90,
    flexDirection: "row"
  },
  navBarIcon: {
    marginHorizontal: 5,
    width: 70
  },
  navBarIndicatorContainer: {
    height: 4
  },
  navBarIndicator: {
    position: "absolute",
    left: 0,
    bottom: 2,
    height: 4,
    borderRadius: 2,
    width: 80
  },
  navBarSeparator: {
    height: 1,
    backgroundColor: "#B0B0B0"
  },
  page: {
    width: windowSize.width
  },
  scrollView: {
    flex: 1
  }
});

export default App;
