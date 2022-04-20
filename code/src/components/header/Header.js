import React from "react";
import useStore from "../../store/store";

const Header = (props) => {
  const dispatch = useStore()[1];

  const toggleHandler = (e) => {
    dispatch("TOGGLE_MONTHLY_ANNUAL");
  };

  return (
    <header className="header">
      <h2 className="header__title">Our Pricing</h2>
      <div className="header__toggle">
        <label
          htmlFor="annualMonthlyToggleCheckBox"
          className="header__toggle__annualLabel"
        >
          Annually
        </label>

        <label
          htmlFor="annualMonthlyToggleCheckBox"
          className="header__toggle__main-label"
        >
          <input
            onClick={toggleHandler}
            type="checkbox"
            name="checkbox"
            id="annualMonthlyToggleCheckBox"
          />
          <div className="switch"></div>
        </label>
        <label
          htmlFor="annualMonthlyToggleCheckBox"
          className="header__toggle__monthlyLabel"
        >
          Monthly
        </label>
      </div>
    </header>
  );
};

export default Header;
