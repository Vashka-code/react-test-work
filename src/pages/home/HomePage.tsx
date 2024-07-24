import { createUseStyles } from "react-jss";

import backgroundImage from "./assets/background.png";
import leftCharacter from "./assets/left-character.png";
import rightCharacter from "./assets/right-character.png";
import { Title } from "../../entities/Title";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <Title text={"Hall of fame"} />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  header: {
    width: "100%",
    minHeight: "100dvh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    paddingTop: "110px",
    textAlign: "center",

    "&:before, &:after": {
      position: "absolute",
    },

    "&:before": {
      content: `url(${leftCharacter})`,

      left: "50px",
      bottom: "-87px",
      // width: "calc(50% - 280px)",
    },

    "&:after": {
      content: `url(${rightCharacter})`,

      right: "30px",
      bottom: "-60px",
      // width: "calc(50% - 240px)",
    },
  },

  headerContent: {
    width: "640px",
    margin: "0 auto",
    position: "relative",
  },
});
