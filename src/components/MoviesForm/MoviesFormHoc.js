import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import {graphql} from 'react-apollo'

import { styles } from './styles';

import {addMovieMutation} from './mutation'
import {moviesQuery} from '../MoviesTable/queries';
import {directorsQuery} from './quries';

const withGraphqlAdd = graphql(addMovieMutation,{
  props:({mutate})=>({
    addMovie: movie => mutate({
      variables : movie,
      refetchQueries: [{query: moviesQuery}]
    })
  })
})

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorsQuery));
