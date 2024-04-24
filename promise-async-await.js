// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ user: "jatt" });
//     // reject(new Error("User not logged in"));
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err.message));

function loginUser1(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have data");
      resolve({ email: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    if (email === "j@j.com") {
      setTimeout(() => {
        resolve(["video1", "jatt", "travis"]);
      }, 2000);
    } else {
      reject(new Error("User not logged in"));
    }
  });
}

function getVideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("TITLE of the video");
    }, 1000);
  });
}

// loginUser1("j@j.com", "1343")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => getVideoDetails(videos[0]))
//   .then((detail) => console.log(detail))
//   .catch((err) => console.log(err));

//again to make this more simple will use async and await

async function displayUser() {
  try {
    const loggedUser = await loginUser1("j@j.om", "1343");
    const videos = await getUserVideos(loggedUser.email);
    const detail = await getVideoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log(err);
  }
}

displayUser();

console.log("end");

// const user1 = loginUser1("johar@j.com", "13343", (data) => {
//   console.log(data);
//   getUserVideos(data.userEmail,(videos)=>{
//     console.log(videos);
//     getVideoDetails(videos[0],(title)=>{
//       console.log(title);
//     })
//   })
// });
