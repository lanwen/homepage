import {QuickExample} from '../../../../../types/types'

{/*

Frontend Framework Keys: 'react', 'angular', 'react_native', 'ios', 'android', 'vue'
Client Framework Keys: 'apollo', 'relay'

Info:
Add new data to `examples` dictionary and use combination of key for 
frontend and client frameworks separated by a hyphen, e.g. `react_native-realy`

*/}

{/* REACT-APOLLO */}

const reactApolloInstagram: QuickExample = {
  imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
  imageWidth: 176,
  imageHeight: 87,
  link: 'https://github.com/graphcool-examples/react-apollo-instagram-example',
  layout: 'REFERENCE',
  title: 'React Apollo Instagram',
}

const reactApolloTodo: QuickExample = {
  imageSrc: require('../../../../../assets/icons/docs/react_apollo_guide.svg'),
  imageWidth: 176,
  imageHeight: 87,
  link: 'https://github.com/graphcool-examples/react-apollo-todo-example',
  layout: 'REFERENCE',
  title: 'React Apollo Instagram',
}

const reactApolloStarter: QuickExample = {
  imageSrc: require('../../../../../assets/icons/docs/github.svg'),
  imageWidth: 44,
  imageHeight: 44,
  link: 'https://github.com/graphcool-examples/react-apollo-todo-example',
  layout: 'QUICKSTART',
  title: 'React Apollo Instagram',
}

export const examples = {
  'react-apollo': [
    reactApolloInstagram,
    reactApolloTodo,
    reactApolloStarter,
  ],
}
