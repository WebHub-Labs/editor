import {
  NavbarProps,
  createNavbarStore,
} from "../../../../../core/statemanagement/useNavbarStore";

export class AddNavbar {
  navbar = createNavbarStore();
  navbarState = this.navbar.getState();
  constructor(props?: NavbarProps) {
    this.navbar = createNavbarStore({ ...props });
    this.navbarState = this.navbar.getState();
  }
}

export default AddNavbar;
