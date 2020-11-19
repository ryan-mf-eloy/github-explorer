import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import getThemePreference from '../../utils/getThemePreference';
import { Header, Issues, RepositoryInfo } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  },
}

const RepositoryDetails: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [themePreference, setThemePreference] = useState<string>('dark');

  useEffect(() => {
    const handleThemePreference = () => {
      const definedThemePreference = getThemePreference();
      if(definedThemePreference) return setThemePreference(definedThemePreference);
    }
    handleThemePreference();
  });

  useEffect(() => {
  api.get(`repos/${params.repository}`).then(repository => {
    setRepository(repository.data);
  });
   api.get(`repos/${params.repository}/issues`).then(issues => {
    setIssues(issues.data);
  });

  }, [params.repository]);

  return (
    <>
      <Header>
        { 
          themePreference === 'dark'
          ? <img src={logoLight} alt="Github Explorer" />
          : <img src={logoDark} alt="Github Explorer" />
        }
        <Link to="/">
          <FiChevronLeft size="16"/> Voltar
        </Link>
      </Header>

      { repository &&
        <RepositoryInfo>
        <header>
          <img 
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          
          <div>
            <strong>{params.repository}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>}

      <Issues>
        { issues.map(issue => {
          return (
            <a target="_blank" rel="noreferrer" href={issue.html_url} key={issue.id}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size="25"/>
            </a>
          );
        })}
      </Issues>
    </>
  );
}

export default RepositoryDetails;