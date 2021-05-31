import PropTypes from "prop-types";
import styles from './Statistics.module.css'

const randomColor = () => Math.floor(Math.random() * 256);
const randomRGB = () =>
  `rgb(${randomColor()},${randomColor()},${randomColor()})`;
   
const Statistics = ({title, stats}) => {
    return(
        <section className={styles.statistics}>
  {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.statList}>
      {stats.map(stat=> (<li key={stat.id} className={styles.item}  style={{ backgroundColor: `${randomRGB()}` }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>))}
    
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape ({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}

export default Statistics;