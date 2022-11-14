import styled from 'styled-components';

type Props = {
  className: string
}

export const MainContainer = styled.main`
  display: grid;
  background-color: #F7F7F7 ;
  gap: 3rem ;
  padding: 3rem ;
  grid-template-areas: 
  'user'
  'repo';


.user {
  grid-area: 'user';
}

.repo {
  grid-area: 'repo';
}

@media only screen and (min-width: 768px) {
  grid-template-columns: 30% 70%;
  gap: .5rem ;
  grid-template-areas: 
  'user repo'
  ;

  @media only screen and (min-width: 1200px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

}
`