"use client";

import Link from "next/link";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const {getUser} = useKindeBrowserClient();
  const user = getUser();

  console.log(process.env.KINDE_CLIENT_ID);

  return (
    <div className="bg-gray-800">
      <nav className="flex justify-between items-center p-5  text-white container mx-auto">
        <div>
          <Link href="/">
            <h1 className="text-2xl ">Blog News</h1>
          </Link>
        </div>
        <div>
          <ul className="flex justify-evenly items-center gap-5  font-bold">
            <li>
              <Link href="/" className="btn">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="btn">
                Profile
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <LogoutLink>
                    <button className="btn">Logout</button>
                  </LogoutLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <LoginLink>
                    <button className="btn">Login</button>
                  </LoginLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
