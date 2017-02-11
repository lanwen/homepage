import * as React from 'react'
import { $p } from 'graphcool-styles'

interface Props {
  name: string,
  title?: string,
  image?: string,
  companyLogo?: string,
  isCompany?: boolean
}

export default class Investor extends React.Component<Props, {}> {

  render() {

    if (this.props.isCompany) {
      return (
        <div className='root'>
          <style jsx={true}>{`
            .root {
              @p: .bgDarkBlue, .flex, .itemsCenter, .justifyCenter, .flexFixed, .pa25, .br2, .mr60, .mb60;

              &:last-child {
                margin-right: 0;
              }
            }
          `}</style>
          <img src={this.props.companyLogo} />
        </div>
      )
    }

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .itemsCenter, .mr60, .flexFixed, .mb60;

            &:last-child {
              margin-right: 0;
            }
          }

          .image {
            @p: .brPill, .mr25;
          }

          .name {
            @p: .white;
          }

          .title {
            @p: .ttu, .fw6, .tracked, .white50, .f14, .flex, .itemsCenter;
          }

          .companyLogo {
            @p: .o50, .flex, .itemsCenter;
          }

        `}</style>
        <img className='image' src={this.props.image} width='96' height='96' />
        <div>
          <h3 className='name'>{this.props.name}</h3>
          <p className='title'>
            {this.props.title}
            {this.props.companyLogo &&
            <div className='companyLogo'>
              &nbsp;@&nbsp;<img src={this.props.companyLogo} />
            </div>
            }
          </p>
        </div>
      </section>
    )
  }
}
