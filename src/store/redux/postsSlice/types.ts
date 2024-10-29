import { Key } from "react";

export interface Posts {
  [x: string]: Key | null | undefined;
  id:number
  userId:number;
  subject: string;
  header: string;
  description: string;
  photoLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostsState {
  userPosts: Posts[];
  isPending: boolean;
  error: string | null;
}
