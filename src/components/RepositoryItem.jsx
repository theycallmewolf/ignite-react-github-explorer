export function RepositoryItem(props) {
  return(
    <li>
      <strong>{props.repo?.name ?? 'default'}</strong>
      {props.repo?.description && <p>{props.repo?.description}</p>}
      <br />
      <a href={props.repo?.html_url} target="_blank" rel="noreferrer noopener">visitar</a>
    </li>
  );
}