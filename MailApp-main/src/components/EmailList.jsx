import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EmailCard from "./EmailCard";
import EmailDetails from "./EmailDetails";
import ComposeEmail from "./ComposeEmail";
import "./EmailList.css";

export default function EmailList({ onDeleteEmail, activeSection }) {
  const [emails, setEmails] = useState([
    {
      id: 1,
      image: "bg-blue-100",
      from: "Annie Lynch",
      subject: "Aliquam erat volutpat",
      body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
    {
      id: 2,
      image: "bg-red-100",
      from: "Dribbble Team",
      subject: "How are you getting on?",
      body: `Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "3:30PM",
      isSelected: true,
    },
    {
      id: 3,
      image: "bg-green-100",
      from: "Harry Kim",
      subject: "Pellentesque habitant morbi tristique",
      body: `Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.`,
      hasAttachment: false,
      time: "11:15AM",
    },
    {
      id: 4,
      image: "bg-blue-100",
      from: "Lura Dawson",
      subject: "Duis eget ex eget est soll",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.

        Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
    {
      id: 5,
      image: "bg-blue-100",
      from: "Annie Lynch",
      subject: "Aliquam erat volutpat",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.

        Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
    {
      id: 6,
      image: "bg-blue-100",
      from: "Annie Lynch",
      subject: "Aliquam erat volutpat",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.

        Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
  ]);

  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Recent");
  const [trash, setTrash] = useState([]);

  const handleSendEmail = (email) => {
    alert("Email sent");
    setIsComposeOpen(false);
  };

  const handleDeleteEmail = (emailToDelete) => {
    const updatedEmails = emails.filter(email => email.id !== emailToDelete.id);
    setTrash([...trash, emailToDelete]);
    setEmails(updatedEmails);
    const currentIndex = emails.findIndex(email => email.id === emailToDelete.id);
    const nextEmail = updatedEmails.length > 0 ? updatedEmails[Math.min(currentIndex, updatedEmails.length - 1)] : null;
    setSelectedEmail(nextEmail);
  };

  const timeToDate = (time) => {
    const [timePart, period] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
  
    if (period === 'PM' && hours < 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return new Date(2000, 0, 1, hours, minutes); // Use a dummy date
  };

  const handleDropdownSelect = (option) => {
    setIsDropdownOpen(false);
    setSortOption(option);
  
    const sortedEmails = [...emails].sort((a, b) => {
      const dateA = timeToDate(a.time);
      const dateB = timeToDate(b.time);
  
      if (option === "Recent") {
        return dateB - dateA; // Most recent first
      } else if (option === "Oldest") {
        return dateA - dateB; // Oldest first
      }
      return 0;
    });
  
    setEmails(sortedEmails);
  };

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col bg-dark-500 w-6/12 mr-1 px-0 h-full">
        <div className="flex items-center py-6 px-10">
          <span className="font-light text-xl text-light-200">{activeSection}</span> {/* Display the title here */}
          <div className="ml-2 w-6 h-7 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-2xs font-normal text-light-200 email-count">
            {emails.length}
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="px-3 py-3 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 text-light-200 drop-shadow-3xl ml-auto"
            onClick={() => setIsComposeOpen(true)}
          />
        </div>
        <div className="px-10 pb-5 flex items-center relative-container">
          <span className="text-xs text-light-200">{sortOption}</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-light-200 text-xs ml-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-dark-600"
                onClick={() => handleDropdownSelect("Recent")}
              >
                Recent
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-dark-600"
                onClick={() => handleDropdownSelect("Oldest")}
              >
                Oldest
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col px-10 pb-10 overflow-y-auto">
          {emails.map((email) => (
            <EmailCard
              key={email.id}
              {...email}
              isSelected={selectedEmail && selectedEmail.id === email.id}
              onClick={() => setSelectedEmail(email)}
            />
          ))}
        </div>
      </div>
      <EmailDetails email={selectedEmail} onDelete={handleDeleteEmail} />
      {isComposeOpen && (
        <ComposeEmail onClose={() => setIsComposeOpen(false)} onSend={handleSendEmail} />
      )}
    </div>
  );
}