import { Icons } from "@/components/icons";
import Link from "next/link";


export default function Header() {
    return (
        <nav className="px-10">
            <div className="flex justify-between">
                <div><Link href="/"><Icons.gift /></Link></div>
                <ul className="flex gap-4">
                    <Link href="/quick-draw"><li>Quick Draw</li></Link>
                    <li>Sign Up</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    )
}