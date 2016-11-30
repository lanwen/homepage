import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'

export default class AboutView extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Header/>
        About
        <Footer/>
      </div>
    )
  }
}
