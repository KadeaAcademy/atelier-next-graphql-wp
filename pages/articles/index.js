import { gql } from "@apollo/client";
import client from "../../apollo-client";

const Posts = ({ articles }) => {
  console.log(articles)
  return (
    <>
      <h1>Mes articles</h1>
      {
        articles.map((article, i) => (
          <div key={i}>
            <h3>{article.title}</h3>
            <article dangerouslySetInnerHTML={{__html: article.content}}></article>
          </div>
        ))
      }
      </>
  )
}

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          posts {
            nodes {
              slug
              title
              content
            }
          }
        }
      `,
    });

    return {
      props: {
        articles: data.posts.nodes
      },
   };
}
export default Posts;