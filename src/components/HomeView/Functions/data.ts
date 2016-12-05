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
  description: 'Send an email to the host when a new rating is created',
  payloadQuery: `{
  createdNode {
    stars,
    text,
    home {
      name
      owner {
        name,
        email
      }
    }
  }
}`,
  trigger: {
    model: 'Rating',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `var request = require('request');

module.exports = (context, cb) => {
  
  const rating = context.data.createdNode
  const recipient = rating.home.owner

  const to = \`\${recipient.name} <\${recipient.email}>\`
  const subject = \`A New rating for your property \${rating.home.name}\`
  const text = \`Hey \${recipient.name}, your property just received a new rating: \${rating.text}\`

  request.post(MAILGUN_URL)
    .auth('api', MAILGUN_API_KEY)
    .form({
      from: from,
      to: to,
      subject: subject,
      text: text
    }).on('response', (response) => {
      cb(null, 'success')
    })
}`,
  }],
}, {
  name: 'Instagram',
  description: 'Send a push notification to the author when a comment is added',
  payloadQuery: `{
  createdNode {
    text,
    author {
      name
    },
    post{
      author {
        iosToken
      }
    }
  }
}`,
  trigger: {
    model: 'Comment',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `var PushNotification = require('push-notification');

module.exports = (context, cb) => {

  const comment = context.data.createdNode
  const recipient = comment.post.author
  
  var DeviceType = PushNotification.DeviceType;
  var path = require('path');
   
  PushNotification.init({
      apn: {
          cert: path.resolve('./keys/cert.pem'),
          key: path.resolve('./keys/key.pem')
      }
  });
   
  var message = 'new comment: \${comment.text}';
   
  // send a notification to a single device 
  PushNotification.pushSingle(DeviceType.IOS, recipient.iosToken, message, null, null, null);

  cb(null, 'success')
}`,
  }, {
    language: 'go',
    code: `module.exports = function (cb) {
  cb(null, 'hello instagram!');
}`,
  }],
}, {
  name: 'Webshop',
  description: 'Verify & process order and submit to Stripe',
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