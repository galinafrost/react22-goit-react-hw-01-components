import PropTypes from 'prop-types';

import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const statistics = stats.map(stat => {
    return (
      <li key={stat.id} className={styles.item}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
      </li>
    );
  });
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat}>{statistics}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
