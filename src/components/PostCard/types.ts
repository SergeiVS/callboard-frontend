import { Key } from "react";

export interface PostCardProps {
image: string;
  description: string;
  email?: string;
  isTop?: boolean;
  header:string;
  contactInfo:string;
}