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
            @p: .blue, .o50, .pt10, .pr10, .tr;
          }

          .content {
            @p: .flex, .flexColumn, .ph38, .pt38;
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

        `}</style>
        <div className='open-schema'>
          <a className='noUnderline' href='www.google.com'>Open IDL schema</a>
        </div>
        <div className='content'>
          <div className='top-row'>
            <div className='operation'>{this.props.scenario.operation}</div>
            {this.props.scenario.needsAuthentication &&
              <div className='flex itemsCenter'>
                <Icon
                  className='ml10'
                  src={require('../../../assets/icons/features/lock.svg')}
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
          <Codemirror
            value={this.props.scenario.snippet}
            options={{
            mode: 'graphql',
            theme: 'dracula',
          } as EditorConfiguration}
          />

        </div>
      </div>
    )
  }
}
