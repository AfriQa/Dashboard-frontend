import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import './deliver.css'


function getSteps() {
  return [
    "Order Accepted ",
    "Item Picked up ",
    "Arrived On delivery location",
    "Payment Recevied ",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <p>
            "Customer Name " order has been accepted , Courier is heading to
            pick up ordered item
          </p>
          ETA :{" "}
          <Chip color="secondary" label="10 mintues out " variant="outlined" />
        </div>
      );
    case 1:
      return (
        <div>
          <p>
            "`Orderd Item is on the hands of "Curiour Name " and heading to
            "Customers Name " .`
          </p>
          ETA :{" "}
          <Chip color="secondary" label="10 mintues out " variant="outlined" />
        </div>
      );

    case 2:
      return `you've arived on customer's location`;

    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="rootProgress">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className="actionsContainer">
                <div>
                 
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className="button"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={9} className="resetContainer">
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className="button">
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
