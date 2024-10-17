import { Route, Routes } from "react-router-dom"
import React, { useState } from "react"

import Layout from "components/Layout/Layout"
import { PagesPaths } from "components/Layout/types"
import Home from "pages/Home/Home"
import SignIn from "pages/SignIn/SignIn"
import SignUp from "pages/SignUp/SignUp"
import CreatePost from "pages/CreatePost/CreatePost"
import MyAccount from "pages/MyAccount/MyAccount"
import AllPosts from "pages/AllPosts/AllPosts"
import MyPosts from "pages/MyPosts/MyPosts"

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
          <Route path={PagesPaths.CREATEPOST} element={<CreatePost />}></Route>
          <Route path={PagesPaths.MYACCOUNT} element={<MyAccount />}></Route>
          <Route path={PagesPaths.ALLPOSTS} element={<AllPosts />}></Route>
          <Route path={PagesPaths.MYPOSTS} element={<MyPosts />}></Route>
        </Routes>
      </Layout>
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
