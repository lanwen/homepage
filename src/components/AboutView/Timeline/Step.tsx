import * as React from 'react'

interface Props {
  date: string,
  event: string,
}

export default class Step extends React.Component<Props, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .relative;
            margin-right: 200px;

            &:after {
              @p: .absolute, .hS06, .bgLightgreen20, .top50, .left100, .tlVCenter, .br1;
              content: '';
              width: 200px;
            }

            &:last-child:after {
              background: linear-gradient(to right, rgba(42,189,60,.2) 40%, rgba(42,189,60,0) 100%);
            }
          }

          .date {
            @p: .absolute, .ttu, .black30, .fw6, .f14, .nowrap, .left50;
            top: -16px;
            transform: translate(-50%, -100%);
          }

          .dot {
            @p: .brPill, .bgGreen, .wS16, .hS16, .mh4;
          }

          .event {
            @p: .absolute, .left50, .f16, .fw4, .black50, .nowrap, .tl;
            bottom: -16px;
            transform: translate(-50%, 100%);
          }

        `}</style>
        <div className='date'>{this.props.date}</div>
        <div className='dot' />
        <div className='event'>{this.props.event}</div>
      </section>
    )
  }
}
