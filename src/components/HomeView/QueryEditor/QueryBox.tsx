import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
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

  @media (min-width: ${breakpoints.p1360}px) {
    &:first-child {
      width: 30%;
    }
    
    &:last-child {
      width: 70%;
    }
  }
  
  @media (max-width: ${breakpoints.p1000 - 1}px) {
    &:first-child {
      width: 30%;
    }
    
    &:last-child {
      width: 70%;
    }
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

const RowNumbers = styled.div`
  padding-top: 2px;
  line-height: 24px;
  white-space: pre;
  color: ${$v.white20};
  font-size: ${$v.size12};
  text-align: right;
  padding-right: ${$v.size06};
  flex: 0 0 auto;
`

const Pre = styled.pre`
  margin-top: ${$v.size38};
  color: ${$v.white};
  display: flex;
`

const CodeContainer = styled.div`    
  position: relative;
  overflow: hidden;
  
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${$v.size16};
  }
  
  &:before {
    left: 0;
    background: linear-gradient(to right, ${$v.darkerBlue}, ${$v.darkerBlue0});
  }
  
  &:after {
    right: 0;
    background: linear-gradient(to left, ${$v.darkerBlue}, ${$v.darkerBlue0});
  }
  
  code {
    display: block;
    padding: 0 ${$v.size16};
    overflow: auto;
  }
`

const defaultQuery = `{
  allPosts {
    id
  }
}`

interface Props {
  endpoint: string
}

interface State {
  schema: GraphQLSchema | null
  query: string
  result: any | null
}

export default class QueryBox extends React.Component<Props, State> {

  state = {
    schema: null,
    query: defaultQuery,
    result: null,
  }

  componentWillMount() {
    this.fetchSchema()
  }

  render() {
    return (
      <div className={cx($p.flex, $p.w100, $p.bbox)}>
        <CodeSection>
          <div className={cx($g.uppercaseLabel, $p.white30)}>Query</div>
          <QueryEditor
            schema={this.state.schema}
            value={this.state.query}
            onEdit={this.onEditQuery}
          />
        </CodeSection>
        <Separator className={cx($p.relative, $p.flexFixed, $p.wS04, $p.bgDarkBlue)}/>
        <CodeSection>
          <div className={cx($g.uppercaseLabel, $p.white30)}>Response</div>
          <ResultViewer value={this.state.result} />
        </CodeSection>
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
          this.setState({ result: resultString } as State)
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
