import React from 'react'
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from 'next/link';

type Props = {}

const Nav = (props: Props) => {
    return (
        <div>
            <header>
                <Link href="/">
                    <Image
                        className="logo top-8 left-8"
                        src={Logo}
                        alt="logo">
                    </Image>
                </Link>
            </header>
        </div>
    )
}

export default Nav