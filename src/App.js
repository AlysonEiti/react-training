import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './multi-step-form/components/UserForm'
import ReviewForm from './multi-step-form/components/ReviewForm'
import Thanks from './multi-step-form/components/Thanks'
import { useForm } from './multi-step-form/hooks/userForm';
import { useState } from 'react'
import './App.css';
import Steps from './multi-step-form/components/Steps'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
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
    
    <div className="App">
      <header className='header'>
        <h2>Leave your feedback</h2>
        <p>
          Thank you for the purchase, utilize the form below to rate the product
        </p>
      </header>
      <div className='form-container'>
        <Steps currentStep={currentStep} />

        <form>
          <div className='inputs-container'>
            {currentComponent}
          </div>
          <div className='actions'>
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
    </div>
  );
}

export default App;
