import { Route, Routes } from "react-router-dom"
import React, { useState } from "react"

import Layout from "components/Layout/Layout"
import { PagesPaths } from "components/Layout/types"
import Button from "./components/Button/Button"
import Input from "components/Input/input"
import Home from "pages/Home/Home"

const App = () => {
  // const [inputValue, setInputValue] = useState<string>('');

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(event.target.value);
  // };

  function App() {
    return (
      <>
        <Layout>
          <Routes>
            <Route path={PagesPaths.HOME} element={<Home />}></Route>
          </Routes>
        </Layout>
      </>
    )
  }
}

export default App
