import * as React from 'react'
import {Icon, $v} from 'graphcool-styles'

export default class Searchbar extends React.Component<{},{}> {
  render() {
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgWhite, .br2, .overflowHidden, .relative, .buttonShadow, .w100, .pa16, .flex, .itemsCenter, .pointer;

            &:after {
              content: '';
              @p: .absolute, .right16, .top0, .bottom0, .wS10;
              background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
            }
          }

          .searchbarInput {
            @p: .black80, .pa0, .pl12, .w100, .pointer;
          }

          @media (max-width: 899px) {
            .root {
              @p: .mr25;
              min-width: 0;
            }

            .searchbarInput {
              @p: .f14;
            }
          }

          @media (min-width: 900px) {
            .root {
              @p: .mr38;
              min-width: 100px;
            }

            .searchbarInput {
              @p: .f16;
            }
          }
        `}</style>
        <Icon
          width={16}
          height={16}
          src={require('graphcool-styles/icons/stroke/search.svg')}
          stroke={true}
          color={$v.gray80}
          strokeWidth={4}
          className='searchbarIcon'
        />
        <input className='searchbarInput' type='text' placeholder='Search for references, ressources or articles...' />
      </div>
    )
  }
}





