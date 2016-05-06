import React from 'react'
import Icon from 'components/Icon/Icon'
import Smooch from 'smooch'
import classes from './Faq.scss'

export default class Faq extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          FAQ
        </div>
        <div className={classes.sectionSubTitle}>
          We already have the answers for your questions.
        </div>
        <div className={classes.questions}>
          <h3>Parse just shot down. Why should I bet on you?</h3>
          <p>
            Good question! We loved using parse but it had its shortcomings.
            One being that apps using parse tend to be very tightly coupled to the parse SDK, requiring a substantial rewrite if you want to switch backend. graph.cool on the other hand embraces the open standard GraphQL ensuring that you can change your backend at any time with only minimal changes to your fronted application.
          </p>
          <h3>How can I implement my server-side business logic?</h3>
          <p>
            We provide a powerful webhook system which lets you implement your custom business logic in a flexible way.
            You can choose any language/technology you want. <br />
            <a href='#'>Here is an example.</a>
          </p>
          <h3>How does user authentifican work?</h3>
          <p>
            You can choose from a range of different authentifican providers such as Auth0, Facebook and Twitter.
            Alternatively we provide a simple JWT based authentifican system you can extend yourself.
          </p>
        </div>
        <div className={classes.chat}>
          <Icon width={69} height={60} src={require('assets/icons/handshake.svg')} />
          <span className={classes.chatHint}>Didn't answer your question?</span>
          <div className={classes.chatButton} onClick={Smooch.open}>
            Speak to a human
          </div>
        </div>
      </div>
    )
  }
}
