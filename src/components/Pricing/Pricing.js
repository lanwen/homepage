import React from 'react'
import classes from './Pricing.scss'

export default class Pricing extends React.Component {

  render () {
    return (
      <div className={classes.pricing}>
        <div className={classes.box}>
          <div className={classes.border}></div>
          <div className={classes.box1text}>
            <img className={classes.timg} src='development.svg' height='60px' alt='' />
            <p className={classes.t1}>DEVELOPMENT</p>
            <h1 className={classes.t2}>$0</h1>
            <p className={classes.t3}>/MONTH</p>
            <p className={classes.t4}>Feature001 <br />
              Feature002 <br />
              Feature003 <br />
              Feature004 <br />
            </p>
            <p className={classes.t5}>READ MORE</p>
          </div>
        </div>
        <div className={classes.box}>
          <div className='border'></div>
          <div className={classes.box1text}>
            <img className={classes.timg} src='startup.svg' height='60px' alt='' />
            <p className={classes.t1}>STARTUP</p>
            <h1 className={classes.t2}>$29</h1>
            <p className={classes.t3}>/MONTH</p>
            <p className={classes.t4}>Feature001 <br />
              Feature002 <br />
              Feature003 <br />
              Feature004 <br />
            </p>
            <p className={classes.t5}>READ MORE</p>
          </div>
        </div>
        <div className={classes.box}>
          <div className='border'></div>
          <div className={classes.box1text}>
            <img className={classes.timg} src='production.svg' height='60px' alt='' />
            <p className={classes.t1}>DEVELOPMENT</p>
            <h1 className={classes.t2}>$249</h1>
            <p className={classes.t3}>/MONTH</p>
            <p className={classes.t4}>Feature001 <br />
              Feature002 <br />
              Feature003 <br />
              Feature004 <br />
            </p>
            <p className={classes.t5}>READ MORE</p>
          </div>
        </div>
        <div className={classes.box}>
          <div className='border'></div>
          <div className={classes.box1text}>
            <img className={classes.timg} src='enterprise.svg' height='60px' alt='' />
            <p className={classes.t1}>DEVELOPMENT</p>
            <h1 className={classes.t6}>CONTACT <br /> US</h1>
            <p className={classes.t7}>Feature001 <br />
              Feature002 <br />
              Feature003 <br />
              Feature004 <br />
            </p>
            <p className={classes.t8}>READ MORE</p>
          </div>
        </div>
      </div>
    )
  }
}
