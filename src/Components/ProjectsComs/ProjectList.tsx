import React from 'react';
import { Box, Grid } from '@material-ui/core';
import SingleProject from './SingleProject';
import { makeStyles } from "@material-ui/core/styles";
import PortfolioProjectImg from "./../../assets/portfolio_project.png";
import { IProject } from '../../Models/IProject';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1e2123',
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            
        },
    },
}));

var projectsArray: IProject[] = [
    {
        name: "Pierres Treats",
        techUsed: "C# | APS.NET | Identity | Razor | Entity",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/PierresTreats.Solution",
        liveSite: "",
        description: "This is a server side MVC application built in C# using the ASP.NET Core framework. This project includes migrations using the Entity Framework (Core). This app also demonstrates a working knowledge of both Authentication and Authorization using ASP.NET Identity. A user should be able to view both products, Flavors and Treats, without having to sign in. If you a user wants access to the CRUD functionality in order add, edit, and delete products, the user must create an account and then sign in. After signing in, the user will have the option to add, edit, and delete, both flavors and treats. The application also has functionality to store the entire menu, as well as registered users within the database that was created using Entity Framework migrations. Lastly, the application demonstrates a many to many relationship, where multiple treats may belong to one flavor, and vice versa."
    },
    {
        name: "Hair Salon",
        techUsed: "C# | APS.NET | Identity | Razor | Entity",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/HairSalon.Solution",
        liveSite: "",
        description: "This is a server-side application built in C# using the ASP.NET Core Framework. The project focuses on connecting to a database using Entity Framework Core. The application is meant to be for a Salon owner to keep track of their stylists, and the clients that belong to each stylist individually. When a user runs the application, they should be welcomed on the landing page and given a link to view all stylist. From here, the user should be able to navigate to a page showing all the stylists with CRUD functionality, allowing a user to Add, Edit and Delete a stylist. When the user clicks on a particular stylist they will be presented with a list of clients for that specific stylist. From the list of clients, a user can then click on a specific client to view further details of the client as well. The application also provides all CRUD functionality for each of the clients."
    },
    {
        name: "Hiking Trails App",
        techUsed: "JavaScript | React | HTML | CSS",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/hiking-trails-app",
        liveSite: "",
        description: ""
    },
    {
        name: "Animal Shelter",
        techUsed: "C# | APS.NET | Razor | Entity | MySQLite | Swagger",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/AnimalShelterApi.Solution",
        liveSite: "",
        description: "The goal of this project was to build an application where an animal shelter site would become the provider of an API. The site then allows users to search for various animals by using query parameters. The application also demonstrates how to seed a database, and how to integrate with Swagger to gain access to the tools surrounding RESTful API's. The project is written in C# with ASP.NET framework."
    },
    {
        name: "Cretaceous Park",
        techUsed: "C# | ASP.NET | Entity",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/CretaceousPark.Solution",
        liveSite: "",
        description: ""
    },
    {
        name: "MVC API Calls",
        techUsed: "C# | ASP.NET",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/MvcApiCall.Solution",
        liveSite: "",
        description: ""
    },
    {
        name: "Pizza Shop",
        techUsed: "JavaScript | React | HTML | CSS",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/pizza-shop",
        liveSite: "",
        description: ""
    },
    {
        name: "Beer Shack",
        techUsed: "JavaScript | React | Webpack",
        mainImage: PortfolioProjectImg,
        gitHubRepo: "https://github.com/ratta2ii/beerShack-react",
        liveSite: "",
        description: "This is a client-side application built in React. The focus of this project was to practice drilling down props to lower level components, as well as to show a fundamental understanding of lifting state. The application uses a brewery site that allows a user from the outside to view a list of all products. The app also includes an Authorization component, adding admin capabilities that will present an admin with additional functionality. From here, the admin has CRUD functionality and can add and delete new kegs of beer from product list, as well as place orders for beer. There is also functionality to notify an Admin once the 124 pints have been ordered from a specific keg (Time to refill). Please note that this project is early on into my React journey, so there are definitely some improvements that can be made. Most notably, using Redux to hold global state rather than drilling props down through multiple components."
    },
];

const ProjectList = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                {projectsArray.map((project: IProject, index:number) => (
                    <SingleProject project={project} />
                ))}
            </Grid>
            
        </Box>
    );
}

export default ProjectList;

