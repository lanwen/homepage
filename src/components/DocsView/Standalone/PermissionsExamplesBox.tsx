import * as React from 'react'
import PermissionScenarioSelection from './PermissionScenarioSelection'
import PermissionScenarioDetails from './PermissionScenarioDetails'

export interface Scenario {
  title: string
  operation: string
  needsAuthentication: boolean
  appliesToSentence: string
  appliesToItems: string[]
  snippet: string
}

const scenarios = [
  {
    title: 'Everyone can see a published Post',
    operation: 'View Post',
    needsAuthentication: false,
    appliesToSentence: 'Operation applies to fields:',
    appliesToItems: ['id', 'text', 'isPublished'],
    snippet: `\
query permitViewPosts($node_id: ID!) {
  somePostExists(filter: {
    id: $node_id
    isPublished: true
  })
}
    `,
  },
  {
    title: 'Only authenticated users can create a Post',
    operation: 'Create Post',
    needsAuthentication: true,
    appliesToSentence: 'Operation applies to fields:',
    appliesToItems: ['id', 'text', 'isPublished'],
    snippet: `\
query permitCreatePosts($user_id: ID!) {
  someUserExists(filter: {
    id: $user_id
  })
}
    `,
  },
  {
    title: 'Only the author can publish a Post',
    operation: 'Update Post',
    needsAuthentication: true,
    appliesToSentence: 'Operation applies to fields:',
    appliesToItems: ['text', 'isPublished'],
    snippet: `\
query permitUpdatePosts($node_id: ID!, $user_id: ID!) {
  somePostExists(filter: {
    id: $node_id
    owner: {
      id: $user_id
    }
  })
}
    `,
  },
  {
    title: 'Collaborators can edit the text of a Post',
    operation: 'Update Post',
    needsAuthentication: true,
    appliesToSentence: 'Operation applies to fields:',
    appliesToItems: ['text'],
    snippet: `\
query permitUpdatePosts($node_id: ID!, $user_id: ID!) {
  somePostExists(filter: {
    id: $node_id
    collaborators_some: {
      id: $user_id
    }
  })
}
    `,
  },
  {
    title: 'Only the author or admins can delete a Post',
    operation: 'Delete Post',
    needsAuthentication: true,
    appliesToSentence: 'Operation is not applicable to any fields',
    appliesToItems: [],
    snippet: `\
query permitDeletePosts($node_id: ID!, $user_id: ID!) {
  someUserExists(filter: {
    AND: [{
      id: $user_id
    }, OR: [{
        role: Admin
      }, {
        posts_some: {
          id: $node_id
        }
      }]
    ]
  })
}
    `,
  },
  {
    title: 'Only friends of the author can be collaborators',
    operation: 'PostCollaborators',
    needsAuthentication: true,
    appliesToSentence: 'Operation applies when connecting nodes',
    appliesToItems: ['text'],
    snippet: `\
query permitPostCollaborators($node_id, $user_id: ID!, $collaboratorsUserId: ID!) {
  somPostExists(filter: {
    id: $node_id
    author: {
      friends_some: {
        id: $collaboratorsUserId
      }
    }
    friends_some: {
      posts_some: {
        id: $node_id
        author: {
          
        }
      }
    }
  })
}
    `,
  },
]

interface State {
  selectedScenarioIndex: number
}

export default class PermissionsExamplesBox extends React.Component<{}, State> {

  constructor(props) {
    super(props)

    this.state = {
      selectedScenarioIndex: 0,
    }
  }

  render() {
    const scenarioTitles = scenarios.map(scenario => scenario.title)
    return (
      <div className='permissions-example-box'>
        <style jsx={true}>{`
          .permissions-example-box {
            @p: .bBlue, .ba, .bw2, .br2;
            max-width: 1200px;
          }

          .content {
            @p: .flex, .flexRow, .justifyBetween;
          }

          .top-row {
            @p: .flex, .flexRow, .justifyBetween;
          }

          .demo {
            @p: .bgBlue, .white, .ttu, .tc, .fw6, .f14, .pv4;
            border-bottom-right-radius: 2px;
            width: 90px;
          }

          @media(max-width: 1100px) {
            div.content {
              @p: .flexColumn;
            }
          }

        `}</style>
        <div className='content'>
          <div className='flex1'>
            <div className='demo'>Demo</div>
            <PermissionScenarioSelection
              scenarioTitles={scenarioTitles}
              selectedIndex={this.state.selectedScenarioIndex}
              onRowSelected={(index) => this.setState({ selectedScenarioIndex: index })}
            />
          </div>
          <PermissionScenarioDetails
            className='flex1'
            scenario={scenarios[this.state.selectedScenarioIndex]}
          />
        </div>
      </div>
    )
  }
}
