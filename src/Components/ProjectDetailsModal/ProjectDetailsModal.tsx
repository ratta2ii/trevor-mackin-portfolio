import React from "react";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Modal from "@material-ui/core/Modal";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./ProjectDetailsModalStyles";

interface IProps {
  handleClose: () => void;
  open: boolean;
  currentProjectDetails: string;
  currentProjectName: string;
}

const ProjectDetailsModal: React.FC<IProps> = ({
  currentProjectName,
  currentProjectDetails,
  open,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-details-modal-title"
        aria-describedby="project-details-modal-description"
      >
        <Box className={classes.paper}>
          <CancelPresentationIcon
            onClick={() => handleClose()}
            className={classes.closeIcon}
          />
          <Typography variant="h6" style={{ margin: "30px 0 10px" }}>
            {currentProjectName}
          </Typography>
          <Box className={classes.detailsText}>
            {currentProjectDetails !== "" || null
              ? currentProjectDetails
              : "Sorry. No details for this project at this time. Please check back again soon."}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectDetailsModal;
