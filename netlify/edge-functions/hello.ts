import { Config } from "@netlify/edge-functions"

const edgeError = async () => {
  throw new Error("error");
};

export const config: Config = {
  path: "/hello",
  onError: "bypass"
}

export default edgeError;
