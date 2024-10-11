import { Route, Routes } from "react-router-dom"
import React, { useState } from "react"
import { Delete, Edit } from "@mui/icons-material"

import Layout from "components/Layout/Layout"
import { PagesPaths } from "components/Layout/types"
import Button from "./components/Button/Button"
import Input from "components/Input/input"
import Home from "pages/Home/Home"
import { colors } from "styles/colors"
import RadioGroupComp from "components/radiogroup/RadioGroupComp"
import { FormControlLabel, Radio } from "@mui/material"

// const App = () => {

// const [inputValue, setInputValue] = useState<string>('');

// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
// };
// }
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
        </Routes>
      </Layout>
      <RadioGroupComp
        row={true}
        name="subject-choice"
        onCange={() => {}}
        defaultValue="NEED HELP"
      >
        <FormControlLabel
          value={"NEED HELP"}
          control={<Radio />}
          label="Need Help"
          labelPlacement="end"
        />
        <FormControlLabel
          value={"OFFER HELP"}
          control={<Radio />}
          label="Offer Help"
          labelPlacement="end"
        />
      </RadioGroupComp>
      <Button isDeleteButton>
        <Delete color="error" />
      </Button>
      <Button>
        <Edit />
      </Button>
      <Button isRegularButton={true}>SomeButton</Button>
    </>
  )
}
export default App
