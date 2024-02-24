const east8date = () => {
  const timezoneOffset = new Date().getTimezoneOffset();
  const east8Offset = 8 * 60;
  const offset = timezoneOffset + east8Offset;
  return new Date(Date.now() + offset * 60 * 1000);
};

export default east8date;
