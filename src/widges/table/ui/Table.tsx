import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";

import { Title } from "../../../entities/Title";
import { getUsers } from "../api/getUsers";

import type { User } from "../types/user.d.ts";

import HeaderTopLine from "../assets/header-top-line.png";

export const Table = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showButton, setShowButton] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    fetchUsers(5);
  }, []);

  const fetchUsers = (limit?: number) => {
    try {
      getUsers(limit).then(setUsers);
    } catch (err) {
      /* empty */
    }
  };

  const handleClick = () => {
    fetchUsers();
    setShowButton(false);
  };

  return (
    <div className={classes.table}>
      <Title text="Top winners" />

      <div className={classes.tableContainer}>
        <img
          className={classes.tableHeaderLine}
          src={`${HeaderTopLine}`}
          alt=""
        />
        <div className={`${classes.tableRow} ${classes.tableRowHeader}`}>
          <div className={classes.tableItem}>Place</div>
          <div className={classes.tableItem}>Player</div>
          <div className={classes.tableItem}>Score</div>
          <div className={classes.tableItem}>Prize</div>
        </div>
        {!!users.length &&
          users.map((user) => {
            return (
              <div className={`${classes.tableRow}`} key={user.place}>
                <div
                  className={`${classes.tableItem}  ${classes.tableItem}${user.place}`}
                >
                  {user.place}
                </div>
                <div className={classes.tableItem}>{user.name}</div>
                <div className={classes.tableItem}>{user.score}</div>
                <div className={classes.tableItem}>{user.prize}</div>
              </div>
            );
          })}
      </div>

      {showButton && (
        <button className={classes.button} onClick={handleClick}>
          Show all
        </button>
      )}
    </div>
  );
};

const useStyles = createUseStyles({
  table: {
    width: "100%",
    maxWidth: "880px",
    margin: "0 auto",
    padding: "55px 0 50px",
    textAlign: "center",
  },
  tableContainer: {
    marginTop: "15px",
  },
  tableHeaderLine: {
    width: "100%",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "15px 45px 15px 25px",
    backgroundColor: "#DCDCDC",
    gap: "10px",
    borderBottom: "1px solid #000",
    "&:last-child": {
      borderRadius: "0 0 10px 10px",
    },
  },
  tableRowHeader: {
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#fff",
    padding: "15px 45px 15px 25px",
    marginTop: "-35px",
    fontWeight: "700",
  },
  tableItem: {
    fontFamily: "Merriweather_Sans, sans-serif",
    fontSize: "12px",
    lineHeight: "1",
    textAlign: "left",
    "&:last-child": {
      textAlign: "right",
    },
    "&:first-child": {
      width: "50px",
      textAlign: "center",
    },
  },
  button: {
    marginTop: "20px",
  },
});
