import swal from "sweetalert";

export const msgInfoAddres = (html: HTMLElement) => swal({
  content: {
    element: html
  }
})