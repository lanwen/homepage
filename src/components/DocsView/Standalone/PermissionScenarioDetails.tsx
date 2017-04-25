import * as React from 'react'
import {Scenario} from './PermissionsExamplesBox'
import Icon from 'graphcool-styles/dist/components/Icon/Icon'
import * as cx from 'classnames'
import EditorConfiguration = CodeMirror.EditorConfiguration
import * as Codemirror from 'react-codemirror'

interface Props {
  className?: string
  scenario: Scenario
}

export default class PermissionScenarioDetails extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx('permission-scenario-details', this.props.className)}>
        <style jsx={true}>{`
          .permission-scenario-details {
            @p: .bgBlack02;
          }

          .open-schema {
            @p: .o50, .pt10, .pr10, .tr;
          }

          .open-schema a {
            @p: .blue;
          }

          .content {
            @p: .flex, .flexColumn, .pt38;
            width: 380px;
            padding: 0 50px 0 50px;
          }

          .top-row {
            @p: .flex, .flexRow, .itemsCenter;
          }

          .operation {
            @p: .ttu, .white, .f14, .fw6, .bgBlack20, .br2, .pv4, .ph10;
          }

          .needs-authentication {
            @p: .ttu, .f14, .fw6, .black40, .ml6;
          }

          .operation-applies {
            @p: .flex, .flexRow, .f14, .black40, .pt16, .pb38;
          }

          .code-mirror-box {
            @p: .relative, .nosb;
            max-height: 275px;
            overflow-y: auto;
          }

          .code-mirror-wrap:after {
            @p: .absolute, .left0, .right0, .bottom0, .z999;
            content: "";
            height: 100px;
            background: linear-gradient(to bottom, rgba(250,250,250,0), rgba(250,250,250,1));
          }

          .code-mirror-wrap {
            @p: .relative;
          }

          .code-mirror-wrap :global(.Codemirror-scroll) {
            height: auto !important;
          }

        `}</style>
        <div className='open-schema'>
          <a target='_blank' className='noUnderline' href='http://graphqlbin.com/blogging.graphql'>Open IDL schema</a>
        </div>
        <div className='flex flexColumn itemsCenter'>
          <div className='content'>
            <div className='top-row'>
              <div className='operation'>{this.props.scenario.operation}</div>
              {this.props.scenario.needsAuthentication &&
              <div className='flex itemsCenter'>
                <Icon
                  className='ml10'
                  src={require('../../../assets/icons/lock.svg')}
                />
                <div
                  className='needs-authentication'
                >
                  Needs Authentication
                </div>
              </div>
              }
            </div>
            <div className='operation-applies'>
              <div>{this.props.scenario.appliesToSentence}</div>
              {this.props.scenario.appliesToItems.map((fieldName, index) => (
                <div
                  key={index}
                  className='fw6 ml6'
                >{fieldName + (index < this.props.scenario.appliesToItems.length - 1 ? ',' : '')}</div>
              ))}
            </div>
            <div className='code-mirror-wrap'>
            <div className='code-mirror-box'>
              <Codemirror
                value={this.props.scenario.snippet}
                options={{
                mode: 'graphql',
                theme: 'mdn-like',
                readOnly: true,
              } as EditorConfiguration}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
