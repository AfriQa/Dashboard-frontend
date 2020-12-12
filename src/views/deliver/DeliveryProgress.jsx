import React, { useState, useEffect } from "react"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import './deliver.css'
import { getOrderCountIndex } from "../../resolvers/Order/OrderState"

function getSteps() {
  return [
    "Order Accepted ",
    "Item Picked up ",
    "Arrived On delivery location",
    "Payment Recevied ",
  ]
}

function getStepContent(step, order, customer) {
  const eta = order.orderInfo.estimatedDeliveryTime ? order.orderInfo.estimatedDeliveryTime : ""
  const deliveryPerson = order.orderInfo.deliveryPerson ? order.orderInfo.deliveryPerson : ""
  switch (step) {
    case 0:
      return (
        <div>
          <p>
            {`${customer.fullName}'s, order has been accepted by ${deliveryPerson} and is heading to pick up ordered items`}
          </p>
          ETA :{" "}
          <Chip color="secondary" label={eta} variant="outlined" />
        </div>
      )
    case 1:
      return (
        <div>
          <p>
            {`Order is on the hands of ${deliveryPerson} and heading to ${customer.fullName} `}
          </p>
          ETA :{" "}
          <Chip color="secondary" label={eta} variant="outlined" />
        </div>
      )

    case 2:
      return `You have arrived at customer's location.`

    case 3:
      return (
        <div>
          <p>
            {`${customer.fullName} has payed successfully`}
          </p>
          ETA :{" "}
          <Chip color="secondary" label={"Payed"} variant="outlined" />
        </div>
      )

    default:
      return "Unknown step"
  }
}

const VerticalLinearStepper = ({ order, customer, pickOrder, arriveOrder, payOrder }) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()
  const [lock, setLock] = useState(false)

  useEffect(() => {
    if (!lock) {
      setActiveStep(getOrderCountIndex(order.status))
      setLock(true)
    }
  }, [order.status])

  const handleNext = () => {
    switch (activeStep) {
      case 0: {
        pickOrder()
        setLock(false)
        break
      }
      case 1: {
        arriveOrder()
        setLock(false)
        break
      }

      case 2: {
        payOrder()
        setLock(false)
      }

      default: return null
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className="rootProgress">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index, order, customer)}</Typography>
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
          <Typography>All steps completed - you&aposre finished</Typography>
          <Button onClick={handleReset} className="button">
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}

export default VerticalLinearStepper