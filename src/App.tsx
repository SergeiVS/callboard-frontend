import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import React, { useState } from "react";

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

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
        </>
    );
};

export default App;
