import styled from 'styled-components';

type Props = {
  className: string
}

export const MainContainer = styled.main`
  display: grid;
  grid-template-areas: 
  'user'
  'repo';


.user {
  grid-area: 'user';
}

.repo {
  grid-area: 'repo';
}
`