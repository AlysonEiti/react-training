import styles from './MultiStepForm.module.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import { useForm } from '../hooks/userForm';
import { useState } from 'react'
import UserForm from '../components/UserForm'
import ReviewForm from '../components/ReviewForm'
import Thanks from '../components/Thanks'
import Steps from '../components/Steps'
import Footer from 'multi-step-form/components/Footer';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

export default function MultiStepForm() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    console.log(key, value);
    setData((prev) => {
      return {...prev, [key]: value};
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <Thanks data={data} />
  ];
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep, save } = useForm(formComponents);

  return (
    <>
      <header className={styles.header}>
        <h2>Leave your feedback</h2>
        <p>
          Thank you for the purchase, utilize the form below to rate the product
        </p>
      </header>
      <div className={styles['form-container']}>
        <Steps currentStep={currentStep} />

        <form>
          <div className={styles['inputs-container']}>
            {currentComponent}
          </div>
          <div className={styles.actions}>
            {
              (!isFirstStep) && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Previous</span>
                </button>
              )
            }            
            {
              (!isLastStep) ? (
                <button type='button' onClick={(e) => changeStep(currentStep + 1)}>
                  <span>Next</span>
                  <GrFormNext />              
                </button>
              ) : (
                <button type='button' onClick={(e) => save()}>
                  <span>Next</span>
                  <FiSend />              
                </button>
              )
            }
          </div>
        </form>

      </div>
      <Footer />
    </>
  )
}
