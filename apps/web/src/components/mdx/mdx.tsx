import { getMDXComponent, type MDXComponents } from '@tszhong0411/mdx'
import { BlurImage, CodeBlock, File, Files, Folder } from '@tszhong0411/ui'

import ImageZoom from '../image-zoom'
import Link from '../link'
import Checkbox from './checkbox'
import Heading from './heading'
import ItemGrid from './item-grid'
import LinkCard from './link-card'
import Logo from './logo'
import Table from './table'
import Video from './video'

type MdxProps = {
  code: string
}

const components: MDXComponents = {
  h2: (props: React.ComponentProps<'h2'>) => <Heading as='h2' {...props} />,
  h3: (props: React.ComponentProps<'h3'>) => <Heading as='h3' {...props} />,
  h4: (props: React.ComponentProps<'h4'>) => <Heading as='h4' {...props} />,
  h5: (props: React.ComponentProps<'h5'>) => <Heading as='h5' {...props} />,
  h6: (props: React.ComponentProps<'h6'>) => <Heading as='h6' {...props} />,
  a: (props: React.ComponentProps<'a'>) => {
    const { children, ...rest } = props

    return (
      <Link
        className='hover:text-foreground text-[#ff6363] no-underline transition-colors'
        {...rest}
      >
        {children}
      </Link>
    )
  },
  Image: (props: React.ComponentProps<typeof BlurImage>) => {
    const { alt, ...rest } = props

    return (
      <>
        <ImageZoom>
          <BlurImage className='rounded-lg border' alt={alt} {...rest} />
        </ImageZoom>
        <figcaption className='mt-4 text-center'>{alt}</figcaption>
      </>
    )
  },
  pre: CodeBlock,
  input: Checkbox,

  // Custom components
  Table,
  ItemGrid,
  Video,
  LinkCard,
  Logo,
  Files,
  File,
  Folder
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const MDXContent = getMDXComponent(code)

  return (
    <div className='prose w-full'>
      <MDXContent components={components} />
    </div>
  )
}

export default Mdx
