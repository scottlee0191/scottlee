interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A CV template',
    description: `Create template book with beautiful transition change page and publish to the world.`,
    imgSrc: '/static/images/cv.png',
    href: 'https://scottlee0191.github.io/cv/',
  },
  {
    title: 'A Personal Blog',
    description: `A blog that record my knowledge share my experience during working. Blog built with tailwindcss, nextjs, reactjs, markdown.`,
    imgSrc: '/static/images/blog.png',
    href: 'https://scottlee0191.github.io/scottlee/',
  },
]

export default projectsData
