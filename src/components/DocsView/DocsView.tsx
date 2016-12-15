import * as React from 'react'
import Footer from '../Footer/Footer'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'
import Markdown from '../Markdown/Markdown';
import Lokka from 'lokka'
import Transport from 'lokka-transport-http'
import * as _ from 'lodash'
import {Node, Parser} from 'commonmark'
import ListItems from './ListItems'
import Header from './Header/Header'
import RelatedContent from './RelatedContent/RelatedContent'
import {Link} from 'react-router'

const decode64 = (str: string): string => atob(str);

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/ciwlyk90l0gq80101eao599fk')
});

interface State {
  ast: any
}

interface Props {
  location: any
}

export default class DocsView extends React.Component<Props, State> {

  state = {
    ast: null
  }

  componentDidMount() {
    client.query(`
      query {
        allItems {
          id
          body
          layout
          tags
        }
      }
  `).then(result => {
        const parser = new Parser();
        const parsedDecodedResult = _.map(result.allItems, (item) => parser.parse(decode64(item.body as string)))
        console.log(parsedDecodedResult)
        this.setState({ast: parsedDecodedResult[1]} as State)
        console.log(this.state)
      });

    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    const FixedNavigation = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
    `

    const VerticalContainer = styled.div`
      flex: 0 0 300px;
      background-color: rgba(0, 0, 0, 0.02);
      
      @media (max-width: ${breakpoints.p1360}px) {
        flex: 0 0 250px;
      }
  `
    const RightSection = styled.div`
       flex: 1 1 100px;
       z-index: 100;
`
    const LogoDocs = styled.img`
      @media (max-width: ${breakpoints.p1360}px) {
        padding-left: ${$v.size38}
      }
`

    return (
      <div>
        <div className={cx($p.flex, $p.flexColumn)}>

          <div className={cx($p.flex)} ref='root'>
            <VerticalContainer>
              <FixedNavigation>
                <Link to='/'>
                  <LogoDocs className={cx($p.pa60)} src={require('../../assets/graphics/logos/DockLogo.svg')}/>
                </Link>
                <ListItems
                  title='GETTING STARTED'
                  subtitle1=''
                  subsubtitle1=''
                  subsubsubtitle1=''
                  subtitle2=''
                  subsubtitle2=''
                />
                <ListItems
                  title='CONSOLE'
                  subtitle1=''
                  subsubtitle1=''
                  subsubsubtitle1=''
                  subtitle2=''
                  subsubtitle2=''
                />
                <ListItems
                  title='AUTHENTICATION'
                  subtitle1=''
                  subsubtitle1=''
                  subsubsubtitle1=''
                  subtitle2=''
                  subsubtitle2=''
                />
                <ListItems
                  title='FILE MANAGEMENT'
                  subtitle1=''
                  subsubtitle1=''
                  subsubsubtitle1=''
                  subtitle2=''
                  subsubtitle2=''
                />
                <ListItems
                  title='SIMPLE API'
                  subtitle1='Introduction'
                  subsubtitle1='Details'
                  subsubsubtitle1='Super Details'
                  subtitle2='Making API Requests'
                  subsubtitle2=''
                />
                <ListItems
                  title='RELAY API'
                  subtitle1=''
                  subsubtitle1=''
                  subsubsubtitle1=''
                  subtitle2=''
                  subsubtitle2=''
                />
              </FixedNavigation>
            </VerticalContainer>
            <RightSection className={cx($p.flexWrap)}>
              <Header/>
              {
                (() => {
                  console.log(this.props.location.pathname)
                  if(this.props.location.pathname === '/docs/reference') return <h1>We are on the reference page!</h1>
                })()
              }
              <section className={cx($p.flex, $p.flexWrap, $p.pa10)}>
                {this.state.ast === null ? <h1>Loading...</h1> : <Markdown ast={this.state.ast}/>}
              </section>
              <RelatedContent />
            </RightSection>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
