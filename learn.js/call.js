function login(email, password, onSuccess, onError) {
  if (email == "xyz66@gmail.com" && password == "num") {
    onSuccess("9876");
  } else {
    onError("credential is wrong");
  }
}

login(
  "xyz66@gmail.com",
  "num",
  (str) => {
    console.log(str);
  },
  (err) => {
    console.log(err);
  }
);
