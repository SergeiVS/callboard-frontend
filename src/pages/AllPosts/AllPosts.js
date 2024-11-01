import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import PostCard from "../../components/PostCard/PostCard";
import { PostsWrapper, PageWrapper } from "./styles";
const testCard = {
    postId: 1,
    subject: "Нужна помощь",
    header: "Требуется помощь с покупкой продуктов",
    user: { name: "Иван Иванов", email: "ivanov@example.com" },
    description: "Помогите купить продукты для пожилого человека",
    photoLink: "link_to_photo",
};
function AllPosts() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(PostsWrapper, { children: _jsx(PostCard, { headline: testCard.header, description: testCard.description, contactInfo: testCard.user.name, image: testCard.photoLink }) }) }) }));
}
export default AllPosts;
