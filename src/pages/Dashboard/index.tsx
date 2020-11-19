import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

import { FiChevronRight, FiFrown, FiSearch } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import getThemePreference from '../../utils/getThemePreference';
import isEmpty from '../../utils/isEmpty';
import { Link } from 'react-router-dom';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    return storagedRepositories
     ? JSON.parse(storagedRepositories)
     : [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [themePreference, setThemePreference] = useState<string>('dark');

  const handleClear = (): void => {
    setNewRepo('');
    setInputError('');
  }

  const handleAddRepository = async(event:FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if(isEmpty(newRepo))
      return setInputError('Insira o nome do repositório!');

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      
      setRepositories([...repositories, repository]);
      handleClear();
    } catch(error) {
      setInputError('Ooops! Parece que houve um erro na busca por esse repositório :/');
    }
  }

  useEffect(() => {
    const handleThemePreference = () => {
      const definedThemePreference = getThemePreference();
      if(definedThemePreference) return setThemePreference(definedThemePreference);
    }
    handleThemePreference();
  });

  useEffect(() => {
    const saveRepositories = () => localStorage
      .setItem("@GithubExplorer:repositories", JSON.stringify(repositories));

   saveRepositories();
  }, [repositories]);

  return (
    <>
      { 
        themePreference === 'dark'
         ? <img src={logoLight} alt="Github Explorer" />
         : <img src={logoDark} alt="Github Explorer" />
      }
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do repositório. Ex: autor/nome-do-repositório"
          value={newRepo}
          onChange={({ target }) => setNewRepo(target.value)}
        />
        <button type="submit"><FiSearch size="25"/></button>
      </Form>

      {isEmpty(inputError) === false && <Error><FiFrown size="20"/> {inputError}</Error>}

      <Repositories>
        { repositories.map(repository => {
          return (
            <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size="25"/>
            </Link>
          ); }) }
      </Repositories>
    </>
  );
}

export default Dashboard;