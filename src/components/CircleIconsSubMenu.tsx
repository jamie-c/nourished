import Image from "next/image"
import Link from "next/link"

const images = ['about', 'blog', 'newsletter', 'work-with-us']

const CircleIconsSubMenu = () => (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full py-28 md:py-32 max-w-7xl">
        {images.map((imageName) => (
            <Link
                key={`${imageName}-link`}
                href={`/${imageName}`}
            >
            <Image
                key={imageName}
                className='py-6 md:py-0 px-24 sm:px-6 md:px-4 lg:px-10 w-auto h-auto' 
                src={`/images/circle-icon-${imageName}.png`}
                width={200}
                height={200}
                alt="Nourished"
            />
            </Link>
        ))}
    </div>
)

export default CircleIconsSubMenu