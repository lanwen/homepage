import * as React from 'react'
import {FAQItem} from './GraphQLUpFAQ'
import Question from './Question'

interface Props {
  faqItems: [FAQItem]
  className?: string
}

export default class QuestionColumn extends React.Component<Props, {}> {

  render() {
    return (
      <div className={this.props.className}>
        {this.props.faqItems.map((faqItem, i) => {
          return (
            <Question key={i} faqItem={faqItem}/>
          )
        })}
      </div>

    )
  }
}
