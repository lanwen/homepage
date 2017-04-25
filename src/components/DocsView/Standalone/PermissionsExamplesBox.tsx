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
    appliesToItems: ['isPublished'],
    snippet: `\
query permitUpdatePosts(
  $node_id: ID!, 
  $user_id: ID!
) {
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
query permitUpdatePosts(
  $node_id: ID!, 
  $user_id: ID!
) {
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
    appliesToSentence: 'Operation applies to',
    appliesToItems: ['whole node'],
    snippet: `\
query permitDeletePosts(
  $node_id: ID!, 
  $user_id: ID!
) {
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
query permitPostCollaborators(
    $postsPost_id: ID!, 
    $collaboratorsUser_id: ID!
) {
  somePostExists(filter: {
    id: $postsPost_id
    author: {
      friends_some: {
        id: $collaboratorsUser_id
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
            @p: .bBlue, .ba, .bw2, .mh38;
            max-width: 1200px;
            border-radius: 4px;
          }

          .content {
            @p: .flex, .flexRow, .justifyBetween;
          }

          .top-row {
            @p: .flex, .flexRow, .justifyBetween;
          }

          .demo {
            @p: .bgBlue, .white, .ttu, .tc, .fw6, .f14, .pv4;
            border-bottom-right-radius: 4px;
            width: 90px;
          }

          @media(max-width: 1250px) {
            div.content {
              @p: .flexColumn;
            }
          }

        `}</style>
        <div className='content'>
          <div className=''>
            <div className='demo'>Demo</div>
            <div className='flex flexColumn itemsCenter'>
              <PermissionScenarioSelection
                scenarioTitles={scenarioTitles}
                selectedIndex={this.state.selectedScenarioIndex}
                onRowSelected={(index) => this.setState({ selectedScenarioIndex: index })}
              />
            </div>

          </div>
          <PermissionScenarioDetails
            className=''
            scenario={scenarios[this.state.selectedScenarioIndex]}
          />
        </div>
      </div>
    )
  }
}
