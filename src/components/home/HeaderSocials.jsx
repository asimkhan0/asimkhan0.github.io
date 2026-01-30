import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/asimkhan034/',
  },
  // {
  //   id: 2,
  //   icon: 'fa-brands fa-x-twitter',
  //   link: 'https://twitter.com/kavindzMW',
  // },
  // {
  //   id: 3,
  //   icon: 'fa-brands fa-behance',
  //   link: 'https://www.behance.net/kavindamadhura',
  // },

  {
    id: 2,
    icon: 'fa-brands fa-github',
    link: 'https://github.com/asimkhan0',
  },
  {
    id: 3,
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/asim.khan.034/',
  },
];

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.link}
          className="home__social-link"
          target="_blank"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
