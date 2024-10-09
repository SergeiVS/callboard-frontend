import { Route, Routes} from "react-router-dom"

import Button from "./components/Button/Button"
import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"

import { PagesPaths } from "components/Layout/types"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
        </Routes>
      </Layout>
      <Button isDeleteButton={false}>Ok</Button>
      <Button disabled>DIs</Button>
      <Button isDeleteButton>Delete</Button>
    </>
  )
}

export default App
