import { FaThumbsUp } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { IoIosTrophy } from 'react-icons/io';
import { TiGroup } from 'react-icons/ti';

export const facts = [
  {id:1, icon: <FaStar size={25}/>, number: 100, para: 'Partners & Agencies' },
  {id:2, icon: <FaThumbsUp size={25}/>, number: 100, para: 'Satisfied Buyers' },
  {id:3, icon: <FaTruckFast size={25}/>, number: 100, para: 'Product Shipped (Tons)' },
  {id:4, icon: <FaGlobeAfrica size={25}/>, number: 100, para: 'Global Research' },
  {id:5, icon: <IoIosTrophy size={25}/>, number: 100, para: 'Years of Experience' },
  {id:6, icon: <TiGroup size={25}/>, number: 100, para: 'Followers on Social Media' },
];
