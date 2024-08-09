import { useState } from "react";

export default function SideNav({ setActiveSection }) {
  const [navItems, setNavItems] = useState([
    { id: 1, name: "All Mails", isActive: false },
    { id: 2, name: "Inbox", isActive: true },
    { id: 3, name: "Sent", isActive: false },
    { id: 4, name: "Draft", isActive: false },
    { id: 5, name: "Trash", isActive: false },
  ]);

  const handleNavItemClick = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
    );
    setNavItems(updatedNavItems);
    const activeItem = updatedNavItems.find((item) => item.id === id);
    setActiveSection(activeItem.name.replace(" ", ""));
  };

  return (
    <nav className="w-3/12 h-full bg-dark-600 flex flex-col items-center">
      <div className="flex items-center my-14">
        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
        <span className="font-semibold text-light-100 ml-4">MailApp</span>
      </div>
      <ul>
        {navItems.map((navItem, index) => (
          <li
            key={navItem.id}
            onClick={() => handleNavItemClick(navItem.id)}
            className={`cursor-pointer ${navItem.isActive ? "flex items-center relative py-1" : ""} ${index > 0 ? "my-6" : "mb-4"}`}
          >
            {navItem.isActive ? (
              <div className="w-10 h-[2px] bg-light-200 mr-2 absolute -left-12"></div>
            ) : null}
            <span className={`text-xs ${navItem.isActive ? "text-light-200" : "text-light-500"}`}>
              {navItem.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
