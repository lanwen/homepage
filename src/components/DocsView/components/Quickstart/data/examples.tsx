import { QuickExample } from '../../../../../types/types'

{/*

 Frontend Framework Keys: 'react', 'angular', 'rn', 'ios', 'android', 'vue'
 Client Framework Keys: 'apollo', 'relay'

 Info:
 Add new data to `examples` dictionary and use combination of key for
 frontend and client frameworks separated by a hyphen, e.g. `rn-relay`

 */
}

export const availableClients: {[key: string]: String[]} = {
  'react': ['apollo, relay'],
  'rn': ['apollo'],
  'angular': ['apollo, relay'],
  'vue': ['apollo'],
  'ios': [],
  'android': [],
}

export const examples: {[key: string]: QuickExample[]} = {
  'react-apollo': [
    {
      link: 'https://github.com/graphcool-examples/react-apollo-instagram-example',
      type: 'INSTAGRAM',
    },
    {
      link: 'https://github.com/graphcool-examples/react-apollo-todo-example',
      type: 'TODOAPP',
    },
  ],
  'react-relay': [
    {
      link: 'https://github.com/graphcool-examples/react-relay-instagram-example',
      type: 'INSTAGRAM',
    },
    {
      link: 'https://github.com/graphcool-examples/react-relay-todo-example',
      type: 'TODOAPP',
    },
  ],
  'rn-apollo': [
    {
      link: 'https://github.com/graphcool-examples/react-native-apollo-instagram-example',
      type: 'INSTAGRAM',
    },
  ],
  'angular-apollo': [
    {
      link: 'https://github.com/graphcool-examples/angular-apollo-instagram-example',
      type: 'INSTAGRAM',
    },
    {
      link: 'https://github.com/graphcool-examples/angular-apollo-todo-example',
      type: 'TODOAPP',
    },
  ],
  'vue-apollo': [
    {
      link: 'https://github.com/graphcool-examples/vue-apollo-instagram-example',
      type: 'INSTAGRAM',
    },
  ],
}
