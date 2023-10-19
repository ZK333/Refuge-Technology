"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import type { Database } from "../lib/database.types";
import Login from "./login/page";

const links = [
	{ name: "Why Host?", href: "/hosts" },
	{ name: "Refugee Resources", href: "/resources" },
	{ name: "Donate to Aid Orgs", href: "/donate" },
	{ name: "Host Now", href: "/hosts/apply" },
];

export default function Home() {
	const supabase = createClientComponentClient<Database>();
	const router = useRouter();

	const email = "ali@gmail.com";
	const password = "123456";

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};

	return (
		<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
			<img
				src="https://images.unsplash.com/photo-1660479643704-2acf8f98d8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter opacity-20"
			/>
			<div
				className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl opacity-10"
				aria-hidden="true"
			></div>
			<div
				className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				aria-hidden="true"
			></div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex flex-col mx-auto lg:mx-0">
					<h2 className=" w-fit  text-center px-2 text-4xl font-bold text-white sm:text-6xl bg-background italic">
						Refugees Need Your Help
					</h2>
					<p className="mt-6 text-lg leading-8 text-primary">
						Displaced people in Palestine, Israel, Morocco, Libya,
						and Afghanistan desperately need temporary housing.
					</p>
					<p className="mt-6 text-lg leading-8 text-primary">
						If you reside within these countries, please consider
						hosting displaced people in your home.
					</p>
				</div>
				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-16 pt-20">
						{/* <button
							className="bg-white text-black p-2"
							onClick={() => handleSignUp()}
						>
							test
						</button> */}
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className=" flex gap-2 group hover:scale-105 transition-transform duration-300 ease-in-out"
							>
								{link.name}
								<span
									className=" group-hover:translate-x-1/2 transition-transform duration-300 ease-in-out"
									aria-hidden="true"
								>
									&rarr;
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
