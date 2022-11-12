import styled from 'styled-components'

const UserCardStyled = styled.section`
border: 1px solid blue ;
margin-bottom: 1rem ;
padding: .4rem;

.user-info {
  display: flex ;
}

.avatar{
  width: 7rem ;
  height: auto ; 

  img {
    max-width: 100% ;
    height:  auto;
    border-radius: 50% ;
    border: 2px solid grey;
  }
}

.personal-info {
  width: 100% ;
  padding: 1rem ;

  h4 {
    margin: 0px ;
  }
}

.data {
  padding-top: 1rem ;
  opacity: 0.8 ;
}
`

export default UserCardStyled