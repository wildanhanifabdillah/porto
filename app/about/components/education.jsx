import Image from "next/image";
import { motion } from "framer-motion";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						A snapshot of my academic background.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">2023 - Present</div>
						<div>
							<h2 className="font-semibold text-xl">
								Universitas Gadjah Mada
							</h2>
							<h3 className="text-md font-normal mb-3">
								D4 Teknologi Rekayasa Perangkat Lunak | Software Engineering
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								{galleryImages.map((image, index) => (
									<div
										key={index}
										className="flex-1 transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={image}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
								))}
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I&rsquo;m pursuing Software Engineer while focusing on web
									development and RESTful backends. My coursework and projects
									revolve around building scalable services, polishing user
									interfaces, and keeping codebases maintainable.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="px-5 flex flex-col justify-center"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h2 className="font-semibold text-xl mb-3">
							Focus & Interests
						</h2>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Web development with modern stacks (React, Next.js, Laravel).</li>
							<li>Designing and testing REST APIs with clear contracts.</li>
							<li>Database fundamentals across MySQL and PostgreSQL.</li>
							<li>Version control and collaboration with Git, GitHub, and GitLab.</li>
						</ul>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
