import { Stack } from "react-bootstrap";
import Body from "../components/Body";
import Posts from "../components/Posts";
import PostForm from "../components/forms/PostForm";

export default function FeedPage() {
  return (
    <Body>
        <Stack className="feed" direction="verticle">
        <PostForm/>
        <br/>
        <Posts />
        </Stack>
       
    </Body>
  )
}