import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        padding: "75px 10% 0 10%",
        backgroundColor: "#0a0a0a",
        // display: 'flex',
        overflowX: "hidden",
        // overflowY: "hidden",
        [theme.breakpoints.down("sm")]: {
            padding: "75px 5% 0 5%",
        },
    },
    title: {
        backgroundImage:
            "radial-gradient(circle farthest-side at 50% 50%, #f5f5f5, #616161)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        fontWeight: 600,
        fontSize: "3.9rem",
        marginBottom: "5%",
        marginLeft: "8%",
        [theme.breakpoints.down("md")]: {
            fontSize: "3.2rem",
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "3rem",
            marginBottom: 100,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.3rem",
            marginBottom: 0,
            marginLeft: 0,
        },
    },
    imgBox: {
        animation: "fadeIn ease 2s",
        textAlign: "center",
        // animationName: 'slideInRight',
        // animationDuration: '1.5s',
        // animationFillMode: 'both',
    },
    profileImage: {
        width: "80%",
        maxWidth: 550,
        border: "2px solid #292727",
        borderTopLeftRadius: "60px",
        borderBottomRightRadius: "60px",
        borderTopRightRadius: "3px",
        borderBottomLeftRadius: "3px",
        boxShadow: "inset 5em 1em gold",
    },
}));

export default useStyles;
