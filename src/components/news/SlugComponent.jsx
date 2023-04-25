import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from './ComponentArticles/MDXComponents'

const SlugComponent = ({ frontmatter, source }) => {
  const { title, img } = frontmatter
  return (
    <>
      <img
        src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_faces,h_300,w_1000/f_webp/q_auto:eco/v1682415704/AdivinaQue/news/${img}`}
        alt='cosas'
        width={900}
        height={500}
        className='rounded-2xl '
      />
      <h1 className='font-black text-3xl text-adivinaGreen'>
        {title}
      </h1>
      <div className='article_body font-montserrat '>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </>
  )
}

export default SlugComponent
