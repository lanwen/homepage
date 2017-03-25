interface Example {
  name: string
  description: string
  trigger: {
    model: string
    mutation: string,
  }
  payloadQuery: string
  snippets: Snippet[]
}

interface Snippet {
  language: string
  code: string
}

// tslint:disable
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
  }],
}, {
  name: 'Webshop',
  description: 'Verify & process order and submit to Stripe',
  payloadQuery: `{
  createdNode {
    id,
    cart {
      items {
        price
      }
    },
    delivery,
    user {
      id
    }
  }
}`,
  trigger: {
    model: 'Transaction',
    mutation: 'is created',
  },
  snippets: [{
    language: 'js',
    code: `module.exports = (context, cb) => {

  const client = new Lokka({
    transport: new Transport('https://api.graph.cool/simple/v1/__PROJECT_ID__', {'Authorization': 'Bearer __PERMANENT_AUTH_TOKEN__'})
  })

  const stripe = require("stripe")(STRIPE_SECRET);

  const transaction = context.data.createdNode
  const amount = transaction.cart.items.reduce((sum, item) => sum + item.price) + transaction.delivery

  const charge = stripe.charges.create({
    amount: amount,
    currency: "usd",
    source: transaction.stripeToken,
    description: \`Charge for \${transaction.user.id}\`
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      setTransactionStatus(transaction.id, "DECLINED")
      .then(() => cb(err, {}))
    } else {
      setTransactionStatus(transaction.id, "COMPLETED")
      .then(() => cb(null, 'success'))
    }
  });

  cb(null, 'success')
}

function setTransactionStatus(id, status) {
  return client.mutate(\`{
    updateTransaction(id: "\${id}", status: "\${status}"){
      id
    }
  }\`)
}`,
  }],
}]

