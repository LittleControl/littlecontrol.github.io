import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LittleControl's Blog",
  description: "小控的理想乡",
  srcDir: "blogs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Database", link: "/database" },
      { text: "Development", link: "/development" },
      { text: "Archive", link: "/archive" },
    ],

    sidebar: [
      {
        text: "Directory",
        items: [
          { text: "Database", link: "/database" },
          { text: "Development", link: "/development" },
          { text: "Archive", link: "/archive" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
  markdown: {
    lineNumbers: true,
  },
  cleanUrls: true,
  lastUpdated: true,
});
