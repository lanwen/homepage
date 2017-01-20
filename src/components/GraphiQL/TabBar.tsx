import * as React from 'react'
import {Session} from '../Playground'
import {Icon, $v} from 'graphcool-styles'

interface Props {
  sessions: Session[]
  selectedSessionIndex: number
}

export const TabBar = ({}: Props) => (
  <div className='root'>
    <style jsx={true}>{`
      .root {
        @inherit: .white;
        height: 57px;
        background-color: #09141C;

        path {
          stroke: white;
        }
      }

      .tabs {
        @inherit: .mt16, .ml16, .flex, .itemsCenter;
        height: 41px;
      }

      .tab {
        @inherit: .flex, .itemsCenter, .bgDarkerBlue, .br2, .brTop, .ml10, .bbox;
        height: 43px;
        padding: 10px;
        padding-top: 9px;
        &.active {
          @inherit: .bgDarkBlue;
        }
      }

      .icons {
        @inherit: .flex, .itemsCenter, .o50;
        &.active {
          @inherit: .o100;
        }
      }

      .red-dot {
        @inherit: .br100, .bgrRed, .mr10;
        width: 7px;
        height: 7px;
      }

      .query-types {
        @inherit: .flex, .itemsCenter;
        margin-right: 2px;
      }

      .query-type {
        @inherit: .br2, .flex, .itemsCenter, .justifyCenter, .mr4, .fw7, .f12;
        height: 21px;
        width: 21px;
      }

      .subscription {
        background-color: rgb(164,3,111);
      }

      .query {
        @inherit: .bgBlue;
      }

      .mutation {
        background-color: rgb(241,143,1);
      }

      .viewer {
        @inherit: .mr10;
      }

      .operation-name {
        @inherit: .o50;
        &.active {
          @inherit: .o100;
        }
      }

      .close {
        @inherit: .ml10, .o50;
        &.active {
          @inherit: .o100;
        }
      }

      .plus {
        @inherit: .flex, .justifyCenter, .itemsCenter;
        width: 43px;
      }
    `}</style>
    <div className="tabs">
      <Icon
        className='icon'
        src={require('graphcool-styles/icons/stroke/history.svg')}
        stroke={true}
        strokeWidth={3}
        width={25}
        height={25}
        color={$v.white40}
      />
      <div className="tab active">
        <div className="icons active">
          <div className="red-dot"></div>
          <div className="query-types">
            <div className="query-type subscription">S</div>
          </div>
          <div className="viewer">
            <Icon
              src={require('graphcool-styles/icons/fill/world.svg')}
              color={$v.white40}
              width={14}
              height={14}
            />
          </div>
        </div>
        <div className="operation-name active">createField</div>
        <div className="close active">
          <Icon
            src={require('graphcool-styles/icons/stroke/cross.svg')}
            stroke={true}
            color={$v.white40}
            width={11}
            height={10}
            strokeWidth={8}
          />
        </div>
      </div>
      <div className="tab">
        <div className="icons">
          <div className="query-types">
            <div className="query-type query">Q</div>
            <div className="query-type mutation">M</div>
          </div>
          <div className="viewer">
            <Icon
              src={require('graphcool-styles/icons/fill/user.svg')}
              color={$v.white40}
              width={14}
              height={14}
            />
          </div>
        </div>
        <div className="operation-name">createField</div>
        <div className="close">
          <Icon
            src={require('graphcool-styles/icons/stroke/cross.svg')}
            stroke={true}
            color={$v.white40}
            width={11}
            height={10}
            strokeWidth={8}
          />
        </div>
      </div>
      <div className="tab plus">
        <Icon
          src={require('graphcool-styles/icons/stroke/add.svg')}
          color='rgba(255,255,255,.15)'
          width={34}
          height={34}
          stroke={true}
          strokeWidth={4}
        />
      </div>
    </div>
  </div>
)