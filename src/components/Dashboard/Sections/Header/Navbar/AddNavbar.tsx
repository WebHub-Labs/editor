import Node from "../..";
import {
  NavbarProps,
  createNavbarStore,
} from "../../../../../core/statemanagement/useNavbarStore";

export class AddNavbar extends Node {
  navbar = createNavbarStore();
  navbarState = this.navbar.getState();
  constructor(
    before: string | null,
    after: string | null,
    props?: NavbarProps
  ) {
    super(before, after);
    this.navbar = createNavbarStore({ ...props });
    this.navbarState = this.navbar.getState();
  }
}

export default AddNavbar;
