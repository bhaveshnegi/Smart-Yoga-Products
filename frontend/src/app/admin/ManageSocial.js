import { useState } from "react";

export default function ManageSocial() {
  const [socialLinks, setSocialLinks] = useState({
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
  });
  const [newLink, setNewLink] = useState({ platform: "", url: "" });

  const updateSocialLink = () => {
    setSocialLinks({ ...socialLinks, [newLink.platform]: newLink.url });
    setNewLink({ platform: "", url: "" });
  };

  return (
    <div>
      <h3>Manage Social Media Links</h3>
      <div>
        <input
          type="text"
          placeholder="Platform (e.g., instagram)"
          value={newLink.platform}
          onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
        />
        <input
          type="url"
          placeholder="Social Media URL"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
        />
        <button onClick={updateSocialLink}>Update Link</button>
      </div>
      <div>
        <h4>Current Social Links:</h4>
        <p>Instagram: {socialLinks.instagram}</p>
        <p>Facebook: {socialLinks.facebook}</p>
      </div>
    </div>
  );
}
