import * as React from 'react'

export default class ExampleStep extends React.Component<{}, {}> {
  render() {
    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex;
          }

          .root:last-child .content {
            @p: .pb0;
          }

          .counterContainer {
            @p .flexFixed, .mr20, .pt10, .tc, .relative;
            width: 50px;

            &:after {
              content: '';
              @p: .absolute, .left50, .bgLightgreen20, .tlHCenter;
              width: 2px;
              top: 46px;
              bottom: 2px;
            }
          }

          .counter {
            @p: .green, .f14, .fw6, .tracked, .ttu, .lhSolid;
          }

          .content {
            @p: .pb60;
          }

          .title {
            @p: .f25, .black80, .fw6, .mb25;
          }

          .content {
            @p: .f16, .fw4, .black60;
            line-height: 1.9;
          }

        `}</style>
        <div className='counterContainer'>
          <span className='counter'>Step 1</span>
        </div>
        <div className='contentContainer'>
          <h2 className='title'>Set up your Backend</h2>
          <p className='content'>I have hinted that I would often jerk poor Queequeg from between the whale and the ship — where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to.</p>
        </div>
      </section>
    )
  }
}
