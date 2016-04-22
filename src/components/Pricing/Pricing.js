import React from 'react'
import classes from './Pricing.scss'

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
       <Icon width={40} height={40} src={require('assets/icons/f1.svg')} />
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
       <Icon width={40} height={40} src={require('assets/icons/f1.svg')} />
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
       <Icon width={40} height={40} src={require('assets/icons/f1.svg')} />
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
</div>

    )
  }
}
