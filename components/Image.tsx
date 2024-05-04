import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  console.log('🚀 ~ Image ~ rest:', rest)
  console.log('🚀 ~ Image ~ src:', `${process.env.NEXT_PUBLIC_PAGE_HOST}/scottlee${src}`)
  const imageSrc =
    process.env.NODE_ENV === 'production'
      ? `${process.env.NEXT_PUBLIC_PAGE_HOST}/scottlee${src}`
      : src
  return <NextImage src={imageSrc} {...rest} />
}

export default Image
