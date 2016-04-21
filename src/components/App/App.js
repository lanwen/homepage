import React from 'react'
import Icon from 'components/Icon/Icon'
import Header from 'components/Header/Header'
import classes from './App.scss'

export default class App extends React.Component {

  render () {
    return (
      <div className={classes.container}>
        <Header />
        <div className='login1'>
          <div id='log1text'>
            <p>Getting started is easy. Be up and running in minutes.</p>
          </div>
          <div id='log1button'>
            <div id='log1buttontext'>
              <p>CREATE A FREE ACCOUNT </p>
            </div>
          </div>
        </div>
        <div id='features'>
          <div id='featuretitle1'>
            <p>Product Features</p>
          </div>
          <div id='featuretitle2'>
            <p>Enjoy all the bells and whistles.</p>
          </div>
          <div id='fline1'>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f1.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>Flexible Data Layer</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f2.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>Based on GraphQL</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f3.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>Already familiar</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div id='fline2'>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f4.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>Timesaver</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f5.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>No Maintenance</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
            <div className='fea'>
              <div className='fsvg'>
                <img src='f6.svg' height='80px' alt='' />
              </div>
              <div className='ftitle'>
                <p>Security</p>
              </div>
              <div className='fdes'>
                Lorem ipsum dolor sit amet, consetetur <br />
                sadipscing elitr, sed diam nonumy eirmod <br />
                tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
        </div>
        <div id='howitworks'>
          <div id='howtitle1'>
            <p>How it works</p>
          </div>
          <div id='howtitle2'>
            <p>Setup a backend in less than 5 minutes – no coding required</p>
          </div>
          <div id='how1'>
            <div id='how1svg'>
              <img src='how1.svg' width='400px' alt='' />
            </div>
            <div id='how1text'>
              <div id='how1title'>
                <p>Define your data model</p>
              </div>
              <div id='how1des'>
                <p>
                  Define the structure of your data using <br />
                  our intuitive model editor. You can easily <br />
                  manage relationships between models <br />
                  and setup access permissions.
                </p>
              </div>
            </div>
          </div>
          <div id='how2'>
            <div id='how2svg'>
              <img src='how1.svg' width='400px' alt='' />
            </div>
            <div id='how2text'>
              <div id='how2title'>
                <p>Define your data model</p>
              </div>
              <div id='how2des'>
                <p>
                  Define the structure of your data using <br />
                  our intuitive model editor. You can easily <br />
                  manage relationships between models <br />
                  and setup access permissions.
                </p>
              </div>
            </div>
          </div>
          <div id='how3'>
            <div id='how3svg'>
              <img src='how1.svg' width='400px' alt='' />
            </div>
            <div id='how3text'>
              <div id='how3title'>
                <p>Define your data model</p>
              </div>
              <div id='how3des'>
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
        <div id='pricing'>
          <div id='box'>
            <div className='border'></div>
            <div id='box1text'>
              <img id='timg'src='development.svg' height='60px' alt='' />
              <p id='t1'>DEVELOPMENT</p>
              <h1 id='t2'>$0</h1>
              <p id='t3'>/MONTH</p>
              <p id='t4'>Feature001 <br />
                Feature002 <br />
                Feature003 <br />
                Feature004 <br />
              </p>
              <p id='t5'>READ MORE</p>
            </div>
          </div>
          <div id='box'>
            <div className='border'></div>
            <div id='box1text'>
              <img id='timg'src='startup.svg' height='60px' alt='' />
              <p id='t1'>STARTUP</p>
              <h1 id='t2'>$29</h1>
              <p id='t3'>/MONTH</p>
              <p id='t4'>Feature001 <br />
                Feature002 <br />
                Feature003 <br />
                Feature004 <br />
              </p>
              <p id='t5'>READ MORE</p>
            </div>
          </div>
          <div id='box'>
            <div className='border'></div>
            <div id='box1text'>
              <img id='timg'src='production.svg' height='60px' alt='' />
              <p id='t1'>DEVELOPMENT</p>
              <h1 id='t2'>$249</h1>
              <p id='t3'>/MONTH</p>
              <p id='t4'>Feature001 <br />
                Feature002 <br />
                Feature003 <br />
                Feature004 <br />
              </p>
              <p id='t5'>READ MORE</p>
            </div>
          </div>
          <div id='box'>
            <div className='border'></div>
            <div id='box1text'>
              <img id='timg'src='enterprise.svg' height='60px' alt='' />
              <p id='t1'>DEVELOPMENT</p>
              <h1 id='t6'>CONTACT <br /> US</h1>
              <p id='t7'>Feature001 <br />
                Feature002 <br />
                Feature003 <br />
                Feature004 <br />
              </p>
              <p id='t8'>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
