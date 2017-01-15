import * as React from 'react'
import * as Modal from 'react-modal'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import styled, {keyframes} from 'styled-components'
import {$v, $p, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import ApolloClient from 'apollo-client'
import * as cookiestore from 'cookiestore'
import {find} from 'lodash'
import * as fetch from 'isomorphic-fetch'

type Endpoint = 'simple/v1' | 'relay/v1' | 'file/v1'

const StyledModal = styled(Modal)`
  width: 600px;
  max-width: 90%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 999;
  &:focus {
    outline: none;
  }
`

const Separator = styled.div`

  position: relative;
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    top: 50%;
    background: ${$v.gray10};
  }
`

const activeEndpointType = `
  background: ${$v.green};
  padding: 12px;
  border-radius: 2px;
  cursor: default;
  color: ${$v.white};

  &:hover {
    color: ${$v.white};
    background: ${$v.green};
  }
`

const EndpointField = styled.div`
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(to left, ${$v.white} 0%, rgba(255,255,255,0) 80%);
    width: 25px;
  }
`

const Copy = styled.div`
  i {
    transition: fill ${$v.duration} linear, background ${$v.duration} linear;
  }

  &:hover {
    i {
      background: ${$v.gray04};
      fill: ${$v.gray60};
    }
  }
`

const movingCopyIndicator = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
`

const CopyIndicator = styled.div`
  top: -20px;
  left: 50%;
  transform: translate(-50%,0);
  animation: ${movingCopyIndicator} .7s linear
`

const StyledSelect = styled.select`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 16px 35px 16px 16px; 
`

const DropDownIcon = styled(Icon)`
  top: 21px;
  pointer-events: none;
`

interface State {
  endpoint: Endpoint
  copied: boolean
  project: Project[]
  selectedProject: Project | null
}

interface Project {
  id: string
  name: string
}

export default class EndpointPopup extends React.Component<Modal, {}> {

  state = {
    endpoint: 'simple/v1' as Endpoint,
    copied: false,
    projects: [],
    selectedProject: null,
  }

  copyTimer: number

  client: ApolloClient

  componentWillUnmount() {
    clearTimeout(this.copyTimer)
  }

  componentWillMount() {
    const authToken = cookiestore.get('graphcool_auth_token')
    const lastUsedProjectId = cookiestore.get('graphcool_last_used_project_id')

    const query = `
      {
        viewer {
          user {
            projects(first: 100) {
              id
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `

    fetch(`${__BACKEND_ADDR__}/system`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query}),
    })
      .then(res => res.json())
      .then((res: any) => {
        const projects: Project[] = res.data.viewer.user.projects.edges.map(edge => edge.node)
        this.setState({
          projects,
          selectedProject: lastUsedProjectId ?
            find(projects, project => project.id === lastUsedProjectId) : projects[0],
        })
      })
  }

  render() {

    const EndpointType = styled.div`
      background: ${$v.gray07};
      padding: ${$v.size10};
      color: ${$v.gray30};
      letter-spacing: 1px;
      cursor: pointer;
      transition: color ${$v.duration} linear, background ${$v.duration} linear;

      &:first-child {
        border-top-left-radius: 2px;
        border-bottom-right-radius: 2px;
      }

      &:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }

      &:hover {
        background: ${$v.gray10};
        color: ${$v.gray50};
      }

      ${props => props.active && activeEndpointType}
    `

    const {endpoint, copied, projects} = this.state

    const selectedProject: Project | null = this.state.selectedProject

    let projectId
    if (selectedProject !== null) {
      projectId = selectedProject.id
    }

    const url = `${__BACKEND_ADDR__}/${endpoint}/${projectId}`

    return (
      <StyledModal
        {...this.props}
        contentLabel=''
        className={$p.buttonShadow}
        style={{
          overlay: {
            zIndex: 999,
          },
        }}
      >
        <header className={cx($p.relative, $p.pa60)}>
          <h1 className={cx($p.fw3, $p.f38, $p.tc)}>
            API Endpoints
          </h1>
          <div className={cx($p.flex, $p.justifyCenter, $p.mt25)}>
            <div className={cx($p.relative)}>
              <DropDownIcon
                src={require('graphcool-styles/icons/fill/triangle.svg')}
                className={cx($p.absolute, $p.right10)}
                width={10}
                height={10}
                rotate={90}
                color={$v.gray60}
              />
              <StyledSelect
                onChange={this.selectProject}
                className={cx($p.f16, $p.bgBlack07, $p.black60, $p.z3)}
              >
                {projects.map((project: Project) => (
                  <option value={project.id} key={project.id}>{project.name}</option>
                ))}
              </StyledSelect>
            </div>
          </div>
          <div
            className={cx(
              $p.absolute,
              $p.pa25,
              $p.top0,
              $p.right0,
              $p.pointer,
            )}
            onClick={
              () => {
                if (typeof this.props.onRequestClose === 'function') {
                  this.props.onRequestClose()
                }
              }}
          >
            <Icon
              width={25}
              height={25}
              color={$v.gray30}
              stroke
              strokeWidth={3}
              src={require('graphcool-styles/icons/stroke/cross.svg')}
            />
          </div>
        </header>
        <Separator>
          <div
            className={cx(
              $p.relative,
              $p.ph16,
              $p.bgWhite,
              $p.f14,
              $p.fw6,
              $p.ttu,
              $p.flex,
              $p.itemsCenter,
            )}
          >
            <EndpointType
              active={endpoint === 'relay/v1'}
              onClick={() => this.selectEndpoint('relay/v1')}
            >
              Relay
            </EndpointType>
            <EndpointType
              active={endpoint === 'simple/v1'}
              onClick={() => this.selectEndpoint('simple/v1')}
            >
              Simple
            </EndpointType>
            <EndpointType
              active={endpoint === 'file/v1'}
              onClick={() => this.selectEndpoint('file/v1')}
            >
              File
            </EndpointType>
          </div>
        </Separator>
        <div className={cx($p.flex, $p.ph38)}>
          <EndpointField
            className={cx(
              $p.flexAuto,
              $p.f16,
              $p.fw3,
              $p.pv38,
              $p.overflowHidden,
              $p.relative,
            )}
          >
            {url}
          </EndpointField>
          <CopyToClipboard
            text={url}
            onCopy={this.onCopy}
          >
            <Copy
              className={cx(
                $p.relative,
                $p.bgWhite,
                $p.selfCenter,
                $p.br2,
                $p.buttonShadow,
                $p.pointer,
              )}
            >
              {copied && (
                <CopyIndicator
                  className={cx(
                    $p.o0,
                    $p.absolute,
                    $p.f14,
                    $p.fw6,
                    $p.blue,
                  )}
                >
                  Copied
                </CopyIndicator>
              )}
              <Icon
                width={38}
                height={38}
                color={$v.gray50}
                src={require('graphcool-styles/icons/fill/copy.svg')}
              />
            </Copy>
          </CopyToClipboard>
        </div>
        <p
          className={cx(
            $p.bt,
            $p.bBlack10,
            $p.pa38,
            $p.lhCopy,
            $p.black50,
            $p.f16,
            $p.fw4,
          )}
        >
          {'Please copy the endpoint URL and paste it into your app\'s GraphQL client code. You can '}
          <a
            className={$p.green}
            target='_blank'
            href='/docs/reference/simple-api-heshoov3ai#differences-to-the-relay-api'
          >
            read about the differences between the Simple and Relay API here
          </a>
          {' or '}
          <a className={$p.green} target='_blank' href='https://github.com/graphcool-examples/'>
            check out some code examples
          </a>
          {'.'}
        </p>
      </StyledModal>
    )
  }

  private selectEndpoint = (endpoint: Endpoint) => {
    this.setState({copied: false, endpoint} as State)
  }

  private onCopy = () => {
    this.setState({copied: true} as State)
    this.copyTimer = window.setTimeout(
      () => this.setState({copied: false} as State),
      1000,
    )
  }

  private selectProject = (e: any) => {
    const projectId = e.target.value
    const {projects} = this.state
    const foundProject: Project | null = find(projects, (project: Project) => project.id === projectId) || null
    this.setState({ selectedProject:  foundProject} as State)
  }
}
