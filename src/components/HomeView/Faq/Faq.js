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
            Good question! Besides the fact that Parse was shut down by Facebook because of&nbsp;
            <a href='http://nyti.ms/1OSPxj1'>strategical reasons</a>,
            we're embracing an open standard: GraphQL.<br />
            That means even in the very unlikely case of a shutdown you can still use exactly the same system.
            (Which is <a href='https://github.com/graphcool'>open source</a> by the way.)
            So don't worry about vendor lockin.
          </p>
          <h3>How can I implement my server-side business logic?</h3>
          <p>
            We provide a powerful webhook system which lets you implement your custom business logic in a flexible way.
            You can choose any language/technology you want. <br />
            <a href='#'>Here is an example.</a>
          </p>
          <h3>How does user authentication work?</h3>
          <p>
            You can choose from a range of different authentication providers such as Auth0, Facebook and Twitter.
            Alternatively we provide a simple JWT based authentication system you can extend yourself.&nbsp;
            <a href='http://docs.graph.cool/docs/security/'>You can read more about it here.</a>
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
