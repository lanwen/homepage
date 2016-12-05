import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import { GraphQLSchema } from 'graphql/type/schema'
import { getSchema, queryEndpoint } from '../../../utils/graphql'
import { QueryEditor } from 'graphiql/dist/components/QueryEditor'
import { ResultViewer } from 'graphiql/dist/components/ResultViewer'
import { validate } from 'graphql/validation/validate'
import { parse } from 'graphql/language'

const CodeSection = styled.div`
  padding: ${$v.size25} 0 ${$v.size25} ${$v.size25};
  overflow: hidden;
  
  @media (max-width: ${breakpoints.p650}px) {
    padding: ${$v.size16} 0 ${$v.size16} ${$v.size16};
  }
  
  &:first-child {
    padding: ${$v.size25};
    
    @media (max-width: ${breakpoints.p650}px) {
      padding: ${$v.size16};
    }
  }

  @media (min-width: ${breakpoints.p1360}px) {
    &:first-child {
      width: 40%;
    }
    
    &:last-child {
      width: 60%;
    }
  }
  
  @media (max-width: ${breakpoints.p1000 - 1}px) {
    &:first-child {
      width: 40%;
    }
    
    &:last-child {
      width: 60%;
    }
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    width: 100% !important;
  }
`

const Separator = styled.div`
  &:before {
    content: "";
    position: absolute;
    left: ${$v.size04};
    top: ${$v.size25};
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 8px 0 8px 10px;
    border-color: transparent transparent transparent ${$v.darkBlue};
  }
  
  @media (max-width: ${breakpoints.p650}px) {
    top: ${$v.size16};
  }
`

const Switch = styled.div`
  transition: opacity ${$v.duration} linear;
  
  &:hover {
    opacity: .8;
  }
`

interface Props {
  endpoint: string,
  defaultQuery: string,
}

interface State {
  schema: GraphQLSchema | null,
  query: string,
  result: any | null,
  responseVisible: boolean,
}

export default class QueryBox extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      schema: null,
      query: props.defaultQuery,
      result: null,
      responseVisible: false,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({query: props.defaultQuery} as State)
  }

  componentWillMount() {
    this.fetchSchema()
  }

  render() {
    return (
      <div className={cx($p.flex, $p.w100, $p.bbox)}>
        { !this.state.responseVisible &&
        <CodeSection>
          <div className={cx($p.flex, $p.justifyBetween, $p.itemsCenter)}>
            <div className={cx($g.uppercaseLabel, $p.white30, $p.pb25)}>Query</div>
            { window.innerWidth < breakpoints.p500 &&
            <Switch
              className={cx($g.uppercaseLabel, $p.white, $p.pb25, $p.flex, $p.pr16, $p.pointer)}
              onClick={() => this.setState({ responseVisible: true } as State)}
            >
              Response
              <Icon
                src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
                width={9}
                height={15}
                color={$v.white}
                stroke
                strokeWidth={10}
                className={cx($p.ml10)}
              />
            </Switch>
            }
          </div>
          <QueryEditor
            schema={this.state.schema}
            value={this.state.query}
            onEdit={this.onEditQuery}
          />
        </CodeSection>
        }
        { window.innerWidth >= breakpoints.p500 &&
        <Separator className={cx($p.relative, $p.flexFixed, $p.wS04, $p.bgDarkBlue)}/>
        }
        { (window.innerWidth >= breakpoints.p500 || this.state.responseVisible) &&
        <CodeSection>
          <div className={cx($p.flex, $p.justifyBetween, $p.itemsCenter)}>
            { window.innerWidth < breakpoints.p500 &&
            <Switch
              className={cx($g.uppercaseLabel, $p.white, $p.pb25, $p.flex, $p.pointer)}
              onClick={() => this.setState({ responseVisible: false } as State)}
            >
              <Icon
                src={require('graphcool-styles/icons/stroke/arrowLeft.svg')}
                width={9}
                height={15}
                color={$v.white}
                stroke
                strokeWidth={10}
                className={cx($p.mr10)}
              />
              Query
            </Switch>
            }
            <div className={cx($g.uppercaseLabel, $p.white30, $p.pb25, $p.pr16)}>Response</div>
          </div>
          <ResultViewer value={this.state.result}/>
        </CodeSection>
        }
      </div>
    )
  }

  private onEditQuery = async(query: string) => {
    this.setState({query} as State)
    const {schema} = this.state
    if (schema) {
      try {
        if (validate(schema, parse(query)).length === 0) {
          const result = await queryEndpoint(this.props.endpoint, query)
          const resultString = JSON.stringify(result, null, 2)
          this.setState({result: resultString} as State)
        }
      } catch (err) {
        // ignore
      }
    }
  }

  private async fetchSchema() {
    const schema = await getSchema(this.props.endpoint)

    this.setState({schema} as State)
  }
}
