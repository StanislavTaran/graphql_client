import {gql} from 'apollo-boost'

export const addDirectorMutation = gql`
  mutation addDirectorMutation($name: String!, $age: Int!){
    addDirector(name: $name, age: $age){
      name
    }
  }
`