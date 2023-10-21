import style from './NumberStat.module.scss';

const NumberStat = ({ label, value }) => {
    return (
        <div className={style.numberStat}>
          <div>{label}</div>
          <div className={style.numberStat__value}>{value}</div>
        </div>
    )
}

export default NumberStat