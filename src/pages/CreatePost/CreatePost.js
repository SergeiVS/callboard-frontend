import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PageWrapper } from "./styles";
import CreatePostForm from "components/CreatePostForm/CreatePostForm";
function CreatePost() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(CreatePostForm, {}) }) }));
}
export default CreatePost;
