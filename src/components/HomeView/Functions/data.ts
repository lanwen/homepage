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
    code: `var request = require('request');

module.exports = (context, req, res) => {
  const MAILGUN_API_KEY = context.secrets.MAILGUN_API_KEY
  const MAILGUN_URL = context.secrets.MAILGUN_URL

  if (!MAILGUN_API_KEY || !MAILGUN_URL) {
    console.log('Mailgun configuration is missing')
    return res.end('Mailgun configuration is missing')
  }

  const comment = context.data.createdNode

  if (!comment.post || !comment.post.author) {
    console.log('Comment or post author invalid')
    return res.end('Comment or post author invalid')
  }

  const recipient = comment.post.author

  const from = 'Instacat Notification Service \<notifications@instacat.net>'
  const to = \`\${recipient.name} <\${recipient.email}>\`
  const subject = \`A New Instacat Notification for \${recipient.name}\`
  const text = \`Hey \${recipient.name}, \${comment.author.name} just posted this comment: \${comment.text}\`

  request.post(MAILGUN_URL)
    .auth('api', MAILGUN_API_KEY)
    .form({
      from: from,
      to: to,
      subject: subject,
      text: text
    }).on('error', (err) => {
      console.log('Error sending mail ' + err.toString())
      res.end('Error sending mail')
    }).on('response', (response) => {
      console.log('Response ' + JSON.stringify(response))
      res.end()
    })
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