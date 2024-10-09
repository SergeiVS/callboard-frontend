/*import { Route, Routes} from "react-router-dom"*/

import Button from "./components/Button/Button"

import Layout from "components/Layout/Layout"

function App() {
  return (
    <>
      {/*<Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
        </Routes>
      </Layout> */}
      <Layout>
      <Button isDeleteButton={false}>Ok</Button>
      <Button disabled>DIs</Button>
      <Button isDeleteButton>Delete</Button>
      </Layout>
    </>
  )
}

export default App
