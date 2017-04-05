import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import SlackBox from './SlackBox'
import {breakpoints} from '../../../../utils/constants'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Item} from '../../../../types/types'
import {Link} from 'react-router'

interface Props {
  data?: Data
}

interface Data {
  loading: boolean
  allItems: Item[]
}

const Community = ({data}: Props) => (
  <div className='community-wrapper'>
    <style jsx>{`
      .community-wrapper {
        background: rgba(0,0,0,.02);
        min-height: 260px;
        margin: 25px 0;
      }
      .community {
        @p: .f20, .black70, .fw5, .ttu, .flex, .itemsCenter, .mt6, .flexWrap;
      }
      @media (max-width: 580px) {
        .community {
          height: auto;
        }
      }
      .b {
        @p: .fw6;
      }
      .community span {
        @p: .ml6;
      }
      .forum-header {
        @p: .mb16, .inlineFlex;
      }
      .forum-text {
        @p: .mt10;
      }
      .link {
        @p: .bgWhite, .pa10, .buttonShadow, .fw6, .ttu, .green, .f14, .inlineFlex, .mt25, .itemsCenter, .pointer;
        @p: .noUnderline;
        letter-spacing: 0.53px;
        span {
          @p: .mr6;
        }
      }
      .feature {
        @p: .ph38;
        width: 30%;
      }
      @media (max-width: 750px) {
        .feature {
          @p: .mt60;
          width: 100% !important;
        }
      }
      .latest-posts {
        @p: .ttu, .black30, .f14, .fw6;
        letter-spacing: 0.53px;
      }
      .community-wrapper :global(.post) {
        @p: .flex, .mt10, .noUnderline;
        .nr {
          @p: .black30, .f16;
          letter-spacing: 0.53px;
        }
        .title {
          @p: .ml10, .black60, .f16, .fw6;
        }
      }
      .container {
        @p: .flex, .itemsCenter;
        max-width: 1050px;
        margin: 0 auto;
        position: relative;
        top: -20px;

        @media (max-width: ${breakpoints.p750}px) {
          @p: .pt25, .pl25, .pr25, .flexColumn;
        }
      }
    `}</style>
    <div className='container'>
      <SlackBox
        className={cx(
          $p.pt25,
          window.innerWidth > breakpoints.p750 ? $p.mt10 : $p.mt38,
          window.innerWidth > breakpoints.p750 && $p.mr38,
        )}
      />
      <div className='feature'>
        <div className='forum-header'>
          <img src={require('assets/graphics/logos/graphcool.svg')} />
          <div className='community'>
            <span className='b'>Graphcool</span>
            <span>Community</span>
          </div>
        </div>
        <div className='forum-text'>Stuck somewhere? For help with your specific use case, join our forum.</div>
        <a className='link' target='_blank' href='https://www.graph.cool/forum/'>
          <span>Sign up for the Forum</span>
          <Icon
            src={require('graphcool-styles/icons/fill/fullArrowRight.svg')}
            color={$v.green}
            height={14}
            width={14}
          />
        </a>
      </div>
      <div className='feature'>
        <div className='latest-posts'>
          Latest Posts
        </div>

        {data.loading ? (
          'Loading'
        ) : (
          data.allItems.map((item, index) => (
            <Link to={`${item.path}-${item.alias}`} key={item.id} className='post'>
              <div className='nr'>#{index + 1}</div>
              <div className='title'>{item.title}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  </div>
)

const query = gql`
  {
    allItems(
      orderBy: updatedAt_DESC
      first: 3
    ) {
      id
      path
      alias
      title
      shorttitle
    }
  }
`

export default graphql(query)(Community)
