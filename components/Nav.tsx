import React from 'react'
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from 'next/link';
import { Disclosure } from "@headlessui/react";
import { Spiral as Hamburger } from 'hamburger-react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">
                        <Image
                            className="logo top-8 left-8"
                            src={Logo}
                            alt="logo">
                        </Image>
                    </Link>
                    <div className="flex relative top-14 w-full">
                        <h1 className="absolute text-3xl font-extrabold left-32">Vendetti Studios</h1>

                        <div className="navMenu absolute right-10 mx-auto">
                            <Link className="p-3"
                                href="/About">
                                About
                            </Link>
                            <Link className="pr-3"
                                href="/Work">
                                Work
                            </Link>
                            <Link className="pr-3"
                                href="/OurTeam">
                                Our Team
                            </Link>
                            <Link href="/Contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <header className="headerMobile md:hidden">
                <Disclosure as="nav">
                    <Disclosure.Button className="hamburger peer group z-50 fixed right-5">
                        <Hamburger size={20} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="z-40 bg-[rgb(36,36,36)] w-full h-screen fixed top-0">
                        <div className="navList grid grid-cols-1">
                            <Link className=""
                                href="/About">
                                About
                            </Link>
                            <Link className=""
                                href="/Work">
                                Work
                            </Link>
                            <Link className=""
                                href="/OurTeam">
                                Our Team
                            </Link>
                            <Link href="/Contact">
                                Contact
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
            </header>
        </div>
    )
}

export default Nav