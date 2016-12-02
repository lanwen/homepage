interface Project {
  name: string
  endpoint: string
  models: Model[]
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
  endpoint: 'https://api.graph.cool/simple/v1/ciasdfasdf',
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
  name: 'Twitter',
  endpoint: 'https://api.graph.cool/simple/v1/ciasdfasdf',
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
  name: 'Airbnb',
  endpoint: 'https://api.graph.cool/simple/v1/ciasdfasdf',
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
      name: 'text',
      type: 'String',
      required: true,
    }, {
      name: 'post',
      type: 'Post',
      relation: true,
    }],
  }],
}]
