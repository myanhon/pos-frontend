import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

const toast = {
  error: (message, title = "Error") => {
    return iziToast.error({
      title: title,
      message: message,
      position: "topCenter"
    });
  },
  success: (message, title = "Success") => {
    return iziToast.success({
      title: title,
      message: message,
      position: "topCenter"
    });
  }
};

export default toast;
