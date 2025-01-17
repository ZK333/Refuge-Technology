import { HomeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
	return (
		<footer className="bg-background-500">
			<div className="max-w-full px-6 py-4 mx-auto md:flex md:items-center text-xs md:justify-between text-white lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					<div className="flex items-center gap-0.5"> 
						<div className="flex items-center">
							<h1 className="text-1xl  text-white">{"<"}</h1>
							<HomeIcon className="h-5 -mt-1 text-white" />
							<h1 className="text-1xl  text-white">{"/>"}</h1>
						</div>
						<p>
							- Shelter - a
						</p>
						<a
							href="https://refugetechnology.org"
							className="hover-links underline underline-offset-2"
						>
							Refuge Technology
						</a>
						<p>
							initiative.
						</p>
					</div>
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-xs leading-5 text-center text-white">
						&copy; 2023 Refuge Technology. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
