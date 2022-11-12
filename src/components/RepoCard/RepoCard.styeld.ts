import styled from 'styled-components'

const RepoCardStyled = styled.section`
border: 1px solid pink ;
padding:.4rem ;

header {
  display: flex ;
  padding-top: 1rem ;

  h3 {
    color:#0A68DA ;
    margin: 0 ;
  }

}

.repo-status {
    border: 1px solid black ;
    height: 20% ;
    padding: .3rem;
    margin-left: .2rem ;
    align-self: center ;
    border-radius: .7rem;
    font-size: .8rem;
    opacity: 0.7;
  }


.repo-data {
  display: flex ;
  flex-wrap: wrap ;
}
.repo-data-updated {
  padding-right: 2rem
}
.repo-data-star {
  padding-right: 2rem
}
.repo-data-langauge {
  padding-right: 2rem
}

.language-color {
  border: 2px #f1e05a solid ;
  background-color: #f1e05a;
  width: 15px;
  height: 15px;
  border-radius: 50% ;
  margin-right: 2px;
  

}
`

export default RepoCardStyled