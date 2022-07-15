
if (!window.location.pathname.includes(process.env.PUBLIC_URL)) {
  window.history.replaceState(
    '',
    '',
    process.env.PUBLIC_URL + window.location.pathname
  );
}