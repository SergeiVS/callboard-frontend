import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import React, { useState } from "react";

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            {/*<Layout>
            <Routes>
                <Route path={PagesPaths.HOME} element={<Home />}></Route>
            </Routes>
            </Layout> */}
            <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите текст"
                label="Текстовое поле"
                error={inputValue === '' ? 'Поле не должно быть пустым' : undefined}
            />

            <Button isDeleteButton={false}>Ok</Button>
            <Button disabled>DIs</Button>
            <Button isDeleteButton>Delete</Button>
        </>
    );
};

export default App;
