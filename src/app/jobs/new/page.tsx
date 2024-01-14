import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

// only can be used in server component
export const metadata: Metadata = {
  title: "Post a new job"
}

export default function Page() {
  return <NewJobForm/>
}