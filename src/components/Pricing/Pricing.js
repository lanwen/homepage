import React from 'react'
import classes from './Pricing.scss'

export default class Pricing extends React.Component {

  render () {
    return (
      <div className={classes.pricing}>
        <div className={classes.box}>
          <div className={classes.text}>
            <p className={classes.t1}>DEVELOPMENT</p>
            <h1 className={classes.t2}>$0</h1>
            <p className={classes.t3}>/MONTH</p>
            <p className={classes.t4}>Feature001 <br />
              Feature002 <br />
              Feature003 <br />
              Feature004 <br />
            </p>
            <p className={classes.t5}>READ MORE</p>

            <div className={classes.button}>

              <div>
                <div className={classes.buy}>
                  <a className={classes.buytext} href='http://graph.cool/Buy2/'>Buy</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
