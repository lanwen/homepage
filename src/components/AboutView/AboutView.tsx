import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'
import { persons } from './data'
import DiffView = CodeMirror.MergeView.DiffView
import HorScrollbox from '../HorScrollbox'
import Pagination from '../HomeView/Pagination'

export default class AboutView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    const Intro = styled.div`
       @media(max-width: ${breakpoints.p1200}px) {
        margin-right: ${$v.size20};
        margin-left: ${$v.size20};
       }
       
        @media(max-width: ${breakpoints.p900}px) {
        margin-right: ${$v.size10};
        margin-left: ${$v.size10};
       }
`
    const About = styled.div`
      flex: 1 400px;
      color: rgba(0, 0, 0, 0, 0.8);
      
        @media(max-width: ${breakpoints.p1200}px) {
          font-size: ${$v.size16};
        }
`
    const Description = styled.div`
      flex: 1 300px;
      
        @media(max-width: ${breakpoints.p1200}px) {
          font-size: ${$v.size32};
        }
`
    const Name = styled.div`
      font-weight: 100;
      padding-bottom: ${$v.size06};
`
    const Position = styled.div`
      color: rgba(0, 0, 0, 0.3);
      font-size: ${$v.size16};
      font-weight: 600;
`
    const PhotoSection = styled.div`
      @media(min-width: ${breakpoints.p1250}px) {
        padding-left: ${$v.size96};
        padding-right: ${$v.size96};
        }
`
    const Person = styled.div`
       position: relative;
       overflow: visible;
       box-sizing: border-box; 
       flex: 0;
       flex-basis: 32%;
       
       .asd {
          display: none;
          background: #fff;
          background: cover;
          width: 100%;
          height: 125%;
          box-shadow:0 8px 18px rgba(0, 0, 0, 0.03),
            0 -8px 18px rgba(0, 0, 0, 0.03);
          position: absolute;
          top: 0%;
          left: 0%;
       }
       
       &:hover .asd {
        display: flex;
        flex: 1;
        z-index: 10;
       }
       
       @media(max-width: ${breakpoints.p1200}px) {
        flex: 0;
        flex-basis: 35%;
        }
  
       .line {
         width: 100%;
         float: left;
         margin-top:27px;
         border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
       .hr {
         height:15px;
         padding-bottom: 15px;
         width: 25%;
         float: left;
}

`
    const Image = styled.img`
      max-width: 150px;
`
    const Border = styled.div`
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.05),
      0 -8px 18px rgba(0, 0, 0, 0.05);
      min-width: 230px;
      
     .line {
       width: 100%;
       float: left;
       margin-top:27px;
       border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
       .hr {
         height:15px;
         padding-bottom: 15px;
         width: 25%;
         float: left;
}
`
    const Container = styled(HorScrollbox)`
`
    return (
      <div>
        <Header/>
        <Intro className={cx($p.flex, $p.flexWrap, $p.flexAuto, $p.mh38, $p.mb60)}>
          <Description className={cx($p.itemsCenter, $p.flex, $p.ph38, $p.f38, $p.fw3)}>
            We're building the only backend you’ll ever need.
          </Description>
          <About className={cx($p.itemsCenter, $p.flex, $p.pa38, $p.f20, $p.o50, $p.fw4)}>
            {//tslint:disable-next-line
              <article>We enable frontend developers to build products from scratch without the need to develop
              their own backend. We ourselves have built countless backend applications and got tired of reinventing
              the wheel over and over again. GraphQL is a massive paradigm shift. It finally gives developers the
              flexibility to do all the work in the frontend.
              Our job is to take care of the rest and invent the wheel one last time for you. business logic?
              </article>
            }
          </About>
        </Intro>
        <section className={cx($p.bgBlack04, $p.pt96)}>
          <article className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.flexColumn, $p.ph38, $p.pb16)}>
            <h1 className={cx($p.selfCenter, $p.pb10)}>We’re developers on our own.</h1>
            <h4 className={cx($p.selfCenter, $p.o50)}>… and basically built the product we always wanted ourselves.</h4>
          </article>
          <div>
            {window.innerWidth < breakpoints.p900 ? (
              <div className={cx($p.flex, $p.justifyCenter, $p.flexColumn, $p.pb25)}>
                <div className={cx($p.selfCenter, $p.pv16)}>
                  <Pagination
                    bullets={4}
                    grayscale
                    active={0}
                    onSelect={() => null}
                  />
                </div>
                <Container className={cx($p.flex, $p.justifyBetween, $p.pb60)}>
                  {persons.map(person => (
                    <Border className={cx($p.flex1, $p.tc, $p.ma16, $p.pa16)}>
                      <img className={cx($p.pv38)} src={person.image}/>
                      <Name className={cx($p.f20, $p.fw6)}>{person.name}</Name>
                      <Position className={cx($p.pb16)}>{person.title}</Position>
                      <div className={cx($p.flex, $p.justifyCenter)}>
                        <div className={cx('hr')}>
                          <div className={cx('line')}></div>
                        </div>
                        <a href={person.links.linkedin} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/linkedin.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <a href={person.links.twitter} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/twitter.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <a href={person.links.github} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/github.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <div className={cx('hr')}>
                          <div className={cx('line')}></div>
                        </div>
                      </div>
                      <h5 className={cx($p.black50, $p.fw4, $p.pv25)}>
                        {person.description}
                      </h5>
                    </Border>
                  ))}
                </Container>
              </div>) : (
              <PhotoSection className={cx($p.flex, $p.justifyAround, $p.pb38, $p.flexWrap)}>
                {persons.map(person => (
                  <Person className={cx($p.tc, $p.pv96)}>
                    <img className={cx($p.pb38)} src={person.image}/>
                    <Name className={cx($p.f25)}>{person.name}</Name>
                    <Position>{person.title}</Position>
                    <section className={cx('asd', $p.flexColumn, $p.flex, $p.flexWrap)}>
                      <Image className={cx($p.pv38, $p.selfCenter)} src={person.image}/>
                      <Name className={cx($p.f25)}>{person.name}</Name>
                      <Position className={cx($p.pb25)}>{person.title}</Position>
                      <div className={cx($p.flex, $p.justifyCenter)}>
                        <div className={cx('hr')}>
                          <div className={cx('line')}></div>
                        </div>
                        <a href={person.links.linkedin} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/linkedin.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <a href={person.links.twitter} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/twitter.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <a href={person.links.github} target='_blank'>
                          <Icon
                            src={require('../../assets/icons/logos/github.svg')}
                            color={$v.lightGreen30}
                            height={26}
                            width={26}
                            className={$p.pa6}
                          />
                        </a>
                        <div className={cx('hr')}>
                          <div className={cx('line')}></div>
                        </div>
                      </div>
                      <h4 className={cx($p.ph38, $p.pv38, $p.black50, $p.fw3)}>
                        {person.description}
                      </h4>
                    </section>
                  </Person>
                ))}
              </PhotoSection>
            )}
          </div>
        </section>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
