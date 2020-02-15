import Link from "next/link"

export default () => {
  return (
    <div>
      <Link href="/">
        <a title="Home Page">Home Page</a>
      </Link>
      <p>About page</p>
    </div>
  )
}