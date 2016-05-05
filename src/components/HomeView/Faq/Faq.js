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
            Good question! Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
          </p>
          <h3>How can I implement my server business logic?</h3>
          <p>
            Using webhooks. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
          </p>
          <h3>Can I import existing data from services like Parse?</h3>
          <p>
            Yes. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
