import * as React from 'react'
import Markdown from '../Content/Markdown'
import { Parser } from 'commonmark'
import {Item} from '../../../../types/types'

interface Props {
  markdownFile: string
  stepIndex: number
}

export default class ExampleStep extends React.Component<Props, {}> {
  render() {

    const md = this.props.markdownFile
    const ast = new Parser().parse(md)

    const item = this.fakeItem()

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
          <span className='counter'>Step {this.props.stepIndex}</span>
        </div>
        <div className='contentContainer'>
          <Markdown
            ast={ast}
            layout='EXAMPLE'
            item={item}
            onChangeHeadings={() => console.log('')}
            loading={false}
          />
        </div>
      </section>
    )
  }

  private fakeItem = (): Item => {
    return {
      id: '',
      body: '',
      alias: '',
      title: '',
      beta: false,
      shorttitle: '',
      description: '',
      path: '',
      preview: '',
      lastModified: '',
      sourceFilePath: '',
      relatedMoreTitle: '',
      relatedMoreDescription: '',
      simpleRelayTwin: '',
      layout: 'EXAMPLE',
      tags: [],
      relatedMore: [],
      relatedFurther: [],
    } as Item
  }
}
