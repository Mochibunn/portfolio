export default () => {
  self.addEventListener('message', (e) => {
    const data = e.data;
    const output = run(data);
    self.postMessage(output);
  });
};

const run = (data) => {
  return
}