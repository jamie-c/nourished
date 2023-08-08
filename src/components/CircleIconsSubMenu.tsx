import Image from "next/image"
import Link from "next/link"

const images = ['about-us', 'blog', 'newsletter', 'work-with-us']

const CircleIconsSubMenu = () => (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full py-32">
        {images.map((imageName) => (
            <Link
                key={`${imageName}-link`}
                href={`/${imageName}`}
            >
            <Image
                key={imageName}
                className='py-10 md:py-0' 
                src={`/images/circle-icon-${imageName}.png`}
                width={200}
                height={45}
                alt="Nourished"
            />
            </Link>
        ))}
    </div>
)

export default CircleIconsSubMenu