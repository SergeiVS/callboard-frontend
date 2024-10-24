import { useFormik } from "formik"
import * as Yup from "yup"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import Input from "components/Input/input"
import Button from "components/Button/Button"
import RadioButton from "components/radioButton/RadioButton"
import RadioGroupComp from "components/radioGroup/RadioGroupComp"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInSelectors } from "store/redux/signInFormSlice/SignInFormSlice"
import { alertActions } from "store/redux/alertSlice/AlertSlice"

import {
  StyledLable,
  StyledPostCard,
  ButtonWraper,
} from "components/CreatePostCard/styles"
import { StyledInputDescription } from "components/Input/styles"
import { PagesPaths } from "components/Layout/types"

function CreatePostCard() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [file, setFiles] = useState<File[]>([]) //
  const [fileNames, setFileNames] = useState<string[]>([])

  const validationSchema = Yup.object().shape({
    header: Yup.string().required("Header is required field").min(5),
    desciption: Yup.string()
      .required("Description is required field")
      .min(5)
      .max(200),
  })

  const formik = useFormik({
    initialValues: {
      userId: useAppSelector(signInSelectors.user).id,
      subject: "",
      header: "",
      description: "",
      photoLink: "",
    },
    
    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: async (values, helpers) => {
      console.log("Submitting")
      try {
        const response = await axios.post(
          "/api/posts",
          {
            userId: useAppSelector(signInSelectors.user).id,
            subject: values.subject,
            header: values.header,
            description: values.description,
            photoLink: values.photoLink,
          },
          {
            headers: {
              "Content-Type": "application/JSON",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )

        helpers.resetForm()
        navigate(PagesPaths.MYPOSTS)
        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "success",
            children: response.data.message,
          }),
        )
      } catch (e: any) {
        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "error",
            children: e.response.data.errorMessage,
          }),
        )
      }
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedPhoto = Array.from(event.target.files)
      setFiles(selectedPhoto)
      const names = selectedPhoto.map(file => file.name)
      setFileNames(names)
    }
  }
  const handleUploadClick = () => {
    document.getElementById("photo-upload")?.click()
  }

  useEffect(() => {
    console.log(formik.values)
  }, [formik.values])

  return (
    <>
      <StyledPostCard onSubmit={formik.handleSubmit}>
        <StyledLable>Create Post</StyledLable>
        <RadioGroupComp row={true} name="subject" onCange={formik.handleChange}>
          <RadioButton value="NEED HELP" lable="Need Help" />
          <RadioButton value="OFFER HELP" lable="Offer Help" />
        </RadioGroupComp>

        <Input name="header" label="Headline" onChange={formik.handleChange} />
        <StyledInputDescription
          name="description"
          label="Description..."
          onChange={formik.handleChange}
          multiline
          rows={5}
        />

        {/* Кнопка загрузки файлов */}
        <label htmlFor="photo-upload" style={{ display: "inline-block" }}>
          <Button
            isRegularButton
            type="button"
            onClick={handleUploadClick}
            disabled={!formik.dirty || formik.isSubmitting}
          >
            Upload Photo
          </Button>
          <input
            id="photo-upload"
            name="photoLink"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
            multiple
            value={formik.values.photoLink}
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
          <Button
            isRegularButton
            disabled={!formik.dirty || formik.isSubmitting}
            type="submit"
          >
            Send
          </Button>
        </ButtonWraper>
      </StyledPostCard>
    </>
  )
}
export default CreatePostCard
