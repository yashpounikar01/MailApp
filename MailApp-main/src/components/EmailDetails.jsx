import {
  faEllipsisH,
  faReply,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EmailDetails.css";

export default function EmailDetails({ email, onDelete }) {
  if (!email) {
    return null;
  }

  const { from, time, subject, body } = email;

  return (
    <div className="email-details-container">
      <div className="email-header">
        <div className="w-10 h-10 rounded-xl bg-red-200 mr-4"></div>
        <span className="text-sm text-light-200 font-medium">{from}</span>
        <div className="flex relative ml-6">
          <div className="w-6 h-6 rounded-full bg-red-200 border border-2 border-dark-600"></div>
          <div className="w-6 h-6 rounded-full bg-blue-200 border border-2 border-dark-600 absolute ml-3"></div>
          <div className="w-6 h-6 rounded-full bg-green-200 border border-2 border-dark-600 absolute ml-6"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-200 border border-2 border-dark-600 absolute ml-9"></div>
        </div>
        <div className="flex ml-auto">
          <FontAwesomeIcon icon={faReply} className="mx-2 text-light-200" />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="mx-2 text-light-200"
            onClick={() => onDelete(email)}
          />
          <FontAwesomeIcon icon={faEllipsisH} className="mx-2 text-light-200" />
        </div>
      </div>
      <div className="email-meta">
        <span className="text-2xs text-light-600 font-bold mt-6">{time}</span>
      </div>
      <div className="email-body">
        <span className="text-lg text-light-100 font-light mb-6">{subject}</span>
        <div className="text-xs text-light-500 whitespace-pre-wrap">{body}</div>
      </div>
    </div>
  );
}
