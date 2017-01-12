import { $v } from 'graphcool-styles'

export interface TechnologyData {
  title: string
  logoName: string
  logoColor: string
  logoWidth: number
  logoHeight: number
  backgroundColor: string
  isPopular?: boolean
}

const react: TechnologyData = {
  title: 'React',
  logoName: 'react',
  logoColor: 'rgba(0,216,255,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(0,216,255,0.1)',
}

const angular: TechnologyData = {
  title: 'Angular',
  logoName: 'angular',
  logoColor: 'rgba(221,0,49,1)',
  logoWidth: 42,
  logoHeight: 46,
  backgroundColor: 'rgba(221,0,49,0.1)',
}

const reactNative: TechnologyData = {
  title: 'React Native',
  logoName: 'react_native',
  logoColor: 'rgba(26,127,145,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(26,127,145,0.1)',
}

const iOS: TechnologyData = {
  title: 'iOS',
  logoName: 'ios',
  logoColor: $v.black,
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: $v.gray10,
}

const android: TechnologyData = {
  title: 'Android',
  logoName: 'android',
  logoColor: 'rgba(164,196,157,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(164,196,157,0.1)',
}

const vue: TechnologyData = {
  title: 'Vue.js',
  logoName: 'vue',
  logoColor: 'rgba(65,184,131,1)',
  logoWidth: 52,
  logoHeight: 45,
  backgroundColor: 'rgba(65,184,131,0.1)',
}

export const frontendTechnologies: [TechnologyData] = [
  react,
  reactNative,
  vue,
  angular,
  iOS,
  android,
]

const apollo: TechnologyData = {
  title: 'Apollo',
  logoName: 'apollo',
  logoColor: 'rgba(10,44,73,1)',
  logoWidth: 40,
  logoHeight: 44,
  backgroundColor: 'rgba(10,44,73,0.1)',
  // isPopular: true
}

const relay: TechnologyData = {
  title: 'Relay',
  logoName: 'relay',
  logoColor: 'rgba(242,107,0,1)',
  logoWidth: 55,
  logoHeight: 31,
  backgroundColor: 'rgba(242,107,0,0.1)',
}

export const clientTechnologies: [TechnologyData] = [
  relay,
  apollo,
]
