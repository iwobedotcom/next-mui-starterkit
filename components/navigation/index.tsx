"use client";

import Image from "next/image";
import styles from "@/app/(default)/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVLINKS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Settings", link: "/settings" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <section>
      {NAVLINKS.map(({ label, link }) => (
        <Link
          href={link}
          key={label}
          className={`${styles.navLink} ${
            pathname === link ? styles.activeNavLink : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </section>
  );
}
