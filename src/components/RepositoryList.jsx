import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'best-repo-ever',
  description: 'some great description',
  link: 'https://github.com'

}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repo={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem repo={repository} />
      </ul>
    </section>
  )
}