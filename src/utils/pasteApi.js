export function getPaste(id) {
  return fetch(`https://rfvlb.sse.codesandbox.io/${id}`).then(res => {
    if (res.status !== 200) {
      throw new Error(`Invalid request ${res.status}`);
    }
    return res.json();
  });
}
