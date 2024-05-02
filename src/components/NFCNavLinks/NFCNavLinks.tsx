import NFCNavLink from "@/components/NFCNavLink/NFCNavLink";

import type { NavLinks } from "@/components/NFCNavLinks/NFCNavLinksTypes";

const mainNavItems: NavLinks[] = [
  {
    title: "About",
    url: "/about",
    id: "about",
  },
  {
    title: "Work With Us",
    url: "/work-with-us",
    id: "work-with-us",
  },
  {
    title: "Blog",
    url: "/blog",
    id: "blog",
  },
  {
    title: "Contact",
    url: "/contact",
    id: "contact",
  },
  {
    title: "Login",
    url: "/api/auth/signin",
    id: "login",
  },
];

export const NFCNavLinksHorizontal = () => {
  const navItems = mainNavItems.reduce(
    (acc: NavLinks[], { title, url, id }, i, a) => {
      if (i < a.length - 1) {
        acc.push({ title, url, id });
        acc.push({ title: "divider", url: "", id: `divider-${i}`});
      }
      if (i === a.length - 1) {
        acc.push({ title, url, id });
      }
      return acc;
    },
    [],
  );

  return (
    <span className="h-full">
      <nav className="flex-10 flex flex-row items-center justify-end gap-3 text-xl text-white first:before:content-none h-full">
        {navItems.map(({ title, url, id }, i, a) => {
          if (title !== "divider") {
            return <NFCNavLink key={id} url={url} title={title} />;
          }
          if (title === "divider") {
            return (
              <span key={id} className="bg-white h-1.5 rounded-full w-1.5" />
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
