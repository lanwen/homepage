import React from 'react'
import classes from './How.scss'

export default class Login extends React.Component {

  render () {
    return (
      <div className={classes.howitworks}>
        <div className={classes.howtitle1}>
          <p>How it works</p>
        </div>
        <div className={classes.howtitle2}>
          <p>Setup a backend in less than 5 minutes – no coding required</p>
        </div>
        <div className={classes.how1}>
          <div className={classes.how1svg}>
            <img height={262} src={require('assets/graphics/how1.svg')} />
          </div>
          <div className={classes.how1text}>
            <div className={classes.how1title}>
              <p>Define your data model</p>
            </div>
            <div className={classes.how1des}>
              <p>
                Define the structure of your data using <br />
                our intuitive model editor. You can easily <br />
                manage relationships between models <br />
                and setup access permissions.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.how2}>
          <div className={classes.how2svg}>
            <img height={262} src={require('assets/graphics/how1.svg')} />
          </div>
          <div className={classes.how2text}>
            <div className={classes.how2title}>
              <p>Define your data model</p>
            </div>
            <div className={classes.how2des}>
              <p>
                Define the structure of your data using <br />
                our intuitive model editor. You can easily <br />
                manage relationships between models <br />
                and setup access permissions.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.how3}>
          <div className={classes.how3svg}>
            <img height={262} src={require('assets/graphics/how1.svg')} />
          </div>
          <div className={classes.how3text}>
            <div className={classes.how3title}>
              <p>Define your data model</p>
            </div>
            <div className={classes.how3des}>
              <p>
                Define the structure of your data using <br />
                our intuitive model editor. You can easily <br />
                manage relationships between models <br />
                and setup access permissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
