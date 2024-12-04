import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageSocial() {
  const [socialLinks, setSocialLinks] = useState({});
  const [newLink, setNewLink] = useState({ platform: "", url: "" });

  useEffect(() => {
    const fetchLinks = async () => {
      const { data } = await axios.get("https://smart-yoga-products-backend.onrender.com/api/social");
      setSocialLinks(data);
    };
    fetchLinks();
  }, []);

  const updateSocialLink = async () => {
    try {
      const { platform, url } = newLink;
      const response = await axios.put(
        `https://smart-yoga-products-backend.onrender.com/api/social/${platform}`,  // Correct URL
        { url }
      );
      console.log("Social link updated:", response.data);
      setNewLink({ platform: "", url: "" });
    } catch (error) {
      console.error("Error updating social link:", error);
    }
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
        {Object.entries(socialLinks).map(([platform, url]) => (
          <p key={platform}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)}: <a href={url}>{url}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
