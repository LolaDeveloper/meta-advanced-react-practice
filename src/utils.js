export const validateEmail = (email) => {
  // This line takes the input email and converts it to a string
  return (
    String(email)
      .toLowerCase()
      // This line matches the string against a regular expression pattern
      // to determine if it is a valid email address
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};
