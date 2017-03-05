import * as React from 'react'

const mockContents = [
  {
    title: 'What are GraphQL Subscriptions?',
    id: 'asd',
  },
  {
    title: 'Setting up your Graphcool backend',
    id: 'asd',
  },
  {
    title: 'Setting up the Apollo Client to use Subscriptions',
    id: 'asd',
  },
  {
    title: 'Building a Real-Time Chat with Subscriptions 💬',
    id: 'asd',
  },
  {
    title: 'Adding Geo-Location to the App 🗺',
    id: 'asd',
  },
  {
    title: 'Summing Up',
    id: 'asd',
  },
]

export default class ScrollSpy extends React.Component<null,null> {
  render() {
    return (
      <div className='scroll-spy'>
        <style jsx>{`
          .scroll-spy {
            @p: .fixed, .top0, .bl, .bGreen, .pl16;
            margin-top: 290px;
            width: 200px;
          }
          .steps {
            @p: .ttu, .fw6, .f14, .black30;
          }
          .contents {
            @p: .mt25;
          }
          .content {
            @p: .mt16, .black50;
          }
        `}</style>

        <div className='steps'>Steps</div>
        <div className='contents'>
          {mockContents.map(content => (
            <div key={content.title} className='content'>{content.title}</div>
          ))}
        </div>
      </div>
    )
  }
}
