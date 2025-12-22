import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            // 小猫头（简约轮廓）
            d="M12 3c-1.7 0-3.24.71-4.33 1.86L5.7 3.7c-.38-.24-.86.02-.89.47l-.18 2.56C3.64 7.83 3 9.36 3 11.04 3 15.43 7.03 19 12 19s9-3.57 9-7.96c0-1.68-.64-3.21-1.63-4.31l-.18-2.56c-.03-.45-.51-.71-.89-.47l-1.97 1.16C15.24 3.71 13.7 3 12 3Zm-3.5 7.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-5.2 4.1c.55.55 1.2.8 1.7.8s1.15-.25 1.7-.8a.8.8 0 1 1 1.13 1.13c-.86.86-1.9 1.27-2.83 1.27s-1.97-.41-2.83-1.27a.8.8 0 0 1 1.13-1.13Z"
          />
        </svg>
        <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
          牢财文档
        </span>
      </>
    }
    projectLink="https://github.com/validname1233/laocai/"
    projectIcon={
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.2 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.13 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.9.12 3.2.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.9-.02 3.29 0 .32.22.7.82.58 4.77-1.58 8.2-6.08 8.2-11.38C24 5.67 18.63 0.3 12 0.3Z"
        />
      </svg>
    }
  />
);
const footer = (
  <Footer>{new Date().getFullYear()} © laocai All Rights Reserved.</Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
