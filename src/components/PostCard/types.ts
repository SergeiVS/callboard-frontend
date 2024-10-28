import { Key } from "react";

export interface PostCardProps {
  [x: string]: any;
id:any;
image: string;
  title: string;
  description: string;
  tag: string;
  location: string;
  email?: string;
  isTop?: boolean;
  header:string;
  
}