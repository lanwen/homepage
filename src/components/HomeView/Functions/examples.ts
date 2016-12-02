interface Example {
  name: string
  description: string
  trigger: {
    model: string
    mutation: string
  }
  payloadQuery: string
  snippets: Snippet[]
}

interface Snippet {
  language: string
  code: string
}

export const examples: Example[] = [{
  name: 'Airbnb',
  description: 'Send an Email to the host, everytime he gets a new rating.',
  payloadQuery: `{
  createdNode {
    stars,
    description,
    author
  }
}`,
  trigger: {
    model: 'Rating',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `module.exports = function (cb) {
  cb(null, 'hello webtasks!');
}`,
  }],
}, {
  name: 'Instagram',
  description: 'Send a push notification to the author, everytime his post gets a new comment.',
  payloadQuery: `{
  createdNode {
    stars,
    description,
    author
  }
}`,
  trigger: {
    model: 'Comment',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `module.exports = function (cb) {
  cb(null, 'hello instagram!');
}`,
  }, {
    language: 'go',
    code: `module.exports = function (cb) {
  cb(null, 'hello instagram!');
}`,
  }],
}, {
  name: 'Webshop',
  description: 'Verify & process cart items of a customer and submit the order to Stripe.',
  payloadQuery: `{
  createdNode {
    stars,
    description,
    author
  }
}`,
  trigger: {
    model: 'Order',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `module.exports = function (cb) {
  cb(null, 'hello webshop!');
}`,
  }],
}]