import * as React from 'react'
import Image from 'next/image';
import VS from '../public/VS.png';
import Logo from '../public/Logo.png';
import Link from 'next/link';
import { Disclosure } from "@headlessui/react";
import { Spiral as Hamburger } from 'hamburger-react'

type Props = {}

class Nav extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="">
                        <Link href="/">
                            {/* <Image
                            className="logo-absolute"
                            src={Logo}
                            alt="logo">
                        </Image> */}
                            <Image
                                className="logo"
                                src={VS}
                                alt="logo">
                            </Image>
                        </Link>
                        <div className="title">
                            <h1>Vendetti</h1>
                            <h1>Studios</h1>
                        </div>
                        <div className="headerMobile">
                            <Disclosure as="nav"  >
                                <Disclosure.Button className="hamburger peer group">
                                    <Hamburger size={20} />
                                </Disclosure.Button>
                                <Disclosure.Panel className="panel">
                                    <div className="navList">
                                        <Link className=""
                                            href="/About">
                                            About Us
                                        </Link>
                                        <Link className=""
                                            href="/Services">
                                            Services
                                        </Link>
                                        <Link className=""
                                            href="/Work">
                                            Work
                                        </Link>

                                        <Link className=""
                                            href="/OurTeam">
                                            Our Team
                                        </Link>
                                        <Link className=""
                                            href="/Blog">
                                            Blog
                                        </Link>
                                        <Link href="/Contact">
                                            Contact
                                        </Link>
                                    </div>
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                        {/* Desktop */}
                        <div className="navMenu">
                            <Link className="p-3"
                                href="/About">
                                About Us
                            </Link>
                            <Link className="pr-2"
                                href="/Services">
                                Services
                            </Link>
                            <Link className="pr-3"
                                href="/Studios">
                                Studios
                            </Link>
                            <Link className="pr-3"
                                href="/Work">
                                Work
                            </Link>
                            <Link className="pr-3"
                                href="/OurTeam">
                                Our Team
                            </Link>
                            <Link className="pr-3"
                                href="/Blog">
                                Blog
                            </Link>
                            <Link href="/Contact">
                                Contact
                            </Link>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default Nav