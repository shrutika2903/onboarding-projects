import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';

export const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <HomeIcon />,
    },
    {
      id: 2,
      url: '/team',
      text: 'team',
      icon: <GroupIcon />,
    },
    {
        id: 3,
        url: '/projects',
        text: 'project',
        icon: <FolderCopyIcon />,
      },
      {
        id: 4,
        url: '/calendar',
        text: 'calendar',
        icon: <CalendarMonthIcon />,
      },
      {
        id: 5,
        url: '/document',
        text: 'document',
        icon: <ArticleIcon />,
      },
];

export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <TwitterIcon />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <LinkedInIcon />,
    },

  ];