import React from "react";
import "./RepoUi.css";

const RepoUi = ({ repos }) => {
  const data = !repos ? "" : repos.map((p) => p.username);
  // console.log(data);

  return (
    <>
      <div className="grid">
        <section className="sidebar">
          <div className="bio-img">
            <img
              src="https://image.freepik.com/free-vector/group-business-people-avatar-character_24877-57314.jpg"
              alt="logo"
            />
            <a href="dickosmad.fr">website mohmaed</a>
          </div>
          <hr />
          <div className="bio">
            <ul>
              <li key={data.id}>Pseudo name :{data[1]} </li>
              <hr />
              <li>Followers : 3</li>
              <hr />
              <li>Following : 6</li>
            </ul>
          </div>
        </section>
        <section className="repo">
          <div>
            <ul className="git-repo">
              <li>
                <a href="https://github.com">Repo name</a>{" "}
              </li>
              {!repos
                ? ""
                : repos.map((r) => (
                    <>
                      <li>
                        <span role="img" aria-label="pin">
                          📌
                        </span>{" "}
                        {r.full_name}
                      </li>
                      <hr />
                    </>
                  ))}
              <li>Programming Language </li>
            </ul>
            {/* <hr className="h-line"/>  */}
          </div>
        </section>
      </div>
    </>
  );
};

export default RepoUi;
