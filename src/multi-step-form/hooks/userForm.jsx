import React, { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        if(e) e.preventDefault();
        if(i < 0 || i >= steps.length) return false;

        setCurrentStep(i);
    }

    function save() {
        alert('Enviando informacoes ...');
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        save 
    };
}