import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from './ComponentArticles/MDXComponents'

const SlugComponent = ({ frontmatter, source, posts }) => {
  return (
    <MDXRemote {...source} components={MDXComponents} />
  )
}

export default SlugComponent
