import style from './NumberStat.module.scss';

const NumberStat = ({ label, value }) => {
    return (
        <div className={`${style.numberStat} bg-2 text-[0.8rem] px-3 p-2`}>
          <div>{label}</div>
          <div className={style.numberStat__value}>{value} k</div>
        </div>
    )
}

export default NumberStat