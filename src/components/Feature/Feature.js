import React from 'react'
import classes from './Feature.scss'

export default class Login extends React.Component {

  render () {
    return (
      <div className={classes.features}>
        <div className={classes.featuretitle1}>
          <p>Product Features</p>
        </div>
        <div className={classes.featuretitle2}>
          <p>Enjoy all the bells and whistles.</p>
        </div>
        <div className={classes.fline1}>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f1.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>Flexible Data Layer</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f2.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>Based on GraphQL</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f3.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>Already familiar</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div className={classes.fline2}>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f4.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>Timesaver</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f5.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>No Maintenance</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <img src='f6.svg' height='80px' alt='' />
            </div>
            <div className={classes.ftitle}>
              <p>Security</p>
            </div>
            <div className={classes.fdes}>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod <br />
              tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
