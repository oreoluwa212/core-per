import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown, { DropdownItem, DropdownLabel } from "./Dropdown";

const AdminNav = () => {
    return (
        <nav className="z-50 h-12 w-full font-axiforma text-black md:h-[90px] md:p-0">
            <div className="shadow sticky left-0 right-0 top-0 mx-auto flex items-center justify-between border-b border-b-neutral-40 bg-white px-[20px] lg:px-[70px]">
                {/* Desktop Navigation */}
                <div className="hidden w-full items-center justify-between pb-[15px] pt-[19px] md:flex">
                    <div className="flex items-center">
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="flex space-x-6">
                        <img
                            src="/logo/search.svg"
                            alt="search-icon"
                            width={32}
                            height={32}
                            className="cursor-pointer stroke-secondary-120"
                        />

                        <Dropdown
                            trigger={
                                <img
                                    src="/logo/bell.svg"
                                    alt="notification-icon"
                                    width={25}
                                    height={25}
                                    className="stroke-secondary-120"
                                />
                            }
                        >
                            <DropdownLabel>
                                <div className="flex items-center justify-between gap-8 bg-secondary-110 px-6 py-5">
                                    <p className="text-lg font-medium text-white">Notifications</p>
                                    <button
                                        type="button"
                                        className="text-sm text-primary-100 duration-200 hover:underline active:scale-95"
                                    >
                                        View All
                                    </button>
                                </div>
                            </DropdownLabel>

                            <DropdownItem>
                                <div className="flex items-center justify-between gap-5 p-4 text-secondary-120">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                                                <img
                                                    src="/logo/notification-badge.svg"
                                                    alt="notification-icon"
                                                    width={16}
                                                    height={16}
                                                />
                                            </span>
                                        </div>
                                        <h4 className="text-sm">
                                            You have gained a new badge{" "}
                                            <span className="font-medium">“Ultimate Player”</span> for
                                            beating record time consistently.
                                        </h4>
                                    </div>
                                    <p className="min-w-max text-xs text-secondary-80">July 20</p>
                                </div>
                            </DropdownItem>

                            <DropdownItem>
                                <div className="flex items-center justify-between gap-5 p-4 text-secondary-120">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                                                <img
                                                    src="/logo/notification-checkmark.svg"
                                                    alt="notification-icon"
                                                    width={16}
                                                    height={16}
                                                />
                                            </span>
                                        </div>
                                        <h4 className="text-sm">
                                            You have beat your record! Great job!
                                        </h4>
                                    </div>
                                    <p className="min-w-max text-xs text-secondary-80">July 19</p>
                                </div>
                            </DropdownItem>

                            <DropdownItem>
                                <div className="flex items-center justify-between gap-5 p-4 text-secondary-120">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                                                <img
                                                    src="/logo/notification-diamond.svg"
                                                    alt="notification-icon"
                                                    width={16}
                                                    height={16}
                                                />
                                            </span>
                                        </div>
                                        <h4 className="text-sm">
                                            You are now{" "}
                                            <span className="font-medium">Player #45</span> on the
                                            leaderboard. Keep going!
                                        </h4>
                                    </div>
                                    <p className="min-w-max text-xs text-secondary-80">July 18</p>
                                </div>
                            </DropdownItem>

                            <DropdownItem>
                                <div className="flex items-center justify-between gap-5 p-4 text-secondary-120">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                                                <img
                                                    src="/logo/notification-checkmark.svg"
                                                    alt="notification-icon"
                                                    width={16}
                                                    height={16}
                                                />
                                            </span>
                                        </div>
                                        <h4 className="text-sm">
                                            Your email has been successfully verified
                                        </h4>
                                    </div>
                                    <p className="min-w-max text-xs text-secondary-80">July 17</p>
                                </div>
                            </DropdownItem>
                        </Dropdown>

                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex w-full items-center justify-between py-2 md:hidden">
                    <div className="flex items-center">
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 bg-white p-[10px]">
                            <p className="sr-only">Menu</p>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNav;
