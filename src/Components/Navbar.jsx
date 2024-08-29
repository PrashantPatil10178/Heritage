import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faPaintBrush,
  faScroll,
  faBook,
  faInfoCircle,
  faPhoneAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Define modern colors for the icons
  const iconColors = {
    monuments: "#ff5733", // Orange-Red
    art: "#33a1ff", // Light Blue
    literature: "#33ff57", // Green
    history: "#ff33a8", // Pink
  };

  return (
    <>
      <div className="h-2 w-full bg-[#e0a800]"></div>
      <Navbar
        shouldHideOnScroll={true}
        isBordered={true}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-gradient-to-r from-[#ffefba] to-[#ffffff] text-black"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <h2 className="font-extrabold font-Main text-black text-4xl mb-1">
              Virasat
            </h2>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-black" color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button auto light className="text-black flex items-center">
                  <FontAwesomeIcon icon={faLandmark} className="mr-2" />{" "}
                  Heritage{" "}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Heritage Sections" color="secondary">
                <DropdownItem key="monuments">
                  <FontAwesomeIcon
                    icon={faLandmark}
                    className="mr-2"
                    style={{ color: iconColors.monuments }}
                  />{" "}
                  <span className="text-black">Monuments</span>
                </DropdownItem>
                <DropdownItem key="art">
                  <FontAwesomeIcon
                    icon={faPaintBrush}
                    className="mr-2"
                    style={{ color: iconColors.art }}
                  />{" "}
                  <span className="text-black">Art & Craft</span>
                </DropdownItem>
                <DropdownItem key="literature">
                  <FontAwesomeIcon
                    icon={faScroll}
                    className="mr-2"
                    style={{ color: iconColors.literature }}
                  />{" "}
                  <span className="text-black">Literature</span>
                </DropdownItem>
                <DropdownItem key="history">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="mr-2"
                    style={{ color: iconColors.history }}
                  />{" "}
                  <span className="text-black">History</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black" href="#">
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Input
              clearable
              bordered
              placeholder="Search..."
              className="text-black bg-white rounded-lg placeholder-gray-400"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link className="text-black font-bold" href="#">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Help
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              className="bg-[#e0a800] text-black font-bold"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="text-black w-full" href="#" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black w-full" href="#" size="lg">
              Heritage
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black w-full" href="#" size="lg">
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black w-full" href="#" size="lg">
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
