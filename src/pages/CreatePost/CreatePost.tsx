import { PageWrapper } from "./styles";

import CreatePostCard from "components/CreatePostCard/CreatePostCard";

function CreatePost () {
    return (
        <>
        <PageWrapper><CreatePostCard onSubmit={() => {}}/></PageWrapper>
        </>
    )
}

export default CreatePost