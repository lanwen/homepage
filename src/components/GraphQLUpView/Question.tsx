import * as React from 'react'
import {FAQItem} from './GraphQLUpFAQ'
import { $v, Icon } from 'graphcool-styles'

interface Props {
  faqItem: FAQItem
}

export default class Question extends React.Component<Props, {}> {

  render() {
    return (
      <div className='container'>
        <style jsx={true}>{`
          .container {
            @p: .flex, .pb38;
            max-width: 500px;
          }

        .circle {
            width: 24px;
            height: 24px;
          }

        `}</style>
        <div>
          <div className='circle bgGreen20 br100 flex justifyCenter itemsCenter'>
            <Icon
              src={require('../../assets/icons/pricing/question_mark.svg')}
              color={$v.green}
              height={22}
              width={9}
            />
          </div>
        </div>
        <div className='flex flexColumn'>
          <div className='fw6 pl25'>{this.props.faqItem.question}</div>
          <div className='fw3 pl25 mt10'>{this.props.faqItem.answer}</div>
        </div>
      </div>
    )
  }
}
