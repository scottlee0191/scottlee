import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  const imageSrc =
    process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_PAGE_HOST}/${src}` : src
  return <NextImage src={imageSrc} {...rest} />
}

export default Image
