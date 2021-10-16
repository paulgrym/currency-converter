{
    const currencyElement = document.querySelector(".js-currency");
    const rateElement = document.querySelector(".js-rate");

    assignRateElementValue = () => {
        switch (currencyElement.value) {
            case "EUR":
                return 4.54;
            case "USD":
                return 3.85;
            case "CZK":
                return 0.18;
            default:
                return "";
        };
    };

    updateRateElementValue = () => {
        rateElement.value = assignRateElementValue();
    };

    const calculateResult = (amount) => {
        return amount / rateElement.value;
    };

    const updateTextResult = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        if (currencyElement.value === "none") {
            resultElement.innerHTML = `Wybierz walutę`;
        } else {
            resultElement.innerHTML = `${amount}PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
        }
    };

    const submitForm = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount)
        updateTextResult(amount, result, currency)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        currencyElement.addEventListener("input", updateRateElementValue);
        currencyElement.addEventListener("input", assignRateElementValue);
        formElement.addEventListener("submit", submitForm);
    };

    init();
}