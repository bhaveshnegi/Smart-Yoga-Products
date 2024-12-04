const express = require('express');
const router = express.Router();

let socialLinks = {
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
};

router.get('/', (req, res) => {
  res.json(socialLinks);  // Get all social links
});

router.put('/:platform', (req, res) => {
  const { platform } = req.params;  // platform (instagram, facebook)
  const { url } = req.body;  // new URL

  if (socialLinks[platform]) {
    socialLinks[platform] = url;
    res.status(200).json({ message: 'Link updated successfully' });
  } else {
    res.status(404).json({ message: 'Platform not found' });
  }
});

module.exports = router;
