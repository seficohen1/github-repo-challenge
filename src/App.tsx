import { SearchProvider } from './context/SearchContext'
import Main from './pages/Main/Main'
import GlobalStyle from './UI/global'

function App() {
  return (
    <SearchProvider>
      <GlobalStyle />
      <Main />
    </SearchProvider>
  )
}

export default App
