import CustomCard from '../Card/Card';
import service1 from '../../public/images/icon-service-1.png';
import service2 from '../../public/images/icon-service-2.png';
import service3 from '../../public/images/icon-service-3.png';
import styles from './CardSection.module.css';

const CardSection = () => {
  const content = [
    {
      title: 'Save Our Forest',
      icon: service1,
      desc: 'Some quick example text to build on the card title and make up the bulk of the card.',
    },
    {
      title: 'Save Our Water',
      icon: service2,
      desc: 'Some quick example text to build on the card title and make up the bulk of the card.',
    },
    {
      title: 'Recycle',
      icon: service3,
      desc: 'Some quick example text to build on the card title and make up the bulk of the card.',
    },
  ];
  return (
    <div className={styles.cardSection}>
      {content.map((item, index) => {
        return <CustomCard {...item} key={index} />;
      })}
    </div>
  );
};
export default CardSection;
