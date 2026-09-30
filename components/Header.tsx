'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "cn";

const Header = () => {
    const pathname=usePathname();
    return (
        <header>
            <div className="main-cont ainer inner">
                <Link href="/">
                    <Image src="logotradexx.svg" alt="TradeX logo" width={61} height={20} />
                </Link>

                <nav>
                    <Link href='/' className={cn('nav-link', {
                        'is-active': pathname === '/',
                        'is-home': true
                    })}>Home</Link>

                    <p>Search Modal</p>

                    <Link href="/coins" className={cn('nav-link', {
                        'is-active': pathname==='/coins'
                    })}>Coins</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;