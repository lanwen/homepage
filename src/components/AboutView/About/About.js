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
            <div className={classes.name}>Johannes Schickling</div>
            <div className={classes.position}>Co-founder</div>
            <div className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </div>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/fabian.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Fabian Kozdon</div>
            <div className={classes.position}>Product Designer</div>
            <div className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </div>
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.image}>
            <img height={120} src={require('assets/graphics/nilan.png')} />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>Nilan Marktanner</div>
            <div className={classes.position}>Position</div>
            <div className={classes.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
