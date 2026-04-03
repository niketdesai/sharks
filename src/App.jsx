import { useState } from "react";
import Shell from "./layout/Shell.jsx";
import Timeline from "./views/Timeline.jsx";

const TABS = [
  { id: "timeline", label: "Timeline", component: Timeline },
];

export default function App({ arriving }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const ActiveView = TABS.find((t) => t.id === activeTab)?.component || Timeline;

  return (
    <Shell
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      arriving={arriving}
    >
      <ActiveView />
    </Shell>
  );
}
