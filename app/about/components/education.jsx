import { motion } from "framer-motion";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5"
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
			<section className="flex flex-col items-center text-center gap-10">
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

				<motion.div
					className="max-w-3xl px-5 flex flex-col items-center text-center gap-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="font-medium text-lg">2023 - Present</div>
					<div>
						<h2 className="font-semibold text-xl">
							Universitas Gadjah Mada
						</h2>
						<h3 className="text-md font-normal mb-4">
							D4 Teknologi Rekayasa Perangkat Lunak | Software Engineering
						</h3>
						<p className="text-gray-600 text-justify md:text-center title text-lg">
							I&rsquo;m pursuing Software Engineering with a focus on web
							development and RESTful backends. My projects center on building
							scalable services, refining user interfaces, and keeping
							deployments and codebases maintainable.
						</p>
					</div>
					<div className="w-full">
						<h2 className="font-semibold text-xl mb-3">Focus & Interests</h2>
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left md:text-center md:list-none md:space-y-1">
							<li>Web development with modern stacks (React, Next.js, Laravel).</li>
							<li>Designing and testing REST APIs with clear contracts.</li>
							<li>Database fundamentals across MySQL and PostgreSQL.</li>
							<li>Version control with Git, GitHub, and GitLab.</li>
						</ul>
					</div>
				</motion.div>
			</section>
		</Wrapper>
	);
}
