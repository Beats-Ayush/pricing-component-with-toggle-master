import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_MONTHLY_ANNUAL: (curState) => {
      const isItMonthlyNewValue = !curState.isItMonthly;
      return { isItMonthly: isItMonthlyNewValue };
    },
  };

  initStore(actions, {
    packages: [
      {
        id: "0",
        title: "Basic",
        annualAmt: "199.99",
        monthlyAmt: "19.99",
        storageCapacity: "500 GB Storage",
        usersAllowed: "2 Users Allowed",
        dataSendCapacity: "Send up to 3GB",
      },
      {
        id: "1",
        title: "Professional",
        annualAmt: "249.99",
        monthlyAmt: "24.99",
        storageCapacity: "1 TB Storage",
        usersAllowed: "5 Users Allowed",
        dataSendCapacity: "Send up to 10GB",
      },
      {
        id: "2",
        title: "Master",
        annualAmt: "399.99",
        monthlyAmt: "39.99",
        storageCapacity: "2 TB Storage",
        usersAllowed: "10 Users Allowed",
        dataSendCapacity: "Send up to 20GB",
      },
    ],
    isItMonthly: false,
  });
};

export default configureStore;
