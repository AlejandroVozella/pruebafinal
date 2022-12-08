import Swal from "sweetalert2";
import axios from "axios";

/* function getUser(user) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (user.usuario === "foo") return resolve(userDetail);
      return reject("No such user");
    }, 2000)
  );
} */

function getUser(user) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("datos al servidor ", user);
      let data = await axios.post(
        "https://app-final-bk.herokuapp.com/login/",
        user
      );
      return resolve(data);
    } catch (error) {
      console.log(error);
      //Alerta Fallida.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo." + error,
      });
      return reject("Ocurrio un error, intenta de nuevo." + error);
    }
  });
}

export default getUser;
