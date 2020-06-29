import fetch from "isomorphic-unfetch";

export default async function (
  path: RequestInfo,
  option: RequestInit
): Promise<any> {
  const endpoint = process.env.REACT_APP_ENDPOINT;

  return fetch(`${path}`, option).then((res) => res.json());
}
