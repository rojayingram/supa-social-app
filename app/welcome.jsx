import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'

import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'


const welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <View style={styles.container}>
        {/* welcome image */}
        <Image style={styles.welcomeImage} resizeMode='contain' source={require("../assets/images/welcome.png")}/>

        {/* title */}
        <View style={{gap: 20}}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchline}>
            Where every thought finds a home and every image tells a story.
          </Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={()=>{console.log("Getting Started Button Tapped")}}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.loginText}>
              Already have an account!
            </Text>
            <Pressable>
              <Text style={[styles.loginText]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  buttonTextContainer: {
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    gap: 90,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  footer: {
    gap: 30,
    width: '100%'
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  welcomeImage: {
    width: wp(100),
    height: hp(40),
    alignSelf: 'center',
  },
})