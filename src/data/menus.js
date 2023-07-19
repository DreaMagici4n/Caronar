import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  {
    label: 'Halaman'
  },
  {
    label: "Blank",
    path: "/blank",
    icon: faPage4,
  },  
  {
    label: 'Histórico',
    path: "/historico",
    icon: faTable,
  },
  {
    label: "Form",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "Corridas",
    path: "/table",
    icon: faTable,
  },

  {
    label: 'Otentikasi'
  },
  {
    label: "Login",
    path: "/auth/login",
    icon: faLock,
  },
  {
    label: "Register",
    path: "/auth/register",
    icon: faNoteSticky,
  },
];

export default initMenu