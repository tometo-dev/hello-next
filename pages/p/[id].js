import {useRouter} from "next/router"
import Layout from "../../components/MyLayout"

export default () => {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>this is the blog post content.</p>
    </Layout>
  )
}

