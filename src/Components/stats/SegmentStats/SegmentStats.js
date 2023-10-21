import { i18n } from '../../../I18n'
import NumberStat from '../NumberStat/NumberStat'
import Plot from '../Plot/Plot'
import style from './SegmentStats.module.scss'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'

const SegmentStats = ({
}) => {
    const getRandom = (beforeComma = 1, afterComma = 0) => Math.round(
        Math.random() * (10**(beforeComma + afterComma))
    ) / (10**afterComma)

    const totalUsersStart = getRandom(1, 1)
    const totalUsersEnd = totalUsersStart + getRandom(1, 1)

    return (
      <div className='flex flex-col justify-center w-full'>
        <div className="m-auto flex gap-8 mb-5">
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

        <div className='grid items-center w-[40rem] m-auto mt-10 gap-5 mb-10'>
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            <img src={img5}/>
        </div>
      </div>
    )
}

export default SegmentStats