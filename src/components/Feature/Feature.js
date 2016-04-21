import React from 'react'
import Icon from 'components/Icon/Icon'
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
              <Icon width={80} height={80} src={require('assets/icons/f1.svg')} />
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
              <Icon width={80} height={80} src={require('assets/icons/f2.svg')} />
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
              <Icon width={80} height={80} src={require('assets/icons/f3.svg')} />
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
              <Icon width={80} height={80} src={require('assets/icons/f4.svg')} />
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
              <Icon width={80} height={80} src={require('assets/icons/f5.svg')} />
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
              <Icon width={80} height={80} src={require('assets/icons/f6.svg')} />
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
