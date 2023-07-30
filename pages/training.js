import Ashish from "@/components/ashish"
import Whatsapp from "@/components/whatsapp"
import { NextSeo } from "next-seo"
const Page = () => {
  return (
      <div className="container py-4 my-4">
          <NextSeo title="Frontend Training | website design and development" description="GET frontend and website design training with Experienced software engineer "/>
          <h1 className="text-center mb-4">Contact For Frontend Training</h1>
          <Ashish style={{ maxWidth: '500px', margin: "auto" }} />
          <Whatsapp/>
    </div>
  )
}

export default Page