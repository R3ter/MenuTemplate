export default () => {
  const host = window.location.hostname;
  const subdomain = host.split(".")[0];
  return subdomain;
};
