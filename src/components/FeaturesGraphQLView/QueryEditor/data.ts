interface Project {
  name: string
  endpoint: string
  defaultQuery: string
  code?: Code
  models: Model[]
}

interface Code {
  reactLink: string
  angularLink: string
}

interface Model {
  name: string
  fields: Field[]
}

interface Field {
  name: string
  type: string
  required?: boolean
  system?: boolean
  relation?: boolean
}

// tslint:disable
export const projects: Project[] = [{
  name: 'Instagram',
  endpoint: 'https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q',
  defaultQuery: `{
  allPosts {
    id
    description
    comments {
      text
    }
  }
}`,
  code: {
    reactLink: 'https://github.com/graphcool-examples/react-apollo-instagram-example/archive/master.zip',
    angularLink: 'https://github.com/graphcool-examples/angular-apollo-instagram-example/archive/master.zip',
  },
  models: [{
    name: 'User',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'name',
      type: 'String',
      required: true,
    }],
  }, {
    name: 'Post',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'title',
      type: 'String',
      required: true,
    }, {
      name: 'image',
      type: 'String',
    }, {
      name: 'comments',
      type: '[Comment]',
      relation: true,
    }],
  }, {
    name: 'Comment',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'text',
      type: 'String',
      required: true,
    }, {
      name: 'post',
      type: 'Post',
      relation: true,
    }],
  }],
}, {
  name: 'Pokemon',
  endpoint: 'https://api.graph.cool/simple/v1/ciwdaxg682vpi0171tw2ga8fy',
  defaultQuery: `{
  Trainer(name: "Ash Ketchum") {
    id
    ownedPokemons(first: 1) {
      name
      types
    }
  }
  allMatches(filter: {location: "Indigo Plateau"}) {
    winner {
      name
    }
  }
}`,
  models: [{
    name: 'Trainer',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'name',
      type: 'String',
      required: true,
    }, {
      name: 'ownedPokemons',
      type: '[Pokemon]',
    }, {
      name: 'matches',
      type: '[Match]',
    }, {
      name: 'wonMatches',
      type: '[Match]',
    }],
  }, {
    name: 'Pokemon',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'name',
      type: 'String',
      required: true,
    }, {
      name: 'url',
      type: 'String',
    }, {
      name: 'types',
      type: '[Enum]',
    }, {
      name: 'trainer',
      type: 'Trainer',
    }],
  }, {
    name: 'Match',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'location',
      type: 'String',
      required: true,
    }, {
      name: 'trainers',
      type: '[Trainer]',
    }, {
      name: 'winner',
      type: 'Trainer',
    }],
  }],
}, {
  name: 'Airbnb',
  endpoint: 'https://api.graph.cool/simple/v1/ciwdcrl622wty01714p2f8e0q',
  defaultQuery: `{
  allListings {
    location
    available
    host {
      name
    }
  }
  allGuests {
    name
  }
}`,
  models: [{
    name: 'Host',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'name',
      type: 'String',
      required: true,
    }, {
      name: 'listings',
      type: '[Listing]'
    }],
  }, {
    name: 'Guest',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'name',
      type: 'String',
      required: true,
    }, {
      name: 'listings',
      type: '[Listing]'
    }],
  }, {
    name: 'Listing',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'location',
      type: 'String',
      required: true,
    }, {
      name: 'available',
      type: 'boolean',
    }, {
      name: 'host',
      type: 'Host',
    }, {
      name: 'guests',
      type: '[Guest]',
    }],
  }],
}]
