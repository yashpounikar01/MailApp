import React, { useState, useEffect } from 'react';
import EmailCard from './EmailCard';
import EmailDetails from './EmailDetails';

function AllMails() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emails, setEmails] = useState([]);

  const inboxEmails = [
    {
      id: 1,
      image: "bg-blue-100",
      from: "alice@example.com",
      subject: "Meeting Reminder",
      body: "Don't forget about the meeting tomorrow at 10 AM.",
      hasAttachment: false,
      time: "2:12PM",
      date: "2024-07-18",
    },
    {
      id: 2,
      image: "bg-red-100",
      from: "bob@example.com",
      subject: "Project Update",
      body: "The project is on track for the deadline.",
      hasAttachment: false,
      time: "3:30PM",
      date: "2024-07-17",
    },
    {
      id: 3,
      image: "bg-green-100",
      from: "carol@example.com",
      subject: "Lunch Plans",
      body: "Would you like to go for lunch tomorrow?",
      hasAttachment: false,
      time: "11:15AM",
      date: "2024-07-16",
    },
  ];

  useEffect(() => {
    // Combine all emails into one array and sort by date and time
    const combinedEmails = [...inboxEmails];
    combinedEmails.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    setEmails(combinedEmails);
    if (combinedEmails.length > 0) {
      setSelectedEmail(combinedEmails[0]);
    }
  }, []);

  const handleDeleteEmail = (emailToDelete) => {
    const emailIndex = emails.findIndex(email => email.id === emailToDelete.id);
    const updatedEmails = emails.filter(email => email.id !== emailToDelete.id);

    if (updatedEmails.length === 0) {
      setSelectedEmail(null);
    } else {
      const nextEmail = emailIndex < updatedEmails.length ? updatedEmails[emailIndex] : updatedEmails[emailIndex - 1];
      setSelectedEmail(nextEmail);
    }

    setEmails(updatedEmails);
  };

  return (
    <div className="flex flex-row w-full h-full">
      {/* Email List Column */}
      <div className="flex flex-col bg-dark-500 w-3/12 mr-1 px-0 h-full">
        <div className="flex items-center py-6 px-10">
          <span className="font-light text-xl text-light-200">Emails</span>
        </div>
        <div className="flex flex-col px-10 pb-10 overflow-y-auto">
          {emails.map((email) => (
            <EmailCard
              key={email.id}
              image={email.image}
              from={email.from}
              time={email.time}
              subject={email.subject}
              body={email.body}
              hasAttachment={email.hasAttachment}
              isSelected={selectedEmail && selectedEmail.id === email.id}
              onClick={() => setSelectedEmail(email)}
            />
          ))}
        </div>
      </div>

      {/* Email Details Section */}
      <div className="flex flex-col bg-dark-500 w-9/12 ml-1 px-0 h-full">
        <EmailDetails email={selectedEmail} onDeleteEmail={handleDeleteEmail} />
      </div>
    </div>
  );
}

export default AllMails;
