import React from 'react'
import classes from './About.scss'
import Smooch from 'smooch'

export default class About extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Our vision
        </div>
        <div className={classes.sectionSubTitle}>
          We enable frontend developers to build products from scratch
          without the need to develop their own backend.<br />
          <br />
          We ourselves have built countless backend applications
          and got tired of reinventing the wheel over and over again.<br />
          GraphQL is a massive paradigm shift.
          It finally gives developers the flexibility to do all the work in the frontend.<br />
          Our job is to take care of the rest and invent the wheel one last time for you.
        </div>
        <div className={classes.buttons}>
          <div className={classes.button} onClick={Smooch.open}>Contact us</div>
          <a className={classes.button} href='https://twitter.com/graphcool'>Twitter</a>
        </div>
        <div className={classes.sectionTitle}>
          Meet the team
        </div>
        <div className={classes.sectionSubTitle}>
          We are frontend developers on our own and basically built the product we always wanted ourselves.
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/johannes.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Johannes Schickling</div>
            <div className={classes.position}>Co-founder</div>
            <div className={classes.description}>
              Obsessed with cutting edge technologies.<br />
              Co-founded and sold VR company Optonaut.<br />
              Serial hackathon winner and tech mentor.
            </div>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/soren.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Søren Bramer Schmidt</div>
            <div className={classes.position}>Co-founder</div>
            <div className={classes.description}>
              Entrepreneur and employee #1 at Trustpilot.com.<br />
              Studied computer science in Denmark.<br />
              Loves tinkering with new technology.
            </div>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/fabian.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Fabian Kozdon</div>
            <div className={classes.position}>UI/UX Designer</div>
            <div className={classes.description}>
              Impresses with a great sense for detail.<br />
              Background in almost every possible design space.<br />
              Loves steak and Club Mate.
            </div>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/nilan.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Nilan Marktanner</div>
            <div className={classes.position}>Developer</div>
            <div className={classes.description}>
              Studies math + computer science in Germany.<br />
              Enjoys giving classes in Java and Android.<br />
              Passionate about eSports and exploring new places.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
