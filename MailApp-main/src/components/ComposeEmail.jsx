import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ComposeEmail.css";

export default function ComposeEmail({ onClose, onSend }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSend = () => {
    alert("Email sent");
    // Add logic to send the email
    onSend({ to, subject, body, attachment });
    onClose();
  };

  return (
    <div className="compose-email">
      <div className="compose-email-header">
        <span>New Message</span>
        <FontAwesomeIcon icon={faTimes} onClick={onClose} />
      </div>
      <div className="compose-email-body">
        <input
          type="email"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="compose-email-footer">
          <div className="compose-email-actions">
            <button className="send-button" onClick={handleSend}>
              Send
            </button>
            <label className="attach-button">
              <FontAwesomeIcon icon={faPaperclip} />
              <input
                type="file"
                onChange={(e) => setAttachment(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
