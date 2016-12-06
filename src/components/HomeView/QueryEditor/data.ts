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

export const projects: Project[] = [{
  name: 'Instagram',
  endpoint: 'https://api.graph.cool/simple/v1/ciwce5xw82kh7017179gwzn7q',
  defaultQuery: `{
  allPosts {
    id
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
      name: 'imgUrl',
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
      name: 'quote',
      type: 'String',
      required: true,
    }, {
      name: 'post',
      type: 'Post',
      relation: true,
    }],
  }],
}, {
  name: 'Twitter',
  endpoint: 'https://api.graph.cool/simple/v1/civ2ev5rv0j680182w9vjgwx2',
  defaultQuery: `{
  allPokemons {
    id
  }
}`,
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
    name: 'Tweet',
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
      name: 'imgUrl',
      type: 'String',
    }, {
      name: 'comments',
      type: '[Comment]',
      relation: true,
    }],
  }, {
    name: 'Location',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'quote',
      type: 'String',
      required: true,
    }, {
      name: 'post',
      type: 'Post',
      relation: true,
    }],
  }],
}, {
  name: 'Airbnb',
  endpoint: 'https://api.graph.cool/simple/v1/ciasdfasdf',
  defaultQuery: `{
  allTweets {
    id
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
    }],
  }, {
    name: 'Guest',
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
      name: 'imgUrl',
      type: 'String',
    }, {
      name: 'comments',
      type: '[Comment]',
      relation: true,
    }],
  }, {
    name: 'Listing',
    fields: [{
      name: 'id',
      type: 'GraphQLId',
      system: true,
      required: true,
    }, {
      name: 'quote',
      type: 'String',
      required: true,
    }, {
      name: 'post',
      type: 'Post',
      relation: true,
    }],
  }],
}]
