import React from 'react';
import './PhotographerCategories.css'


const PhotographerThumbnail = ({ title, icon, onClick }) => {
  return (
    <div className="thumbnail" onClick={onClick}>
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
    </div>
  );
};

const PhotographerCategories = () => {
  // Add all categories here with their respective icons and navigation paths
  const categories = [
    { title: 'Wedding Photographers', icon: '💑', page: '/wedding' },
    { title: 'Pre Wedding Photoshoot', icon: '👫', page: '/pre-wedding' },
    { title: 'Maternity and Pregnancy Photographers', icon: '🤰', page: '/maternity' },
    { title: 'Baby Shower Photographers', icon: '🛁', page: '/baby-shower' },
    { title: 'Events Photographers', icon: '📅', page: '/events' },
    { title: 'Portfolio Shoot', icon: '📷', page: '/portfolio' },
    { title: 'Product E Commerce Photographers', icon: '📦', page: '/product' },
    { title: 'Birthday Photographers', icon: '🎂', page: '/birthday' },
    { title: 'Newborn Photography', icon: '👶', page: '/newborn' },
    { title: 'Engagement Photographers', icon: '💍', page: '/engagement' },
    { title: 'Family Shoot', icon: '👨‍👩‍👧', page: '/family-shoot' },
    { title: 'House Warming Ceremony Photographers', icon: '🏠', page: '/house-warming' },
    { title: 'Photo Restoration Service', icon: '🖼️', page: '/photo-restoration' },
    { title: 'Post Wedding Photoshoot', icon: '👰🤵', page: '/post-wedding' },
    { title: 'Naming Ceremony Photography', icon: '🎉', page: '/naming-ceremony' },
    { title: 'Upanayana Photography', icon: '🙏', page: '/upanayana' },
    { title: 'Shastipoorthi Photography', icon: '🎊', page: '/shastipoorthi' },
    { title: 'Photo Frames', icon: '🖼️', page: '/photo-frames' },
    { title: 'Album Designers and Printers', icon: '📚', page: '/album-designers' },
    { title: 'Candid Wedding Photography', icon: '📸', page: '/candid-wedding' },
    { title: 'Candid Videographers', icon: '🎥', page: '/candid-videographers' },
    { title: 'Professional Videography', icon: '📹', page: '/professional-videography' },
    { title: 'Corporate Photographers', icon: '🏢', page: '/corporate-photographers' },
    { title: 'Christian Wedding Photographers', icon: '⛪', page: '/christian-wedding' },
    { title: 'Muslim Wedding Photographers', icon: '🕌', page: '/muslim-wedding' },
    { title: 'Digital Photo Studio Near Me', icon: '📷', page: '/digital-photo-studio' },
    { title: 'Puberty Function Photographers', icon: '🎂', page: '/puberty-function' },
    { title: 'Portrait Photography', icon: '👤', page: '/portrait' },
    { title: 'Karizma Album Printing', icon: '📒', page: '/karizma-album' },
    { title: 'Drone Photography', icon: '🚁', page: '/drone-photography' },
    { title: 'Baby Photoshoot', icon: '👶', page: '/baby-photoshoot' },
    { title: 'Photographers Near Me', icon: '📍', page: '/photographers-near-me' },
    { title: 'Cradle Ceremony', icon: '🛏️', page: '/cradle-ceremony' },
    { title: 'Video Editing Services', icon: '🎬', page: '/video-editing' },
    { title: 'Corporate Video Production', icon: '💼', page: '/corporate-video' },
    { title: 'Freelance Photographers', icon: '📸', page: '/freelance-photographers' },
    { title: 'Indoor Maternity Photoshoot', icon: '🤱', page: '/indoor-maternity' },
    { title: 'Fashion Photographers', icon: '👗', page: '/fashion' },
    { title: 'Babys Backyard Studio', icon: '🌳', page: '/babys-backyard' },
    { title: 'Anniversary Photoshoot', icon: '💞', page: '/anniversary' },
    // Add more categories as needed
  ];

  const handleThumbnailClick = (page) => {
    window.location.href = page;
  };

  return (
    <div className="category-container">
        <div className="thumbnail-grid">
        {categories.map((category, index) => (
            <PhotographerThumbnail
            key={index}
            title={category.title}
            icon={category.icon}
            onClick={() => handleThumbnailClick(category.page)}
            />
        ))}
        </div>
    </div>
  );
};

export default PhotographerCategories;
