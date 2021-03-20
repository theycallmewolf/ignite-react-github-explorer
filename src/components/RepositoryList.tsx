import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/bruno-wolf/repos')
      .then(response => response.json())
      .then((data : Repository[]) => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem repo={repository} key={repository.id}/>)}
      </ul>
    </section>
  )
}