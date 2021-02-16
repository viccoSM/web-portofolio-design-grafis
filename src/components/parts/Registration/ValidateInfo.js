export default function validateInfo(values) {
  let errors = {};

  // if (!values.username.trim()) {
  //   errors.username = "Username required";
  // }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.firstName) {
    errors.firstName = "First Name required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name required";
  }
  if (!values.university) {
    errors.university = "University required";
  }

  if (!values.major) {
    errors.major = "Major required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 9) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
