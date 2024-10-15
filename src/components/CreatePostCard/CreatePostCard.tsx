import Input from "components/Input/input"
import Button from "components/Button/Button"
import {
  StyledLable,
  StyledPostCard,
  ButtonWraper,
<<<<<<< HEAD
} from "./styles"
import { SignInPostProps } from "./types"
import RadioButton from "components/radioButton/RadioButton"
import RadioGroupComp from "components/radioGroup/RadioGroupComp"
import { StyledInput2 } from "components/Input/styles"
=======
} from "components/CreatePostCard/styles"
import { SignInPostProps } from "components/CreatePostCard/types"
import RadioButton from "components/RadioButton/RadioButton"
import RadioGroupComp from "components/radiogroup/RadioGroupComp"
import { StyledInputDescription } from "components/Input/styles"
>>>>>>> a69cf60cdbe80656c4922626f4a0233dcb779bb2
import { useState } from "react";

function CreatePostCard({ onSubmit }: SignInPostProps) {
    const [file, setFiles] = useState<File[]>([]); // 
    const [fileNames, setFileNames] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedPhoto = Array.from(event.target.files);
        setFiles(selectedPhoto);
        const names = selectedPhoto.map(file => file.name);
        setFileNames(names); 
      }
    };
  

  const handleUploadClick = () => {
    document.getElementById("photo-upload")?.click();
  };

  return (
    <>
      <StyledPostCard onSubmit={onSubmit}>
        <StyledLable>Create Post</StyledLable>

        <RadioGroupComp
          row={true}
          name="subject-choice"
          onCange={() => {}}
          defaultValue="NEED HELP"
        >
          <RadioButton value="NEED HELP" lable="Need Help" />

          <RadioButton value="OFFER HELP" lable="Offer Help" />
        </RadioGroupComp>

        <Input label="Headline" onChange={() => {}} />
        <StyledInputDescription
          label="Description..."
          onChange={() => {}}
          multiline
          rows={5}
        />

          {/* Кнопка загрузки файлов */}
          <label htmlFor="photo-upload" style={{ display: 'inline-block' }}>
          <Button isRegularButton onClick={handleUploadClick}>
            Upload Photo
          </Button>
          <input
            id="photo-upload"
            type="file" 
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*" 
            multiple
          />
        </label>

        {/* Отображение имен загруженных файлов*/}
         {fileNames.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <strong>Uploaded Photo:</strong>
            <ul>
              {fileNames.map((fileName, index) => (
                <li key={index}>{fileName}</li>
              ))}
            </ul>
          </div>
        )} 

        <ButtonWraper>
          <Button isRegularButton>Send</Button>
        </ButtonWraper>
      </StyledPostCard>
    </>
  )
}
export default CreatePostCard
