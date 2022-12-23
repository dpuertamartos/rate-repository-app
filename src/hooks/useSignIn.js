import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';



export const AUTHENTICATE = gql`
    mutation login($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
        accessToken
        }
    }
`;

const useSignIn = () => {
  const [ mutate, result ] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
 
  

  const signIn = async({username, password}) => {
    const { data } = await mutate({ variables: {username, password }})
    console.log(data.authenticate.accessToken)
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    return { data }
  }

  return [signIn, result];
};

export default useSignIn;