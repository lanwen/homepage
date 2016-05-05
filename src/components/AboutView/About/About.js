import React from 'react'
import classes from './About.scss'

export default class About extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Our vision
        </div>
        <div className={classes.sectionSubTitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br />
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
        <div className={classes.buttons}>
          <a className={classes.button} href='http://graph.cool/create/'>Contact us</a>
          <a className={classes.button} href='http://graph.cool/create/'>Join us</a>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/johannes.png')} />
          </div>
          <div className={classes.info}>
            <p className={classes.name}>Johannes Schickling</p>
            <p className={classes.position}>Co-founder</p>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/soren.png')} />
          </div>
          <div className={classes.info}>
            <p className={classes.name}>Søren Bramer Schmidt</p>
            <p className={classes.position}>Co-founder</p>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/fabian.png')} />
          </div>
          <div className={classes.info}>
            <p className={classes.name}>Fabian Kozdon</p>
            <p className={classes.position}>Product Designer</p>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/nilan.png')} />
          </div>
          <div className={classes.info}>
            <p className={classes.name}>Nilan Marktanner</p>
            <p className={classes.position}>Position</p>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
