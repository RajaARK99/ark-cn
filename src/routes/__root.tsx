import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { THEME_STORAGE_KEY, ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
import appCss from "../styles.css?url";

const themeBootstrapScript = `
(() => {
	const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
	const root = document.documentElement;
	const storedTheme = window.localStorage.getItem(storageKey);
	const theme =
		storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
			? storedTheme
			: "system";
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	const resolvedTheme = theme === "system" ? systemTheme : theme;

	root.classList.remove("light", "dark");
	root.classList.add(resolvedTheme);
	root.style.colorScheme = resolvedTheme;
})();
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "ARK CN",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey={THEME_STORAGE_KEY}>
          {children}
          <ToastProvider />
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
