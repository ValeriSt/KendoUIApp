import "@progress/kendo-theme-default/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";

import "./App.css";
import { useState } from "react";

const frameworks = ["React", "Angular", "Vue", "Svelte"];

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // optional in this layout, but safe

    // Show the toast
    setShowSuccess(true);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="wrapper">
      <h1>KendoReact Showcase</h1>

      <div className="form-group">
        <label>Name:</label>
        <Input placeholder="Enter your name" />
      </div>

      <div className="form-group">
        <label>Favorite Framework:</label>
        <DropDownList data={frameworks} defaultValue={frameworks[0]} />
      </div>

      <div className="form-group">
        <label>Select a Date:</label>
        <DatePicker />
      </div>

      <Button
        themeColor="primary"
        fillMode="solid"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {showSuccess && (
        <NotificationGroup style={{ position: "fixed", bottom: 20, right: 20 }}>
          <Notification type={{ style: "success", icon: true }} closable={false}>
            ✅ Form submitted successfully!
          </Notification>
        </NotificationGroup>
      )}
    </div>
  );
}
