import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails
  return (
    <li className="team-item">
      <Link exact to={`/team-matches/${id}`} className="link-">
        <div className="team-item">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
