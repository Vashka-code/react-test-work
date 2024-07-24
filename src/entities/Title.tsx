import { createUseStyles } from "react-jss";

interface TitleInterface {
  text: string;
}

export const Title = ({ text }: TitleInterface) => {
  const classes = useStyles();

  return <div className={classes.title}>{text}</div>;
};

const useStyles = createUseStyles({
  title: {
    fontFamily: "AA BadaBoom BB, sans-serif",
    fontSize: "70px",
    lineHeight: "1",
    letterSpacing: "6%",
    color: "#FCC211",
  },
});
