import { SearchProvider } from './context/SearchContext'
import Main from './pages/Main/Main'

function App() {
  return (
    <>
      <SearchProvider>
        <Main />
      </SearchProvider>
    </>
  )
}

export default App
