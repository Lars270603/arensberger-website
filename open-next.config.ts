import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

export default {
  ...config,
  // Ohne diese explizite Angabe ruft OpenNext intern "npm run build" auf,
  // um den Next.js-Build zu starten. Da "npm run build" selbst
  // "opennextjs-cloudflare build" ist (Cloudflare-Vorgabe: Build Command =
  // "npm run build"), würde das eine Endlosrekursion auslösen.
  buildCommand: "next build",
};
