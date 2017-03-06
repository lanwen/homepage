import * as React from 'react'
import {Icon, $v} from 'graphcool-styles'

const LoadingArticle = () => (
  <div className='loading-article'>
    <style jsx>{`
      .loading-article {
        @p: .center, .ph25, .pb60;
        max-width: 960px;
        flex-basis: auto;
        flex-grow: 1;
      }
      .breadcrumb, .subtitles, .content {
        @p: .flex;
      }
      .stripe {
        @p: .br2;
        background-color: rgba(0,0,0,.07);
      }
      .left {
        flex: 0 0 40px;
        content: "";
      }
      .right {
        @p: .ml25, .flex1;
      }
      .subtitles {
        @p: .mt25;
      }
      .content {
        @p: .mt60, .relative;
        &:after {
          @p: .w100, .absolute;
          bottom: -10px;
          content: "";
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
          height: 100px;
        }
      }
      .flex {
        @p: .flex;
      }
      .circle {
        @p: .br100, .relative;
        width: 40px;
        height: 40px;
        background-color: rgba(0,0,0,.07);
        margin-top: -5px;
      }
    `}</style>
      <div className="breadcrumb">
        <div className="left">
        </div>
        <div className="right flex">
          <div className="stripe" style={{width: 78, height: 10, marginRight: 10}}></div>
          <Icon src={require('graphcool-styles/icons/stroke/arrowRight.svg')} width={10} height={10} color='rgba(0,0,0,0.07)' />
          <div className="stripe" style={{width: 103, height: 10, marginLeft: 10}}></div>
        </div>
      </div>
    <div className="content">
      <div className="left">
        <div className="circle"></div>
      </div>
      <div className="right">
        <div className="stripe" style={{width: '80%', height: 30}}></div>
        <div className="subtitles">
          <div className="stripe" style={{width: '20%', height: 12}}></div>
          <div className="stripe" style={{width: '25%', height: 12, marginLeft: 38}}></div>
          <div className="stripe" style={{width: '5%', height: 12, marginLeft: 13}}></div>
          <div className="stripe" style={{width: '7%', height: 12, marginLeft: 15}}></div>
        </div>
        <div style={{marginTop: 70}}>
          <div className="stripe" style={{width: '87%', height: 15}}></div>
          <div className="stripe" style={{width: '94%', height: 15, marginTop: 17}}></div>
          <div className="stripe" style={{width: '74%', height: 15, marginTop: 17}}></div>
        </div>
        <div style={{marginTop: 45}}>
          <div className="stripe" style={{width: '80%', height: 15}}></div>
          <div className="stripe" style={{width: '74%', height: 15, marginTop: 17}}></div>
          <div className="stripe" style={{width: '84%', height: 15, marginTop: 17}}></div>
        </div>
      </div>
    </div>
  </div>
)

export default LoadingArticle