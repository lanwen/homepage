import * as React from 'react'
import * as cx from 'classnames'

interface Props {
  className?: string
  scenarioTitles: string[]
  selectedIndex: number
  onRowSelected: any// function
}

export default class PermissionScenarioSelection extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx('permission-scenario-selection', this.props.className)}>
        <style jsx={true}>{`

          .permission-scenario-selection {
            @p: .pa38, .bgWhite;
          }

          .title {
            @p: .fw6, .f20;
          }

          .subtitle {
            @p: .blue, .f14, .pt4, .pb38;
          }

          .row {
            @p: .f16, .black60, .pointer, .flex, .flexRow, .itemsCenter;
            height: 34px;
            margin-bottom: 8px;
            padding-left: 22px;
          }

          .row.selected {
            @p: .blue;
            padding-left: 14px;
            width: 375px;
            box-shadow: 0px 1px 3px 0px rgba(50,50,93,.2);
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
          }

          .selection-indicator {
            @p: .bgBlue;
            width: 8px;
            height: 34px;
            margin-top: -8px;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            box-shadow: 0px 1px 3px 0px rgba(50,50,93,.2);
          }

        `}</style>
        <div className='title'>
          Permission Examples
        </div>
        <div className='subtitle'>
          Select a scenario to see the permission configuration
        </div>
        {this.props.scenarioTitles.map((title, index) => (
          <div key={index} className='flex flexRow itemsCenter br2'>
            {(index === this.props.selectedIndex) &&
              <div key={index + 'A'} className='selection-indicator' />}
            <div
              key={index + 'B'}
              className={cx('row', {selected: index === this.props.selectedIndex})}
              onClick={() => this.props.onRowSelected(index)}
            >
              {title}
            </div>
          </div>
        ))}
      </div>
    )
  }

}
