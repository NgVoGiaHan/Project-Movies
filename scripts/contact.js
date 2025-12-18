// Contact Information - Bạn có thể chỉnh sửa thông tin ở đây
const contactInfo = {
  github: {
    icon: 'fa-github',
    title: 'GitHub',
    name: 'Nguyễn Võ Gia Hân',
    email: 'nguyenvogiahan73@gmail.com',
    phone: '0384417544',
    link: 'https://github.com/NgVoGiaHan',
    linkText: 'Xem GitHub của tôi'
  },
  facebook: {
    icon: 'fa-facebook',
    title: 'Facebook',
    name: 'Nguyễn Võ Gia Hân',
    email: 'nguyenvogiahan73@gmail.com',
    phone: '0384417544',
    link: 'https://www.facebook.com/giaa.hann.822730',
    linkText: 'Xem Facebook của tôi'
  },
  instagram: {
    icon: 'fa-instagram',
    title: 'Instagram',
    name: 'Nguyễn Võ Gia Hân',
    email: 'nguyenvogiahan73@gmail.com',
    phone: '0384417544',
    link: 'https://instagram.com/yourusername',
    linkText: 'Xem Instagram của tôi'
  }
};

function showContactModal(platform) {
  const modal = document.getElementById('contactModal');
  const info = contactInfo[platform];
  
  if (!info) return;
  
  // Set icon
  const iconElement = document.getElementById('contactModalIcon');
  iconElement.className = `fa-brands ${info.icon}`;
  
  // Set title
  document.getElementById('contactModalTitle').textContent = `Thông Tin ${info.title}`;
  
  // Set contact info
  document.getElementById('contactName').textContent = info.name;
  document.getElementById('contactEmail').textContent = info.email;
  document.getElementById('contactPhone').textContent = info.phone;
  
  // Set link
  const linkElement = document.getElementById('contactLink');
  linkElement.href = info.link;
  linkElement.textContent = info.linkText;
  
  // Show modal
  modal.classList.add('show');
  modal.style.display = 'flex';
  modal.style.zIndex = '99999';
  document.body.style.overflow = 'hidden';
  
  // Force modal to top layer
  if (modal.parentElement) {
    document.body.appendChild(modal);
  }
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeContactModal();
  }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeContactModal();
  }
});

