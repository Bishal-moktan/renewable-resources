import styles from './Team.module.css';
import jeniffer from '../../../public/images/jeniffer.jpg';
import john from '../../../public/images/john.jpg';
import amely from '../../../public/images/amely.jpg';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const content = [
    {
      id: 1,
      img: jeniffer,
      name: 'Jennifer Smith',
      role: 'Founder',
      info: 'Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
    },
    {
      id: 2,
      img: john,
      name: 'John Doe',
      role: 'GENERAL MANAGER',
      info: 'Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
    },
    {
      id: 3,
      img: amely,
      name: 'Amely Chan',
      role: 'HUMAN RELATION',
      info: 'Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
    },
  ];
  return (
    <div className={styles.container}>
      <h3>Meet The Team</h3>
      <div className={styles.cards}>
        {content.map((card) => {
          return (
            <article key={card.id}>
              <div className={styles.card_img}>
                <Image src={card.img} />
              </div>
              <div className={styles.info}>
                <h4>{card.name}</h4>
                <span>{card.role}</span>
                <p>{card.info}</p>
              </div>
              <div className={styles.icons}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Team;
