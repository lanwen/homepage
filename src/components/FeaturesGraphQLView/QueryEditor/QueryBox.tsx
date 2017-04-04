import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, isTouch } from '../../../utils/constants'
import { GraphQLSchema } from 'graphql/type/schema'
import { getSchema, queryEndpoint } from '../../../utils/graphql'
import { QueryEditor } from 'graphiql/dist/components/QueryEditor'
import { ResultViewer } from 'graphiql/dist/components/ResultViewer'
import { validate } from 'graphql/validation/validate'
import { parse } from 'graphql/language'
import * as MediaQuery from 'react-responsive'

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

const SwitchHover = `
  &:hover {
    opacity: .8;
  }
`

const SwitchTouch = `
  &:active {
    opacity: .8;
  }
`

const Switch = styled.div`
  margin-top: -${$v.size16};
  transition: opacity ${$v.duration} linear;

  ${!isTouch && SwitchHover}
  ${isTouch && SwitchTouch}
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

  componentWillReceiveProps(props: Props) {
    if (props.defaultQuery !== this.props.defaultQuery || props.endpoint !== this.props.endpoint) {
      this.setState({
        query: props.defaultQuery,
        result: null,
      } as State)

      this.fetchSchema(props.defaultQuery, props.endpoint)
    }
  }

  componentWillMount() {
    this.fetchSchema(this.props.defaultQuery, this.props.endpoint)
  }

  render() {
    const secondCodeSection = (
      <CodeSection>
        <div className={cx($p.flex, $p.justifyBetween, $p.itemsCenter)}>
          { window.innerWidth < breakpoints.p500 &&
          <Switch
            className={cx($g.uppercaseLabel, $p.white, $p.pt16, $p.pb25, $p.flex, $p.pointer)}
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
          <div className={cx($g.uppercaseLabel, $p.white30, $p.pb25)}>Response</div>
        </div>
        <ResultViewer value={this.state.result}/>
      </CodeSection>
    )

    return (
      <div className={cx($p.flex, $p.w100, $p.bbox)}>
        { !this.state.responseVisible &&
        <CodeSection>
          <div className={cx($p.flex, $p.justifyBetween, $p.itemsCenter)}>
            <div className={cx($g.uppercaseLabel, $p.white30, $p.pb25)}>Query</div>
            <MediaQuery maxWidth={500}>
              <Switch
                className={cx($g.uppercaseLabel, $p.white, $p.pt16, $p.pb25, $p.flex, $p.pointer)}
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
            </MediaQuery>
          </div>
          <QueryEditor
            schema={this.state.schema}
            value={this.state.query}
            onEdit={this.onEditQuery}
          />
        </CodeSection>
        }
        <MediaQuery minWidth={500}>
          <Separator className={cx($p.relative, $p.flexFixed, $p.wS04, $p.bgDarkBlue)}/>
        </MediaQuery>
        <MediaQuery minWidth={500}>
          {matches => matches ? (secondCodeSection) : (this.state.responseVisible && secondCodeSection)}
        </MediaQuery>
      </div>
    )
  }

  private onEditQuery = async(query: string, endpoint = this.props.endpoint) => {
    this.setState({query} as State)
    const {schema} = this.state
    if (schema) {
      try {
        if (validate(schema, parse(query)).length === 0) {
          const result = await queryEndpoint(endpoint, query)
          const resultString = JSON.stringify(result, null, 2)
          this.setState({result: resultString} as State)
        }
      } catch (err) {
        // ignore
      }
    }
  }

  private async fetchSchema(defaultQuery: string, endpoint: string) {
    const schema = await getSchema(endpoint)

    this.setState({schema} as State, () => this.onEditQuery(defaultQuery, endpoint))
  }
}
