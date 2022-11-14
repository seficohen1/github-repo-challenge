import styled from 'styled-components'

const UserCardStyled = styled.section`

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
    border: 1px solid grey;
  }
}

.personal-info {
  width: 100% ;
  padding: 1rem ;

  h4 {
    margin: 0;
    margin-bottom: .3rem;
    font-size: 1.3rem;
  }

  span {
    font-weight: lighter;
    opacity: 0.7 ;
  }
}

.icon-follow {
  font-size: small;
  opacity: 0.8;
  align-self:  center;
}
.data-followers {
  display: inline ;

  .bold {
    font-weight: bold ;
  }
}

.data {
  padding-top: 1rem ;
  opacity: 0.8 ;
}

@media only screen and (min-width: 768px)  {

  .user-info {
  display: block;
  }

  .avatar{
  width: 12rem ; }

}
@media only screen and (min-width: 1200px) {
    .avatar {
      width: 18rem ;
    }
  }

`


export default UserCardStyled