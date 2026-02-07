import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import "./TestCredential.css";

export default function TestCredential() {
  const TEST_PASSWORD = "user1test";
  const TEST_USER = "test_user@test.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(TEST_PASSWORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="test-credentials">
      <input type="user" value={TEST_USER} readOnly />

      <div>
        <input type="password" value={TEST_PASSWORD} readOnly />
        <button type="button" onClick={handleCopy} className="copy-btn">
        {copied ? <FiCheck /> : <FiCopy />}
        </button>
        {copied && <span className="copied-text">Copied!</span>}
      </div>

    </div>
  );
}
