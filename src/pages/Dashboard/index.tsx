import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import getThemePreference from '../../utils/getThemePreference';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [themePreference, setThemePreference] = useState<string>('dark');

  const handleAddRepository = async(event:FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;
    
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

 useEffect(() => {
   const themePreference = getThemePreference();

   if(themePreference) return setThemePreference(themePreference);
 })

  return (
    <>
      { themePreference === 'dark'
         ? <img src={logoLight} alt="Github Explorer" />
         : <img src={logoDark} alt="Github Explorer" />
      }
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={({ target }) => setNewRepo(target.value)}
          required
        />
        <button type="submit"><FiSearch size="25"/></button>
      </Form>

      <Repositories>
        { repositories.map(repository => {
          return (
            <a href="#" key={repository.full_name}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size="25"/>
            </a>
          ); }) }
      </Repositories>
    </>
  );
}

export default Dashboard;