import styles from './Solutions.module.css';
import recycle from '../../public/images/icon-1.png';
import sun from '../../public/images/icon-2.png';
import wind from '../../public/images/icon-3.png';
import elephant from '../../public/images/elephant.jpg';
import Image from 'next/image';

const Solutions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image src={elephant} />
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={recycle} />
          </div>
          <div className={styles.description}>
            <h4>Recycling</h4>
            <p>
              Recycling and using renewable resources are both important
              strategies for promoting sustainability and reducing our
              environmental impact. Recycling involves the collection and
              processing of waste materials, such as plastic, glass, and paper,
              to create new products. By recycling, we reduce the amount of
              waste that ends up in landfills and conserve natural resources by
              using recycled materials instead of virgin materials.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={sun} />
          </div>
          <div className={styles.description}>
            <h4>Solar Energy</h4>
            <p>
              Solar energy is a type of renewable energy that is generated by
              capturing the energy produced by the sun and converting it into
              usable electricity. Solar energy is an abundant and sustainable
              source of energy that can be used to power homes, businesses, and
              entire communities.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={wind} />
          </div>
          <div className={styles.description}>
            <h4>Wind Energy</h4>
            <p>
              Wind energy is a type of renewable energy that is generated by
              harnessing the power of the wind to produce electricity. Wind
              turbines are used to capture the kinetic energy of the wind and
              convert it into electrical energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solutions;
