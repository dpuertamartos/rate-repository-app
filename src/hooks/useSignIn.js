import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation login($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
        accessToken
        }
    }
`;

const useSignIn = () => {
  const [ mutate, result ] = useMutation(AUTHENTICATE)
  

  const signIn = async({username, password}) => {
    const { data } = await mutate({ variables: {username, password }})
    return { data }
  }

  return [signIn, result];
};

export default useSignIn;