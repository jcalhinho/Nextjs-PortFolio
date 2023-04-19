export type Mode = "POST" | "GET";

export default function Fetch(uri: string, mode: Mode = "GET", body?: any) {
  const dev = process.env.NODE_ENV !== "production";
  const baseUri = dev ? "http://localhost:3000/api/" : "https://yjy-portfolio.netlify.app/api/";
  switch (mode) {
    case "GET":
      return fetch(baseUri + uri);
    case "POST":
      return fetch(baseUri + uri, { body, method: "POST" });
  }
}
