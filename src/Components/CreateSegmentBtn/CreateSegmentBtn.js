import { NavLink } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { CREATE_SEGMENT } from '../../routes/const'

const CreateSegmentBtn = () => {
  const route = routes.find(i => i.path === CREATE_SEGMENT)

  return (
    <NavLink to={route.path} className="btn-primary">
        Create a segment
    </NavLink>
  )
}

export default CreateSegmentBtn