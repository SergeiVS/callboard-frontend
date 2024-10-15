import Input from "components/Input/input"
import Button from "components/Button/Button"
import {
  StyledLable,
  StyledPostCard,
  ButtonWraper,
} from "./styles"
import { SignInPostProps } from "./types"
import RadioButton from "components/radioButton/RadioButton"
import RadioGroupComp from "components/radioGroup/RadioGroupComp"
import { StyledInput2 } from "components/Input/styles"
import { useState } from "react";

function CreatePostCard({ onSubmit }: SignInPostProps) {
    const [files, setFiles] = useState<File[]>([]); // 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles); 
    }
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
        <StyledInput2
          label="Description..."
          onChange={() => {}}
          multiline
          rows={5}
        />

          {/* Кнопка загрузки файлов */}
          <label htmlFor="file-upload" style={{ display: 'inline-block' }}>
          <Button isRegularButton>
            Upload Files
          </Button>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }} 
            multiple 
          />
        </label>

        <ButtonWraper>
          <Button isRegularButton>Send</Button>
        </ButtonWraper>
      </StyledPostCard>
    </>
  )
}
export default CreatePostCard
