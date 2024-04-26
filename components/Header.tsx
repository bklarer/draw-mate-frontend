"use client";

import ButtonLink from "@/components/ButtonLink";
import { LoginModal } from "@/components/LoginModal";
import { Profile } from "@/components/Profile";
import { SignUpModal } from "@/components/SignUpModal";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);

  // Decided to try using buttons since they are part of the dialog component.
  // I may need to find a work around for showing what is active or just match the styles of the button to the link component

  const loggedOutMenu = {
    "Sign Up": <SignUpModal />,
    Login: <LoginModal />,
    "Quick Draw": <ButtonLink link="/quick-draw">Quick Draw</ButtonLink>,
  };

  const loggedInMenu = {
    "Quick Draw": <ButtonLink link="/quick-draw">Quick Draw</ButtonLink>,
    Events: <ButtonLink link="/events">Events</ButtonLink>,
    Participants: <ButtonLink link="/participants">Participants</ButtonLink>,
    Profile: <Profile open={open} setOpen={setOpen} />,
    Logout: (
      <Button onClick={() => setLoggedIn(false)}>
        <Icons.logOut />
      </Button>
    ),
  };

  return (
    <nav className="px-10">
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <Icons.gift />
          </Link>
        </div>
        <ul className="flex gap-4">
          {Object.entries(loggedIn ? loggedInMenu : loggedOutMenu).map(
            ([key, value]) => (
              <li key={key}>{value}</li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
