import { i18n } from '../../../I18n'
import NumberStat from '../NumberStat/NumberStat'
import Plot from '../Plot/Plot'
import style from './SegmentStats.module.scss'

const SegmentStats = ({
}) => {

    const {
        totalUsersStart = '2.5 k',
        totalUsersEnd = '4.5 k',
        subsData,
        unsubsData,
        activityData
    } = {}

    return (
      <div>
        <div className={style.numberStats}>
            <NumberStat
                label={i18n.totalUsersStart}
                value={totalUsersStart}
            />
            <NumberStat
                label={i18n.totalUsersEnd}
                value={totalUsersEnd}
            />
        </div>

        <Plot />
      </div>
    )
}

export default SegmentStats