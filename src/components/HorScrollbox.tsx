// import * as React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  
  &::-webkit-scrollbar {
    display: none;
    background: transparent;
  }
  
  scrollbar-base-color : rgba(0,0,0,0);
  scrollbar-track-color : rgba(0,0,0,0);
  scrollbar-highlight-color : rgba(0,0,0,0);
  scrollbar-3d-light-color : rgba(0,0,0,0);
  scrollbar-dark-shadow-color : rgba(0,0,0,0);
  scrollbar-shadow-color : rgba(0,0,0,0);
  scrollbar-arrow-color : rgba(0,0,0,0);
`

export default Outer

// const Inner = styled.div`
//   overflow: scroll;
//   -webkit-overflow-scrolling: touch;
//
//   &::-webkit-scrollbar {
//     display: none;
//     background: transparent;
//   }
// `
//
// interface Props {
//   children: Element
//   className?: string
//   [key: string]: any
// }
//
// export default class HorScrollbox extends React.PureComponent<Props, {}> {
//
//   render() {
//     const { children, className } = this.props
//     const restProps = Object.assign({}, this.props)
//     delete restProps.children
//
//     return (
//       <Outer {...restProps}>
//         <Inner className={className}>
//           {children}
//         </Inner>
//       </Outer>
//     )
//   }
// }
