import React from 'react'
import classes from './How.scss'

export default class Login extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.sectionTitle}>
            How it works
          </div>
          <div className={classes.sectionSubTitle}>
            Setup a backend in less than 5 minutes – no coding required
          </div>
          <div className={classes.imageLeft}>
            <div className={classes.image}>
              <img height={262} src={require('assets/graphics/how1.png')} />
            </div>
            <div className={classes.text}>
              <h3>
                1. Define your data model
              </h3>
              <p>
                Define the structure of your data using <br />
                our intuitive model editor. You can easily <br />
                manage relationships between models <br />
                and setup access permissions.
              </p>
            </div>
          </div>
          <div className={classes.imageRight}>
            <div className={classes.image}>
              <img height={262} src={require('assets/graphics/how2.png')} />
            </div>
            <div className={classes.text}>
              <h3>
                2. Import/manage data
              </h3>
              <p>
                Import your existing data (CSV & JSON) <br />
                or add new data items by hand. Use our<br />
                simple data browser to manage your<br />
                data. No database knowledge needed.
              </p>
            </div>
          </div>
          <div className={classes.imageLeft}>
            <div className={classes.image}>
              <img height={262} src={require('assets/graphics/how3.svg')} />
            </div>
            <div className={classes.text}>
              <h3>
                3. Integrate with your app
              </h3>
              <p>
                Connect your app to our GraphQL<br />
                endpoint using Relay or other client<br />
                libraries. Everything works out of the box.<br />
                No further setup required.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
