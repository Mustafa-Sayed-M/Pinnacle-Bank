import { createSlice } from "@reduxjs/toolkit";

const useCasesSlice = createSlice({
    name: "useCases",
    initialState: {
        individualsData: {
            features: [
                {
                    icon: "fa-solid fa-hand-holding-dollar fa-fw",
                    name: "Managing Personal Finances"
                },
                {
                    icon: "fa-solid fa-money-bill-transfer fa-fw",
                    name: "Saving for the Future"
                },
                {
                    icon: "fa-solid fa-building-columns fa-fw",
                    name: "Home owner ship"
                },
                {
                    icon: "fa-solid fa-book-open fa-fw",
                    name: "Education Funding"
                },
            ]
        },
        businessData: {
            features: [
                {
                    icon: "fa-solid fa-building fa-fw",
                    name: "Startups and Entrepreneurs"
                },
                {
                    icon: "fa-solid fa-money-bill-transfer fa-fw",
                    name: "Cash Flow Management"
                },
                {
                    icon: "fa-solid fa-chart-simple fa-fw",
                    name: "Business Expansion"
                },
                {
                    icon: "fa-solid fa-dollar-sign fa-fw",
                    name: "Payment Solutions"
                },
            ]
        },
    }
});

export default useCasesSlice.reducer;