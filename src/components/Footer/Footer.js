import React from 'react'
import { Link } from 'react-router'
import classes from './Footer.scss'

export default class Footer extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.status}>
            <h4>Online Status</h4>
            <div className={classes.check}>
              <i /> Relay Endpoint
            </div>
            <div className={classes.check}>
              <i /> Simple GraphQL Endpoint
            </div>
          </div>
          <div className={classes.lists}>
            <div className={classes.list}>
              <h4>Product</h4>
              <ul>
                <li><Link to='https://blog.graph.cool'>Pricing</Link></li>
                <li><Link to='https://blog.graph.cool'>Documentation</Link></li>
                <li><Link to='https://blog.graph.cool'>Update Notes</Link></li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Company</h4>
              <ul>
                <li><Link to='https://blog.graph.cool'>About</Link></li>
                <li><Link to='https://blog.graph.cool'>Blog</Link></li>
                <li><Link to='https://blog.graph.cool'>Documentation</Link></li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Social</h4>
              <ul>
                <li><Link to='https://blog.graph.cool'>Twitter</Link></li>
                <li><Link to='https://blog.graph.cool'>Facebook</Link></li>
                <li><Link to='https://blog.graph.cool'>Github</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
