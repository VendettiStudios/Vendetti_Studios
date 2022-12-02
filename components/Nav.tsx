import React from 'react'
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from 'next/link';

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
        </div>
    )
}

export default Nav