import type { Config } from "@react-router/dev/config";
import { prerender } from "react-dom/static";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "auth/testing",
      //products
      "/products/iphone",
      "/products/ipad",
      "/products/macbook",
    ];
  },
} satisfies Config;
