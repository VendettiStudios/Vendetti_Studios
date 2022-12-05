import * as React from 'react'
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
                            className="logo"
                            src={Logo}
                            alt="logo">
                        </Image>
                    </Link>
                    <div className="nav">
                        <h1 className="title">Vendetti Studios</h1>
                        <div className="navMenu">
                            <Link className="pr-2"
                            href="/Services">
                                Services
                            </Link>
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
            {/* Mobile Nav */}
            <header className="headerMobile">
                <Disclosure as="nav">
                    <Disclosure.Button className="hamburger peer group">
                        <Hamburger size={20} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="panel">
                        <div className="navList">
                        <Link className=""
                            href="/Services">
                                Services
                            </Link>
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