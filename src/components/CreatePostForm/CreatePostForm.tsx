import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import Input from "../Input/input"
import Button from '../Button/Button'
import RadioButton from "../RadioButton/RadioButton"
import RadioGroupComp from "../Radiogroup/RadioGroupComp"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInSelectors } from "store/redux/signInFormSlice/SignInFormSlice"
import { alertActions } from "store/redux/alertSlice/AlertSlice"

import {
  StyledLable,
  StyledPostCard,
  ButtonWraper,
} from "components/CreatePostForm/styles"
import { PagesPaths } from "components/Layout/types"

function CreatePostForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [file, setFiles] = useState<File[]>([]) //
  const [fileNames, setFileNames] = useState<string[]>([])

  const validationSchema = Yup.object().shape({
    header: Yup.string()
      .required("Header is required field")
      .min(5, "Header should be longer as 5 symbols"),
    description: Yup.string()
      .required("Description is required field")
      .min(5, "Description should be longer as 5 symbols")
      .max(200, "Description should not be longer as 200 symbols"),
  })

  const userId: number = useAppSelector(signInSelectors.user).id

  const formik = useFormik({
    initialValues: {
      userId: { userId },
      subject: "",
      header: "",
      description: "",
      photoLink: "",
    },

    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: async (values, helpers) => {
      try {
        const response = await axios.post(
          "/api/posts",
          {
            userId: userId,
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

        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "success",
            children: response.data.message,
          }),
        )

        helpers.resetForm()
        navigate(PagesPaths.MYPOSTS)
      } catch (e: any) {
        console.log(e)
        const error = e.response.data

        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "error",
            children: error.errorMessage,
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

  return (
    <>
      <StyledPostCard onSubmit={formik.handleSubmit}>
        <StyledLable>Create Post</StyledLable>
        <RadioGroupComp row={true} name="subject" onCange={formik.handleChange}>
          <RadioButton value="NEED HELP" lable="Need Help" />
          <RadioButton value="OFFER HELP" lable="Offer Help" />
        </RadioGroupComp>

        <Input
          name="header"
          label="Headline"
          onChange={formik.handleChange}
          error={formik.errors.header}
        />
      
          <Input
            name="description"
            label="Description..."
            onChange={formik.handleChange}
            multiline
            rows={5}
            error={formik.errors.description}
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
          {}
        </label>

        {/* Отображение имен загруженных файлов*/}
        {fileNames.length > 0 && (
          <div style={{ padding: "10px" }}>
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
          >
            Send
          </Button>
        </ButtonWraper>
      </StyledPostCard>
    </>
  )
}
export default CreatePostForm
