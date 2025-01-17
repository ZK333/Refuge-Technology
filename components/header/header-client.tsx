"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	BellIcon,
	HomeIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { cn } from "@/utils/cn";
import Link from "next/link";
// import AuthButtonServer from "./auth-button/auth-button-server";

import type { Session } from "@supabase/auth-helpers-nextjs";
import AuthButton from "../auth-button";

// const user = {
// 	name: "Tom Cook",
// 	email: "tom@example.com",
// 	imageUrl:
// 		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

// const userNavigation = [
// 	{ name: "Your Profile", href: "#" },
// 	{ name: "Settings", href: "#" },
// 	{ name: "Sign out", href: "#" },
// ];

const HeaderClient = ({ session }: { session: Session | null }) => {
	const navigation = [
		{
			name: session ? "Dashboard" : "Home",
			href: session ? "/ngo/dashboard" : "/",
			current: true,
		},
		{
			name: "Refugee Resources",
			href: "/resources",
			current: false,
		},
		{
			name: "Host Now",
			href: "/hosts",
			current: false,
		},
	];

	return (
		<Disclosure as="nav" className="z-10">
			{({ open }) => (
				<>
					<div className="mx-auto px-4 sm:px-6 shadow-lglg:px-8 bg-background-500">
						<div className="flex h-16 justify-between">
							<div className="flex">
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">
											Open main menu
										</span>
										{open ? (
											<XMarkIcon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										) : (
											<Bars3Icon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										)}
									</Disclosure.Button>
								</div>
								<Link
									href="/"
									className="flex flex-shrink-0 items-center cursor-pointer"
								>
									<h1 className="text-1xl -mt-3 text-white">
										{"<"}
									</h1>
									<HomeIcon className="h-5 mb-2.5 fill-white text-white" />
									<h1 className="text-1xl -mt-3 text-white">
										{"/>"}
									</h1>
									<h3 className="pl-1 text-3xl font-light tracking-wider text-primary">
										Shelter
									</h3>
								</Link>
								<div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={cn(
												item.current
													? "bg-background-800 text-white shadow-inset"
													: "text-white hover:bg-background-800 hover:text-white hover:shadow-inset",
												"rounded-md px-3 py-2 text-sm font-medium"
											)}
											aria-current={
												item.current
													? "page"
													: undefined
											}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
							<div className="flex items-center">
								{!session && (
									<div className="flex-shrink-0 pr-5 max-sm:hidden">
										<Link
											type="button"
											className="relative inline-flex items-center gap-x-1.5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-background-600 shadow hover:bg-background-900 hover:shadow-inset hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500"
											href="/hosts"
										>
											<PlusIcon
												className="-ml-0.5 h-5 w-5"
												aria-hidden="true"
											/>
											Become a Host
										</Link>
									</div>
								)}
								<div className="flex-shrink-0">
									<AuthButton session={session} />
								</div>
								{/* <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
									<button
										type="button"
										className="relative rounded-full bg-white p-1 text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									>
										<span className="absolute -inset-1.5" />
										<span className="sr-only">
											View notifications
										</span>
										<BellIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>

									// Profile dropdown
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">
													Open user menu
												</span>
												<img
													className="h-8 w-8 rounded-full"
													src={user.imageUrl}
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{userNavigation.map((item) => (
													<Menu.Item key={item.name}>
														{({ active }) => (
															<a
																href={item.href}
																className={cn(
																	active
																		? "bg-gray-100"
																		: "",
																	"block px-4 py-2 text-sm text-gray-700"
																)}
															>
																{item.name}
															</a>
														)}
													</Menu.Item>
												))}
											</Menu.Items>
										</Transition>
									</Menu>
								</div> */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden ">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={cn(
										item.current
											? "bg-background-900 text-white"
											: "text-background-900 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-gray-700 pb-3 pt-4">
							<div className="flex items-center px-5 sm:px-6">
								{/* <div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src={user.imageUrl}
										alt=""
									/>
								</div> */}
								<div className="ml-3">
									{/* <div className="text-base font-medium text-white">
										{user.name}
									</div> */}
									{/* <div className="text-sm font-medium text-gray-400">
										{user.email}
									</div> */}
								</div>
							</div>
							<div className="mt-3 space-y-1 px-2 sm:px-3">
								{/* {userNavigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
									>
										{item.name}
									</Disclosure.Button>
								))} */}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export { HeaderClient };
