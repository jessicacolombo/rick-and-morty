import { StyledLi } from "./style";

export function CharCard({
  id,
  name,
  status,
  species,
  image,
  origin,
  location,
  url,
}) {
  return (
    <StyledLi key={id}>
      <div className="image-box">
        <img src={image} alt={name + " image"} />
      </div>
      <div className="container-texts">
        <div className="text-box__title">
          <a href={url}>
            <h2>{name.length <= 15 ? name : name.slice(0, 15) + "..."}</h2>
          </a>
          <span>
            <span className={"status-code " + status.toLowerCase()}></span>
            {species} - {status}
          </span>
        </div>
        <div className="text-box__texts">
          <span>Last known location:</span>
          <a href={location.url}>{location.name}</a>
        </div>
        <div className="text-box__texts">
          <span>First seen in:</span>
          <a href={origin.url}>{origin.name}</a>
        </div>
      </div>
    </StyledLi>
  );
}
