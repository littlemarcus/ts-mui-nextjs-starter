import { Config } from "@netlify/edge-functions"

const edgeError = async () => {
  try {
    throw new Error("error");
  } catch (error) {
    console.error("Edge function error:", error);
    
    throw error;
  }
};

export const config: Config = {
  path: "/hello",
  onError: "bypass"
}

export default edgeError;

