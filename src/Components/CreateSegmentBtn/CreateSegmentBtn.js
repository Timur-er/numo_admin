import { NavLink } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { CREATE_SEGMENT } from '../../routes/const'
import style from './CreateSegmentBtn.module.scss'

const CreateSegmentBtn = () => {
  const route = routes.find(i => i.path === CREATE_SEGMENT)

  return (
    <NavLink to={route.path} className={style.btn}>
        Create segment
    </NavLink>
  )
}

export default CreateSegmentBtn