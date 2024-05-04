import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  const imageSrc =
    process.env.NODE_ENV === 'production' ? src : `${process.env.NEXT_PUBLIC_BASE_PATH}${src}`
  return <NextImage src={imageSrc} {...rest} />
}

export default Image
