/*Create a functions that fetch user id from server and then using that user id you have to call two functions that fetch messages and userDetails at same time repectively.
*/
//"strings"
function getUserIdFromServer() {
  return new Promise((success, error) => {
    const userId = "aman";
    success(userId);
  });
}
function getMessages(userId) {
  return new Promise((success, error) => {
    if (userId == "aman") {
      success(["hi", "bye"]);
    } else {
      error("user not found");
    }
  });
}
function getuserDetails(userId) {
  return new Promise((success, error) => {
    const userDetails = {
      id: userId,
      name: "harshrandi",
      age: "69",
    };
    success(userDetails);
  });
}
async function onStart() {
  const userId = await getUserIdFromServer();
  const [messages, userDetails] = await Promise.all([
    getMessages(userId),
    getuserDetails(userId),
  ]);
  console.log(`messages: ${messages} & userDetails: ${userDetails.name}`);
}
onStart();