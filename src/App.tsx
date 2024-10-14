import { Route, Routes } from "react-router-dom"
import React, { useState } from "react"

import Layout from "components/Layout/Layout"
import { PagesPaths } from "components/Layout/types"
import Button from "./components/Button/Button"
import Input from "components/Input/input"
import Home from "pages/Home/Home"
import { colors } from "styles/colors"
import RadioGroupComp from "components/radioGroup/RadioGroupComp"
import { FormControlLabel, Radio } from "@mui/material"
import RadioButton from "components/radioButton/RadioButton"
import SignInForm from "components/signInForm/SignInForm"

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
          <Route path={PagesPaths.SIGNIN} element={<SignIn />}></Route>
          <Route path={PagesPaths.SIGNUP} element={<SignUp />}></Route>
        </Routes>
      </Layout>
      <SignInForm onSubmit={()=>{}}/>
      {/* <RadioGroupComp
        row={true}
        name="subject-choice"
        onCange={() => {}}
        defaultValue="NEED HELP"
      >
        <RadioButton value="NEED HELP" lable="Need Help"/>
        
        <RadioButton value="OFFER HELP" lable="Offer Help"/>
      </RadioGroupComp>
      <Button isDeleteButton>
        <Delete color="error" />
      </Button>
      <Button>
        <Edit />
      </Button>
      <Button isRegularButton={true}>SomeButton</Button> */}
    </>
  )
}
export default App
