import Link from "next/link"
import Layout from "../components/MyLayout"
import fetch from "isomorphic-unfetch"

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
    h1,
    a{
      font-family: "Arial";
    }
    
    ul {
      padding: 0;
    }

    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
    }

    a:hover {
      opacity: 0.6;
    }
    `}</style>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
  const data = await res.json()

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index