import * as React from 'react'
import QuestionColumn from './QuestionColumn'
import {breakpoints} from '../../utils/constants'

export interface FAQItem {
  question: string
  answer: string
  readMoreLink?: string
}

interface Props {
}

const leftFAQItems: [FAQItem] = [
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
]

const rightFAQItems: [FAQItem] = [
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
  {
    question: 'What happens when I go over my limit?',
    answer: `Each plan has a over-quota price for additional nodes and requests. When you
    start exceeding your plan we will let you know that it is time to change your plan.`,
  },
]

export default class GraphQLUpFAQ extends React.Component<Props, {}> {

  render() {

    const shouldRenderForMobile = window.innerWidth < breakpoints.p500

    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .ph25, .pb96, .center;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .fw3, .pb60, .pt60;
          }
        `}</style>
        <div className='title'>Frequently Asked Questions</div>
        <div className={`flex ${shouldRenderForMobile && 'flexColumn'}`}>
          <QuestionColumn faqItems={leftFAQItems} />
          <QuestionColumn className={`${shouldRenderForMobile ? '' : 'pl38'}`} faqItems={rightFAQItems} />
        </div>
      </div>
    )
  }
}
