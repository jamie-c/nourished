import Image from "next/image";

const testimonialsData = [
	"feedback-brittanym-01.jpg",
	"feedback-cherylz-highlighted-01.jpg",
	"feedback-lindam-01.jpg",
	"feedback-lydian-blurred-01.jpg",
	"feedback-cherylz-highlighted-02.jpg",
	"feedback-lindam-highlighted-01.jpg",
];

export default function Testimonials() {
	return (
		<div className="snap-x snap-always snap-mandatory flex sm:scroll-pl-6 px-6 py-20 flex-row items-center w-full max-w-7xl mx-auto gap-6 overflow-x-auto">
			{testimonialsData.map((testimonial) => (
				<div
					key={testimonial}
					className="snap-center sm:snap-start flex-none size-[350]"
				>
					<Image
						src={`/images/testimonials/${testimonial}`}
						className="rounded-lg shadow-xl transition-all duration-75 ease-in"
						alt="Testimonial"
						width={350}
						height={350}
					/>
				</div>
			))}
		</div>
	);
}
