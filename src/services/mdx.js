import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = () => {
  return fs.readdirSync(path.join(root, 'data'))
}

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf8'
  )
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})
  return {
    source,
    content,
    frontmatter: {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'data', postSlug),
      'utf8'
    )
    const { data } = matter(mdxSource)

    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost]
  }, [])
}
