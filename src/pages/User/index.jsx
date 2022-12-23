import React, { useState, useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import { IoChevronBack } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { useGithub } from "../../hooks/useGithub";
// import { userMockup, reposMockup } from "../../utils/mockup";
import {
  Container,
  Wrapper,
  Logo,
  Info,
  Row,
  Repo,
  ReposContainer,
  ReturnArrow,
} from "./styles";

const sortOptions = {
  stringDesc: (key, record) =>
    record?.sort((a, b) =>
      a?.[key]?.split(" ")[0].localeCompare(b?.[key]?.split(" ")[0])
    ),
  stringCres: (key, record) =>
    record?.sort((a, b) =>
      b?.[key]?.split(" ")[0].localeCompare(a?.[key]?.split(" ")[0])
    ),
  dateDesc: (key, record) =>
    record?.sort((a, b) => new Date(b?.[key]) - new Date(a?.[key])),
  dateCres: (key, record) =>
    record?.sort((a, b) => new Date(a?.[key]) - new Date(b?.[key])),
  numberDesc: (key, record) =>
    record?.sort((a, b) => Number(b?.[key]) - Number(a?.[key])),
  numberCres: (key, record) =>
    record?.sort((a, b) => Number(a?.[key]) - Number(b?.[key])),
};

const orderOptions = [
  {
    label: "Estrelas (Decrescente)",
    value: { dataType: "number", orderType: "Desc", key: "stargazers_count" },
  },
  {
    label: "Estrelas (Crescente)",
    value: { dataType: "number", orderType: "Cres", key: "stargazers_count" },
  },
  {
    label: "Nome (Decrescente)",
    value: { dataType: "string", orderType: "Desc", key: "name" },
  },
  {
    label: "Nome (Crescente)",
    value: { dataType: "string", orderType: "Cres", key: "name" },
  },
  {
    label: "Data (Decrescente)",
    value: { dataType: "date", orderType: "Desc", key: "updated_at" },
  },
  {
    label: "Data (Crescente)",
    value: { dataType: "date", orderType: "Cres", key: "updated_at" },
  },
];

const UserPage = () => {
  const [selectedSort, setSelectedSort] = useState({
    dataType: "number",
    orderType: "Desc",
    key: "stargazers_count",
  });
  const navigate = useNavigate();
  const { username } = useParams();

  const { user, repos, searchUser } = useGithub();

  useEffect(() => {
    if (!username) {
      navigate("/error");
    } else {
      const failed = searchUser(username);
      if (failed) navigate("/error");
    }
  }, [username]);

  // const currentUser = user?.login ? user : userMockup;
  // const currentRepos = repos?.length > 0 ? repos : reposMockup;

  const sortedRepos =
    sortOptions[`${selectedSort?.dataType}${selectedSort?.orderType}`]?.(
      selectedSort?.key,
      repos
    ) ?? repos;

  const handleSort = (label) => {
    const newSort = orderOptions.find((item) => item.label === label)?.value;
    setSelectedSort(newSort);
  };

  if (!user?.name) return <Container></Container>;
  return (
    <Container>
      <Wrapper>
        <ReturnArrow>
          <IoChevronBack onClick={() => navigate("/")} />
        </ReturnArrow>
        <Logo src={user?.avatar_url} />
        <h1>{user?.name}</h1>
        <h2>{user?.login}</h2>
        {user?.bio && <p>{user?.bio}</p>}
        <Info>
          <li></li>
          <li>Following: {user?.following}</li>
          <li>Followers: {user?.followers}</li>
        </Info>
      </Wrapper>
      <Wrapper style={{ padding: 0 }}>
        <Row>
          <h2>Repositórios</h2>
          <select onChange={(e) => handleSort(e.target.value)}>
            {orderOptions.map((option, i) => (
              <option key={i} value={option?.label}>
                {option?.label}
              </option>
            ))}
          </select>
        </Row>
        <ReposContainer>
          {repos?.length > 0 &&
            sortedRepos?.map((repo) => (
              <Repo key={repo?.id}>
                <div className="row">
                  <a href={repo?.html_url} target="_blank">
                    {repo?.name}
                  </a>
                  <span>
                    <TiStarOutline style={{ fontSize: 16 }} />
                    {repo?.stargazers_count}
                  </span>
                </div>
                {repo?.description && <p>{repo?.description}</p>}
                {repo?.language && <span>{repo?.language}</span>}
              </Repo>
            ))}
        </ReposContainer>
      </Wrapper>
    </Container>
  );
};

export default UserPage;
