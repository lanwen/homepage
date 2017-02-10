import { QuickExample } from '../../../../../types/types'

{/*

 Frontend Framework Keys: 'react', 'angular', 'react_native', 'ios', 'android', 'vue'
 Client Framework Keys: 'apollo', 'relay'

 Info:
 Add new data to `examples` dictionary and use combination of key for
 frontend and client frameworks separated by a hyphen, e.g. `react_native-realy`

 */
}

export const availableClients: {[key: string]: String[]} = {
  'react': ['apollo, relay'],
  'react_native': ['apollo, relay'],
  'angular': ['apollo, relay'],
  'vue': ['apollo'],
  'ios': [],
  'android': [],
}

export const examples: {[key: string]: QuickExample[]} = {
  'react-apollo': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-apollo-instagram-example',
      layout: 'TUTORIAL',
      title: 'Instagram Example',
    },
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-apollo-todo-example',
      layout: 'TUTORIAL',
      title: 'Todo Example',
    },
  ],
  'react-relay': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-relay-instagram-example',
      layout: 'TUTORIAL',
      title: 'Instagram Example',
    },
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-relay-todo-example',
      layout: 'TUTORIAL',
      title: 'Todo Example',
    },
  ],
  'react_native-relay': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-native-relay-todo-example',
      layout: 'TUTORIAL',
      title: 'Todo Example',
    },
  ],
  'react_native-apollo': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/react-native-apollo-instagram-example',
      layout: 'TUTORIAL',
      title: 'Instagram Example',
    },
  ],
  'angular-apollo': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/angular-apollo-instagram-example',
      layout: 'TUTORIAL',
      title: 'Instagram Example',
    },
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/angular-apollo-todo-example',
      layout: 'TUTORIAL',
      title: 'Todo Example',
    },
  ],
  'vue-apollo': [
    {
      imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
      imageWidth: 176,
      imageHeight: 87,
      link: 'https://github.com/graphcool-examples/vue-apollo-instagram-example',
      layout: 'TUTORIAL',
      title: 'Instagram Example',
    },
  ],
}
