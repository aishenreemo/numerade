import axios, { AxiosError } from "axios";

export function get(url: string) {
  const data = axios
    .get(url)
    .then(res => res.data)
    .catch((err: AxiosError) => {
      console.error(`Error: ${err.config.url}`);
      console.error(err.toJSON());
    });

  return data;
}
