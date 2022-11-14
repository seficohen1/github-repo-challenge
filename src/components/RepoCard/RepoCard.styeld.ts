import styled from 'styled-components'

type Props = {
  color: string
}

type isPrivateProp = {
  isPrivate: boolean
}

const RepoCardStyled = styled.section`

padding-top: 1.5rem;
padding-bottom: 1.5rem ;
border-bottom: 1px solid rgba(0,0,0, .2);


header {
  display: flex ;


  h3 {
    color: var(--secondary) ;
    margin: 0 ;
  }

}


.star-icon {
  font-size: .9rem;
  color: #FFD700;
  opacity: 0.8;
  padding-right: .2rem ;
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
.description {
  opacity: 0.5 ;
  font-size: .9rem;
  line-height: 1.4rem ;
}
`


export const ColoredDot = styled.span<Props>`
  background-color: ${(props) => props.color === 'JavaScript' && '#f1e05a'};
  background-color: ${(props) => props.color === 'HTML' && '#e44b23'};
  background-color: ${(props) => props.color === 'CSS' && '#563d7c'};
  background-color: ${(props) => props.color === 'Vue' && '#2b7489'};
  background-color: ${(props) => props.color === 'Shell' && '#89e051'};
  background-color: ${(props) => props.color === 'Ruby' && '#701516'};
  background-color: ${(props) => props.color === 'PHP' && '#4F5D95'};
  background-color: ${(props) => props.color === 'Python' && '#3572A5'};
  width: 15px;
  height: 15px;
  border-radius: 50% ;
  margin-right: 2px;
`
export const Status = styled.div<isPrivateProp>`
    border: ${({isPrivate}) => isPrivate ? '1px solid #DC3545' : '1px solid #29A949' };
    height: 20% ;
    padding: .3rem;
    margin-left: .8rem ;
    align-self: center ;
    border-radius: .7rem;
    font-size: .8rem;
    opacity: 0.7;
`

export default RepoCardStyled