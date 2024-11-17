import type { MetaFunction } from "@remix-run/node";
import MainComponent from "~/components/main";

export const meta: MetaFunction = () => {
  return [
    { title: "EdQuinx - Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainComponent />
  );
}

