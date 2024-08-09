import React, { useState } from 'react';
import ContentHeader from "./ContentHeader";
import EmailDetails from "./EmailDetails";
import EmailList from "./EmailList";

export default function Main({ activeSection }) {
  const [trashEmails, setTrashEmails] = useState([]);

  const handleDeleteEmail = (email) => {
    setTrashEmails([...trashEmails, email]);
  };

  const renderContent = () => {
    return (
      <div className="flex flex-row" style={{ height: "calc(100% - 84px)" }}>
        <EmailList onDeleteEmail={handleDeleteEmail} activeSection={activeSection} />
        <EmailDetails />
      </div>
    );
  };

  return (
    <main className="flex flex-col w-full bg-dark-600 h-full">
      <ContentHeader />
      {renderContent()}
    </main>
  );
}
