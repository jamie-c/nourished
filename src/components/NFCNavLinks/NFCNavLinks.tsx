import NFCNavLink from "@/components/NFCNavLink/NFCNavLink";

import type { NavLinks } from "@/components/NFCNavLinks/NFCNavLinksTypes";

const mainNavItems: NavLinks[] = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Work With Us",
    url: "/work-with-us",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Login",
    url: "/api/auth/signin",
  },
];

export const NFCNavLinksHorizontal = () => {
  const navItems = mainNavItems.reduce(
    (acc: NavLinks[], { title, url }, i, a) => {
      if (i < a.length - 1) {
        acc.push({ title, url });
        acc.push({ title: "divider", url: "" });
      }
      if (i === a.length - 1) {
        acc.push({ title, url });
      }
      return acc;
    },
    [],
  );

  return (
    <span className="h-full">
      <nav className="flex-10 flex flex-row items-center justify-end gap-3 text-xl text-white first:before:content-none h-full">
        {navItems.map(({ title, url }, i, a) => {
          if (title !== "divider") {
            return <NFCNavLink key={i} url={url} title={title} />;
          }
          if (title === "divider") {
            return (
              <span key={i} className="bg-white h-1.5 rounded-full w-1.5" />
            );
          }
          return;
        })}
      </nav>
    </span>
  );
};

export const NFCNavLinksVertical = () => {
    return (
        <span>
            <nav className="flex flex-col justify-start items-end gap-0 text-4xl text-white pt-10 pr-8">
                {mainNavItems.map(({ title, url }, i) => {
                    if (title !== "divider") {
                        return (
                            <div key={title} className="h-20">
                                <NFCNavLink title={title} url={url} />
                            </div>
                        )
                    }
                    if (title === "divider") {
                        return 
                    }
                    return;
                })}
            </nav>
        </span>
    )
}
